#!/usr/bin/env node
/**
 * Static server that models Vercel's routing order for local verification:
 * redirects → exact file → <path>.html → <path>/index.html → SPA fallback.
 *
 * Redirects are read from vercel.json so a retired URL behaves here the way it
 * will in production, instead of silently falling through to the SPA 404.
 *
 * `vite preview` sends every extensionless path straight to the SPA fallback,
 * which hides prerendered pages and makes hydration look broken locally even
 * though Vercel serves them correctly (rewrites run only after the filesystem).
 */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const DIST = path.join(process.cwd(), 'dist');

/** Exact-path redirects declared in vercel.json. */
const REDIRECTS = new Map(
  (JSON.parse(readFileSync(path.join(process.cwd(), 'vercel.json'), 'utf8')).redirects ?? [])
    .filter((r) => !r.source.includes(':') && !r.source.includes('('))
    .map((r) => [r.source, { to: r.destination, status: r.permanent ? 308 : 307 }]),
);
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.ico': 'image/x-icon', '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8', '.woff2': 'font/woff2',
};

async function resolve(pathname) {
  const clean = decodeURIComponent(pathname.split('?')[0]).replace(/\/+$/, '') || '/';
  const rel = clean === '/' ? 'index.html' : clean.slice(1);
  for (const candidate of [rel, `${rel}.html`, path.join(rel, 'index.html')]) {
    const file = path.join(DIST, candidate);
    if (!file.startsWith(DIST)) continue; // no traversal outside dist
    try {
      if ((await stat(file)).isFile()) return file;
    } catch { /* try next candidate */ }
  }
  return path.join(DIST, 'index.html'); // SPA fallback, same as vercel.json
}

export function serve(port) {
  const server = createServer(async (req, res) => {
    const pathname = new URL(req.url, 'http://x').pathname;

    const hit = REDIRECTS.get(pathname.replace(/\/+$/, '') || '/');
    if (hit) {
      res.writeHead(hit.status, { location: hit.to });
      res.end();
      return;
    }

    const file = await resolve(pathname);
    try {
      const body = await readFile(file);
      res.writeHead(200, { 'content-type': TYPES[path.extname(file)] ?? 'application/octet-stream' });
      res.end(body);
    } catch {
      res.writeHead(404, { 'content-type': 'text/plain' });
      res.end('not found');
    }
  });
  return new Promise((ok) => server.listen(port, () => ok(server)));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const port = Number(process.argv[2] ?? 4190);
  await serve(port);
  console.log(`serve-dist: http://localhost:${port} (Vercel-style resolution)`);
}
