#!/usr/bin/env node
/**
 * Fails the build when the router and the route manifest disagree.
 *
 * This matters because vercel.json no longer has a SPA catch-all rewrite. Every
 * URL the site serves is a prerendered file, and anything else is a real 404 —
 * which is the point. The cost is that a route the router serves but
 * src/routes.ts does not list is never generated, so it would 404 in
 * production while working perfectly in `npm run dev`. That is the kind of bug
 * you find from a traffic drop weeks later, so it is a build failure instead.
 *
 * The reverse direction — a manifest entry the router does not serve — is
 * already caught by scripts/prerender.mjs, which fails when a route renders the
 * catch-all 404 page.
 *
 * Blog posts and service areas are excluded: the router and the manifest both
 * derive them from the same data, so they cannot drift. This checks that that
 * assumption still holds too.
 */
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const ROOT = process.cwd();
const APP = path.join(ROOT, 'src', 'App.tsx');

const source = readFileSync(APP, 'utf8');

// Literal routes: <Route path="/foo" ... />
const literal = new Set(
  [...source.matchAll(/<Route\s+path="([^"]+)"/g)].map((m) => m[1]).filter((p) => p !== '*'),
);

// Data-driven routes must still be generated from the shared data, not listed
// out by hand — otherwise they can drift from the manifest like literals can.
const derivedFromBlog = /blogPosts\.map\(/.test(source);
const derivedFromAreas = /Object\.entries\(serviceAreas\)\.map\(/.test(source);

const { routes } = await import(
  pathToFileURL(path.join(ROOT, 'dist-ssr', 'entry-server.js')).href
);

const manifest = new Set(routes.map((r) => r.path));
const problems = [];

if (!derivedFromBlog) {
  problems.push('src/App.tsx no longer builds blog routes from blogPosts.map() — they can now drift from the manifest');
}
if (!derivedFromAreas) {
  problems.push('src/App.tsx no longer builds area routes from Object.entries(serviceAreas).map() — they can now drift from the manifest');
}

for (const route of literal) {
  if (!manifest.has(route)) {
    problems.push(`src/App.tsx serves ${route} but src/routes.ts does not list it — it will not be generated, and will 404 in production`);
  }
}

// Manifest entries that are literal pages (not blog posts or service areas)
// must appear in App.tsx; the data-driven ones legitimately do not.
for (const r of routes) {
  const isDataDriven = r.lastmod !== undefined || r.source === 'src/data/serviceAreas.ts';
  if (!isDataDriven && !literal.has(r.path)) {
    problems.push(`src/routes.ts lists ${r.path} but src/App.tsx has no <Route> for it`);
  }
}

if (problems.length) {
  console.error('');
  console.error(`check-routes: ERROR — router and manifest disagree (${problems.length})`);
  for (const p of problems) console.error(`  ${p}`);
  console.error('');
  process.exit(1);
}

console.log(`check-routes: OK — ${literal.size} literal routes match the manifest, ${routes.length} routes total`);
