---
name: seo-audit
description: Run the SEO audit on this site and triage what it finds. Use when asked to check SEO, find SEO problems, check a page's metadata, schema, canonicals or internal links, or verify that a change did not break indexing.
argument-hint: "[route or area to focus on]"
allowed-tools: Bash(npm run *), Bash(node scripts/*), Read, Grep, Glob
---

## Last audit

!`node -e "try{const r=require('./seo-report.json');const e=r.findings.filter(f=>f.level==='ERROR').length,w=r.findings.filter(f=>f.level==='WARN').length;console.log('Generated '+r.generatedAt+' — '+r.pages.length+' pages, '+e+' error(s), '+w+' warning(s)')}catch(x){console.log('No seo-report.json yet.')}"`

## How this site works

It is a Vite + React SPA that is **prerendered to static HTML at build time**.
That matters for every judgement you make here:

- `scripts/prerender.mjs` renders all routes with `react-dom/server` and writes
  `dist/<route>/index.html`. The routes come from `src/routes.ts`, the route
  manifest — a page not listed there is never generated, and
  `public/sitemap.xml` is generated from the same manifest so the two cannot
  disagree. Never hand-edit the sitemap.
- `scripts/seo-audit.mjs` reads that prerendered HTML. It measures what a
  crawler actually receives, not what the source suggests.
- Head tags come from `buildHead()` in `src/lib/head.ts`, shared by the runtime
  `<Seo>` component and the prerenderer so the two cannot disagree.

Before prerendering, every page served an empty `<div id="root">` — zero text,
zero headings, zero links. Do not undo that.

## Run it

```
npm run build && npm run seo:audit
```

The build must come first. The audit reads `dist/`, so auditing without
rebuilding reports facts about the previous build. `npm run build` fails on
missing env vars, a sitemap route the router does not serve, and a page that
renders no content — those failures are the audit's first line of defence, so
read the build output rather than skipping past it.

Results land in `seo-report.json`: a `pages` array of per-route measurements
and a `findings` array of `{ level, route, check, message }`. Errors exit
non-zero; warnings do not.

## Triage

The script decides what is true. You decide what matters. Rank by cost in
traffic, not by count of affected pages:

1. **Indexability and reachability** — a route missing from the prerender, a
   wrong canonical, an unintended `noindex`, a page nothing links to.
2. **Cannibalisation** — two pages chasing one query. See
   [references/keyword-map.md](references/keyword-map.md); the known pairs are
   listed there and the audit cannot detect them.
3. **Thin content** — measured. The ten service-area pages are the live risk.
4. **Metadata quality** — title and description lengths, social tags. Real but
   minor; never lead with it.

A defect appearing on every page is usually one shared component. Trace it to the
file before reporting it as 41 problems.

Some warnings are expected and not worth acting on — long blog titles where
only the brand suffix truncates, for instance. Say so rather than listing them.

## Handing off

- Deeper investigation of a defect, or a pre-ship check: the **seo-auditor**
  agent. Read-only, reports and does not edit.
- A thin page, an uncovered query, or a cannibalisation pair to resolve: the
  **seo-content-strategist** agent. Writes briefs to `seo/briefs/`, never site
  pages.

## Before proposing anything

Read [references/guardrails.md](references/guardrails.md). It is short, and it
covers the two mistakes that would actually damage this site: publishing
generated content, and asserting business facts nobody verified.

Never state a business fact —
hours, licence number, prices, reviews, years in business — that
[references/business-facts.md](references/business-facts.md) does not confirm.
