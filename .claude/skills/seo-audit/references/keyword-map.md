# Keyword map

One page owns one query. This file records which. Before proposing a new page,
check whether the query already has an owner — if it does, the work is to
strengthen that page, not to add a second one competing with it.

**Status: intent-derived, not validated.** These targets are read off page
titles and content, not off real search data. Nothing here has been checked
against Google Search Console, because GSC is not connected yet. Treat the
mapping as a hypothesis until it is. Word counts are from `seo-report.json`.

## Money pages

| Route | Primary query | Words |
| --- | --- | --- |
| `/` | foundation repair baton rouge | 683 |
| `/foundation-repair` | slab foundation repair baton rouge | 602 |
| `/pier-and-beam` | pier and beam repair baton rouge | 490 |
| `/foundation-repair-methods` | foundation repair methods compared | 435 |
| `/drainage` | yard drainage baton rouge | 492 |
| `/small-demo` | small demolition baton rouge | 386 |
| `/free-estimate` | free foundation repair estimate baton rouge | 322 |
| `/drainage-estimate` | free drainage estimate baton rouge | 329 |

## Drainage sub-services

| Route | Primary query | Words |
| --- | --- | --- |
| `/drainage/catch-basins` | catch basin installation baton rouge | 405 |
| `/drainage/channel-drains` | channel drain installation baton rouge | 391 |
| `/drainage/pvc-drains` | pvc drain line installation baton rouge | 395 |
| `/drainage/sump-pumps` | sump pump installation baton rouge | 420 |

## Service areas — all thin

Ten routes, one template, a swapped city name, 212–227 words each:
`/baton-rouge` `/central` `/denham-springs` `/gonzales` `/hammond`
`/pine-grove` `/plaquemine` `/port-allen` `/prairieville` `/zachary`

Each targets `foundation repair <city> la`. As written they are close to
doorway pages; see `guardrails.md`. Fixing them means local specifics —
neighbourhoods, soil conditions, jobs actually done there — not more of them.

`/baton-rouge` additionally overlaps the homepage, which already targets the
same city. Decide which one owns it.

## Trust and conversion pages

`/about` `/contact` `/our-process` `/warranty` `/financing` `/real-estate`
`/foundation-quiz` `/faqs` `/blog` `/privacy`

These serve users and internal linking rather than head queries. `/faqs` (749
words) is the exception: it carries `FAQPage` schema and can win question
queries outright.

## Blog — informational

| Route | Primary query | Words |
| --- | --- | --- |
| `/average-cost-foundation-repair-baton-rouge` | average foundation repair cost baton rouge | 859 |
| `/foundation-repair-cost-louisiana` | foundation repair cost louisiana | 465 |
| `/will-house-insurance-pay-for-foundation-repair` | does insurance cover foundation repair | 786 |
| `/is-it-worth-fixing-foundation` | is foundation repair worth it | 748 |
| `/when-to-walk-away-from-foundation-issues` | buying a house with foundation problems | 890 |
| `/replace-foundation-without-lifting-house` | replace foundation without lifting house | 775 |
| `/small-cracks-foundation` | small foundation cracks serious | 442 |
| `/live-in-house-during-foundation-repair` | live in house during foundation repair | 944 |
| `/stay-home-during-repair` | stay in home during foundation repair | 429 |

## Known cannibalisation

Two pairs target effectively one query each. Splitting a query across two pages
usually ranks neither, and both pairs are strong candidates for merging the
weaker page into the stronger with a redirect.

1. **"can I stay in my home during foundation repair"**
   - `/live-in-house-during-foundation-repair` — 944 words
   - `/stay-home-during-repair` — 429 words

   Near-identical intent. `/faqs` answers the same question a third time.

2. **foundation repair cost**
   - `/average-cost-foundation-repair-baton-rouge` — 859 words, Baton Rouge
   - `/foundation-repair-cost-louisiana` — 465 words, statewide

   Defensible as separate pages only if the statewide one genuinely covers
   other Louisiana markets. It currently does not.

A merge means a real redirect: the route disappears from `src/App.tsx` and from
`public/sitemap.xml`, and the old URL needs a 308 in `vercel.json`. Dropping a
route without redirecting it discards whatever it had earned.

## When GSC is connected

Replace the guessed queries above with real ones: export Performance → Pages,
and for each URL take the query with the most impressions. Where the top query
for a page is not what this file predicts, the page is ranking for something
other than its target — that is the highest-value signal available, and it is
free.
