#!/usr/bin/env node
/**
 * Writes public/sitemap.xml from the route manifest in src/routes.ts.
 *
 * The sitemap used to be hand-maintained, which meant every route change was
 * two edits and the lastmod dates drifted until they were simply untrue — 38 of
 * 39 URLs claimed the same date, including posts rewritten weeks later.
 *
 * lastmod is emitted only where the date is actually known: blog posts carry
 * their own, other pages get the date of the last commit touching their source
 * file. A lastmod nobody can stand behind is worse than none, so when git
 * cannot answer — no repository, or a shallow clone where every file shares the
 * single fetched commit — the field is omitted rather than guessed.
 */
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const ROOT = process.cwd();
const ORIGIN = 'https://www.premierfoundationrepairofbatonrouge.com';
const OUT = path.join(ROOT, 'public', 'sitemap.xml');

function git(args) {
  try {
    return execFileSync('git', args, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return null;
  }
}

const gitUsable = git(['rev-parse', '--is-inside-work-tree']) === 'true'
  && git(['rev-parse', '--is-shallow-repository']) === 'false';

if (!gitUsable) {
  console.warn('generate-sitemap: no usable git history — omitting lastmod for pages dated from it');
}

const dateCache = new Map();
function lastCommitDate(file) {
  if (!gitUsable) return undefined;
  if (!dateCache.has(file)) dateCache.set(file, git(['log', '-1', '--format=%cs', '--', file]) || undefined);
  return dateCache.get(file);
}

const { routes } = await import(pathToFileURL(path.join(ROOT, 'dist-ssr', 'entry-server.js')).href);

const urls = routes.map((r) => {
  const lastmod = r.lastmod ?? (r.source ? lastCommitDate(r.source) : undefined);
  return [
    '  <url>',
    `<loc>${ORIGIN}${r.path === '/' ? '/' : r.path}</loc>`,
    lastmod ? `<lastmod>${lastmod}</lastmod>` : '',
    `<changefreq>${r.changefreq}</changefreq>`,
    `<priority>${r.priority.toFixed(1)}</priority>`,
    '</url>',
  ].join('');
});

writeFileSync(
  OUT,
  '<?xml version="1.0" encoding="UTF-8"?>\n'
    + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    + `${urls.join('\n')}\n</urlset>\n`,
);

const dated = routes.filter((r) => r.lastmod ?? (r.source ? lastCommitDate(r.source) : undefined)).length;
console.log(`generate-sitemap: ${routes.length} urls, ${dated} with a real lastmod -> public/sitemap.xml`);
