#!/usr/bin/env node
/**
 * Audits the prerendered site in dist/ and reports SEO defects as facts.
 *
 * Reads the static HTML only — no browser, no network — so it runs anywhere
 * and is safe as a CI gate. That is only meaningful because scripts/prerender.mjs
 * puts the real content in those files; before prerendering there was nothing
 * here to audit.
 *
 * Writes seo-report.json for diffing between runs. Exits non-zero when any
 * ERROR-level finding is present; warnings never fail the build.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');
const ORIGIN = 'https://www.premierfoundationrepairofbatonrouge.com';

const LIMITS = {
  titleMin: 15, titleMax: 65,
  descMin: 70, descMax: 165,
  minWords: 250,
};

const section = (html, tag) =>
  (html.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i'))?.[1] ?? '');
const attr = (html, re) => html.match(re)?.[1]?.trim() ?? null;
const stripTags = (html) =>
  html.replace(/<(script|style|svg)[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' ')
      .replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();

function routesFromSitemap() {
  const xml = readFileSync(path.join(ROOT, 'public', 'sitemap.xml'), 'utf8');
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => new URL(m[1].trim()).pathname)
    .map((p) => (p === '/' ? '/' : p.replace(/\/+$/, '')));
}

const fileFor = (route) =>
  route === '/' ? path.join(DIST, 'index.html') : path.join(DIST, route, 'index.html');

function analyze(route, html) {
  const head = section(html, 'head');
  const body = section(html, 'body');
  const text = stripTags(body);

  const ld = [...head.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .map((m) => {
      try {
        return { ok: true, type: JSON.parse(m[1])['@type'] };
      } catch (e) {
        return { ok: false, error: e.message };
      }
    });

  const links = [...body.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map((m) => m[1]);
  const images = [...body.matchAll(/<img\b[^>]*>/g)];

  return {
    route,
    title: attr(head, /<title>([\s\S]*?)<\/title>/i),
    description: attr(head, /<meta name="description" content="([^"]*)"/i),
    canonical: attr(head, /<link rel="canonical" href="([^"]*)"/i),
    robots: attr(head, /<meta name="robots" content="([^"]*)"/i),
    ogTitle: attr(head, /<meta property="og:title" content="([^"]*)"/i),
    ogImage: attr(head, /<meta property="og:image" content="([^"]*)"/i),
    h1Count: (body.match(/<h1\b/g) ?? []).length,
    h1: stripTags(section(body, 'h1')).slice(0, 80) || null,
    words: text ? text.split(' ').length : 0,
    internalLinks: [...new Set(links.filter((h) => h.startsWith('/')).map((h) => {
      const clean = h.split(/[?#]/)[0].replace(/\/+$/, '');
      return clean === '' ? '/' : clean;
    }))],
    imagesMissingAlt: images.filter((m) => !/\balt="/.test(m[0])).length,
    imageCount: images.length,
    schema: ld,
  };
}

const findings = [];
const add = (level, route, check, message) => findings.push({ level, route, check, message });

const routes = routesFromSitemap();
const pages = [];

for (const route of routes) {
  const file = fileFor(route);
  if (!existsSync(file)) {
    add('ERROR', route, 'prerender', `listed in sitemap.xml but ${path.relative(ROOT, file)} was not generated`);
    continue;
  }
  pages.push(analyze(route, readFileSync(file, 'utf8')));
}

const known = new Set(routes);

for (const p of pages) {
  const expected = ORIGIN + (p.route === '/' ? '/' : p.route);

  if (!p.title) add('ERROR', p.route, 'title', 'no <title>');
  else if (p.title.length < LIMITS.titleMin || p.title.length > LIMITS.titleMax)
    add('WARN', p.route, 'title', `${p.title.length} chars (aim ${LIMITS.titleMin}-${LIMITS.titleMax})`);

  if (!p.description) add('ERROR', p.route, 'description', 'no meta description');
  else if (p.description.length < LIMITS.descMin || p.description.length > LIMITS.descMax)
    add('WARN', p.route, 'description', `${p.description.length} chars (aim ${LIMITS.descMin}-${LIMITS.descMax})`);

  if (!p.canonical) add('ERROR', p.route, 'canonical', 'no canonical link');
  else if (p.canonical !== expected)
    add('ERROR', p.route, 'canonical', `points at ${p.canonical}, expected ${expected}`);

  if (p.h1Count === 0) add('ERROR', p.route, 'h1', 'no <h1>');
  else if (p.h1Count > 1) add('ERROR', p.route, 'h1', `${p.h1Count} <h1> elements, expected 1`);

  if (p.words < LIMITS.minWords)
    add('WARN', p.route, 'thin-content', `${p.words} words of body text (thin under ${LIMITS.minWords})`);

  if (!p.ogTitle || !p.ogImage) add('WARN', p.route, 'social', 'missing og:title or og:image');
  if (p.robots?.includes('noindex')) add('ERROR', p.route, 'robots', 'noindex on a page listed in sitemap.xml');

  for (const block of p.schema)
    if (!block.ok) add('ERROR', p.route, 'schema', `unparseable JSON-LD: ${block.error}`);
  if (!p.schema.some((b) => b.ok && b.type === 'GeneralContractor'))
    add('WARN', p.route, 'schema', 'no LocalBusiness node');

  if (p.imagesMissingAlt)
    add('WARN', p.route, 'alt-text', `${p.imagesMissingAlt} of ${p.imageCount} <img> without alt`);

  for (const href of p.internalLinks)
    if (!known.has(href) && !path.extname(href))
      add('ERROR', p.route, 'broken-link', `links to ${href}, which is not a route`);
}

const dupes = (key) => {
  const seen = new Map();
  for (const p of pages) {
    if (!p[key]) continue;
    seen.set(p[key], [...(seen.get(p[key]) ?? []), p.route]);
  }
  for (const [value, rs] of seen)
    if (rs.length > 1)
      add('ERROR', rs.join(', '), `duplicate-${key}`, `${rs.length} pages share: "${String(value).slice(0, 60)}…"`);
};
dupes('title');
dupes('description');

const inbound = new Map(routes.map((r) => [r, 0]));
for (const p of pages)
  for (const href of p.internalLinks)
    if (href !== p.route && inbound.has(href)) inbound.set(href, inbound.get(href) + 1);
for (const [route, count] of inbound)
  if (count === 0 && route !== '/')
    add('WARN', route, 'orphan', 'no other page links to it');

const errors = findings.filter((f) => f.level === 'ERROR');
const warns = findings.filter((f) => f.level === 'WARN');

writeFileSync(
  path.join(ROOT, 'seo-report.json'),
  JSON.stringify({ generatedAt: new Date().toISOString(), pages, findings }, null, 2),
);

const totalWords = pages.reduce((n, p) => n + p.words, 0);
console.log(`seo-audit: ${pages.length} prerendered pages, ${Math.round(totalWords / Math.max(pages.length, 1))} avg words`);
console.log(`           ${errors.length} error(s), ${warns.length} warning(s)  →  seo-report.json\n`);

for (const group of [errors, warns]) {
  if (!group.length) continue;
  const byCheck = new Map();
  for (const f of group) byCheck.set(f.check, [...(byCheck.get(f.check) ?? []), f]);
  for (const [check, list] of byCheck) {
    console.log(`  ${group === errors ? 'ERROR' : 'WARN '}  ${check} (${list.length})`);
    for (const f of list.slice(0, 6)) console.log(`         ${f.route}: ${f.message}`);
    if (list.length > 6) console.log(`         … and ${list.length - 6} more (see seo-report.json)`);
  }
  console.log('');
}

process.exit(errors.length ? 1 : 0);
