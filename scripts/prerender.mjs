#!/usr/bin/env node
/**
 * Turns the client-rendered SPA into real HTML, one file per route.
 *
 * Without this the deployed HTML is an empty <div id="root"></div>: no text, no
 * headings, no links. Googlebot renders JavaScript on a deferred second pass,
 * but other crawlers largely do not, so every route is prerendered at build
 * time and React hydrates over it (see src/main.tsx).
 *
 * Routes come from public/sitemap.xml, which makes the sitemap the single
 * source of truth — a URL listed there but not served by the router fails the
 * build rather than shipping a sitemap that points at 404s.
 *
 * Runs entirely in Node via react-dom/server. No headless browser, so it works
 * on any CI or Vercel build container without extra setup.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');
const SSR_ENTRY = path.join(ROOT, 'dist-ssr', 'entry-server.js');
const SITEMAP = path.join(ROOT, 'public', 'sitemap.xml');

const escapeAttr = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const escapeText = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
/** JSON-LD sits in raw-text context; only "<" can terminate the script early. */
const escapeJsonLd = (o) => JSON.stringify(o).replace(/</g, '\\u003c');

function setTitle(html, title) {
  return html.replace(/<title>[\s\S]*?<\/title>/i, () => `<title>${escapeText(title)}</title>`);
}

function upsertMeta(html, attr, key, content) {
  const re = new RegExp(`<meta\\s+${attr}="${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*/?>`, 'i');
  const tag = `<meta ${attr}="${key}" content="${escapeAttr(content)}" />`;
  return re.test(html) ? html.replace(re, () => tag) : html.replace('</head>', () => `    ${tag}\n  </head>`);
}

function upsertCanonical(html, href) {
  const tag = `<link rel="canonical" href="${escapeAttr(href)}" />`;
  const re = /<link\s+rel="canonical"[^>]*\/?>/i;
  return re.test(html) ? html.replace(re, () => tag) : html.replace('</head>', () => `    ${tag}\n  </head>`);
}

function appendSchema(html, blocks) {
  if (!blocks.length) return html;
  const scripts = blocks
    .map((b) => `    <script type="application/ld+json" data-seo-schema>${escapeJsonLd(b)}</script>`)
    .join('\n');
  return html.replace('</head>', () => `${scripts}\n  </head>`);
}

function applyHead(html, head) {
  let out = setTitle(html, head.title);
  out = upsertCanonical(out, head.canonical);
  const meta = {
    name: {
      description: head.description,
      'twitter:title': head.title,
      'twitter:description': head.description,
      'twitter:image': head.image,
    },
    property: {
      'og:title': head.title,
      'og:description': head.description,
      'og:url': head.canonical,
      'og:image': head.image,
    },
  };
  for (const [key, value] of Object.entries(meta.name)) out = upsertMeta(out, 'name', key, value);
  for (const [key, value] of Object.entries(meta.property)) out = upsertMeta(out, 'property', key, value);
  if (head.noindex) out = upsertMeta(out, 'name', 'robots', 'noindex, follow');
  return appendSchema(out, head.schema);
}

function routesFromSitemap() {
  const xml = readFileSync(SITEMAP, 'utf8');
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  if (!locs.length) throw new Error('No <loc> entries found in public/sitemap.xml');
  const seen = new Set();
  return locs.map((loc) => {
    const { pathname } = new URL(loc);
    const route = pathname !== '/' ? pathname.replace(/\/+$/, '') : '/';
    if (seen.has(route)) throw new Error(`Duplicate URL in sitemap.xml: ${route}`);
    seen.add(route);
    return route;
  });
}

const outputFor = (route) =>
  route === '/' ? path.join(DIST, 'index.html') : path.join(DIST, route, 'index.html');

const template = readFileSync(path.join(DIST, 'index.html'), 'utf8');
if (!template.includes('<div id="root"></div>')) {
  console.error('prerender: dist/index.html has no empty <div id="root"></div> to fill.');
  process.exit(1);
}

const { render } = await import(pathToFileURL(SSR_ENTRY).href);
const routes = routesFromSitemap();
const problems = [];
let totalText = 0;

for (const route of routes) {
  let result;
  try {
    result = render(route);
  } catch (err) {
    problems.push(`${route}: render threw — ${err.message}`);
    continue;
  }
  const { html, head } = result;

  if (!head) {
    problems.push(`${route}: rendered without a <Seo> block, so it has no title or description`);
    continue;
  }
  // The catch-all 404 is the only route that sets noindex; reaching it from a
  // sitemap URL means the sitemap and the router have drifted apart.
  if (head.noindex) {
    problems.push(`${route}: listed in sitemap.xml but the router renders the 404 page`);
    continue;
  }

  const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (text.length < 200) {
    problems.push(`${route}: rendered only ${text.length} characters of text`);
    continue;
  }
  totalText += text.length;

  const page = applyHead(template, head).replace(
    '<div id="root"></div>',
    () => `<div id="root">${html}</div>`,
  );

  // Guard against the rendered markup being altered on its way into the
  // template. String.replace() treats "$$" and "$&" in a replacement string as
  // escape sequences, which silently rewrote the "$$$$" cost column on two
  // pages and broke hydration there. Every injection now uses a function
  // replacement; this asserts that stays true.
  if (!page.includes(html)) {
    problems.push(`${route}: rendered markup was altered during injection (replacement escaping)`);
    continue;
  }

  const out = outputFor(route);
  mkdirSync(path.dirname(out), { recursive: true });
  writeFileSync(out, page);
}

const ok = routes.length - problems.length;
console.log(
  `prerender: ${ok}/${routes.length} routes written to static HTML ` +
    `(avg ${Math.round(totalText / Math.max(ok, 1))} chars of text per page)`,
);

if (problems.length) {
  console.error('');
  console.error(`prerender: ERROR — ${problems.length} route(s) failed`);
  for (const p of problems) console.error(`  ${p}`);
  console.error('');
  process.exit(1);
}
