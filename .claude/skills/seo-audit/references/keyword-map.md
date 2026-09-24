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
| `/average-cost-foundation-repair-baton-rouge` | foundation repair cost baton rouge / louisiana | 1027 |
| `/will-house-insurance-pay-for-foundation-repair` | does insurance cover foundation repair | 786 |
| `/is-it-worth-fixing-foundation` | is foundation repair worth it | 748 |
| `/when-to-walk-away-from-foundation-issues` | buying a house with foundation problems | 890 |
| `/replace-foundation-without-lifting-house` | replace foundation without lifting house | 775 |
| `/small-cracks-foundation` | small foundation cracks serious | 442 |
| `/live-in-house-during-foundation-repair` | live in house during foundation repair | 981 |

## Cannibalisation — resolved

Both known pairs were merged. Each survivor absorbed what was unique in the
retired page, the retired route left `src/pages/Blog.tsx` and
`public/sitemap.xml`, and a 308 in `vercel.json` sends the old URL to the
survivor so it keeps whatever it had earned.

| Retired | Merged into | Survivor now |
| --- | --- | --- |
| `/stay-home-during-repair` (429w) | `/live-in-house-during-foundation-repair` | 981w |
| `/foundation-repair-cost-louisiana` (465w) | `/average-cost-foundation-repair-baton-rouge` | 1027w |

The cost page now carries the statewide framing the retired page owned, so it
should still serve "foundation repair cost louisiana" as well as the Baton
Rouge query. Whether it actually does is the first thing to check once Search
Console has data — if the Louisiana query goes nowhere after the merge, the
statewide angle needs its own page written properly, not a near-duplicate.

`/faqs` still answers "can I stay in my home during repairs" a third time. That
is fine: an FAQ entry and an article are different result types, and the FAQ
carries `FAQPage` schema. Watch it, but do not merge it.

Before adding any post, check this file. Two pages chasing one query is the
mistake that already cost this blog two pages.

## When GSC is connected

Replace the guessed queries above with real ones: export Performance → Pages,
and for each URL take the query with the most impressions. Where the top query
for a page is not what this file predicts, the page is ranking for something
other than its target — that is the highest-value signal available, and it is
free.
