# Guardrails

Hard limits for anything automated on this site. These exist because the
downside is a penalty on a domain a real business depends on for leads.

## Never publish generated content

Draft briefs, not pages. No agent commits copy to `src/pages/`. A human writes
the page from the brief and supplies the real job details.

Google's **scaled content abuse** policy targets pages mass-produced without
adding original value. The ten service-area pages already sit close to that
line — they are one template with a city name swapped, ~215 words each. Adding
more in the same shape is the single most likely way to get this domain
penalised. Strengthening the existing ten with real local specifics is the
work; multiplying them is not.

## Never invent business facts

No made-up hours, licence numbers, prices, review counts, years in business, or
service areas. If `business-facts.md` does not confirm it, ask the owner.

**Never fabricate reviews or ratings.** `aggregateRating` in schema without
real, verifiable reviews behind it is a manual action risk and a lie to
customers. It is deliberately absent from the LocalBusiness node in
`index.html` and must stay absent until real review data exists.

## Never break the indexing invariants

These are enforced by `scripts/prerender.mjs` and `scripts/seo-audit.mjs`, and
the build fails if broken. Do not work around them:

- Every route in `src/routes.ts` renders real content and is not the 404.
- Every page has exactly one `<h1>`, a unique title, a unique description, and
  a canonical pointing at its own URL.
- No page in the sitemap is `noindex`.
- No internal link points at a route that does not exist.

`src/routes.ts` is the route manifest. A new page means a route in the router
and an entry there; `public/sitemap.xml` is generated from it at build time and
must never be hand-edited, or the next build will overwrite the edit.

## Never let the prerender and the runtime disagree

Head tags come from `buildHead()` in `src/lib/head.ts`, used by both
`src/components/Seo.tsx` and `scripts/prerender.mjs`. Change one path only and
the static HTML will contradict the hydrated DOM. Change the shared function.

## Scope of automation

Fine to automate: auditing, measuring, reporting, regression-gating, drafting
briefs, proposing diffs for review.

Not automated: publishing pages, editing the Google Business Profile,
requesting or responding to reviews, submitting citations, buying or exchanging
links, or anything that speaks to a customer in the business's name.
