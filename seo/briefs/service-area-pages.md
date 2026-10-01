# Brief: the ten service-area pages

One brief, not ten. Writing ten near-identical briefs to fix ten near-identical
pages would repeat the mistake. The shared structure is below; what differs per
city is at the end, and it is mostly a list of things only you can answer.

## The problem, measured

| | |
| --- | --- |
| Pages | 10 (`/baton-rouge` … `/zachary`) |
| Words each | 212–227 |
| Unique content per page | one ~40-word intro paragraph |
| Identical across all ten | h1 pattern, four service cards, "We Also Serve", CTA |

`src/pages/ServiceAreaPage.tsx` takes `cityName`, `cityIntro` and
`nearbyAreas`. The city name is substituted into a fixed layout. That is the
textbook shape of a doorway page — pages made to catch "foundation repair
<city>" without offering anything a visitor could not get from the homepage.

Google's scaled content abuse policy targets exactly this. The risk is not that
these ten pages fail to rank; it is that they drag the domain down while it is
still new.

## Target query and intent

Each page owns one query: **`foundation repair <city> la`**.

Someone typing that has already decided they have a problem. They are checking
two things: do you actually work here, and have you done this on a house like
mine. Right now the pages answer neither — a visitor cannot tell whether you
have ever set foot in Plaquemine.

## Required structure

Keep the existing hero, service grid and CTA. Insert these between the intro and
the service grid.

### 1. Local soil and what it does to houses here (120–180 words)
What the ground does in *this* city, not in Louisiana generally. If the
Beaumont clay behaves differently in Central than in Port Allen, say how. If
part of the city sits on river alluvium rather than clay, that is a real
distinction worth a paragraph.

### 2. What we see on houses in <city> (150–220 words)
The failure patterns specific to the local housing stock. Slab-on-grade
subdivisions from the 1990s fail differently from raised homes from the 1940s.
Name the eras and construction types that dominate here.

### 3. A job we did in <city> (150–250 words) — the one that matters
One real job. Neighbourhood or general area, what the homeowner noticed, what
you found, how many piers, how long it took, what it cost. A photo.

This is the section that makes the page impossible to copy and the reason to
rank it above a competitor's templated equivalent. Without it the rest is
decoration.

### 4. Getting to you (40–80 words)
Drive time from 670 O'Neal Ln, which days you are usually in that area. Small,
but it answers "do they really serve me".

**Target: 600–800 words.** Not padding to a number — four sections written
properly land there.

## What only you can supply

Per city, the minimum that makes a page worth publishing:

- [ ] One completed job: area, symptoms, what you found, pier count, duration, cost
- [ ] One photo from that job
- [ ] The dominant housing type and era in that city
- [ ] Anything locally specific about the ground there
- [ ] Roughly how far it is from the shop

Everything else I can draft. These five I cannot invent, and inventing them is
the one thing that would make this worse rather than better.

## Rules while writing

- No sentence may appear on two city pages. If it is true everywhere, it
  belongs on `/foundation-repair`, not here.
- Do not pad with warranty, process or method copy — those have their own pages.
  Link to them instead.
- Write for a homeowner deciding whether to call, not for a crawler.
- One `<h1>`, then `<h2>` per section. No skipped levels (`npm run seo:audit`
  will catch it).

## Internal linking

Each page already links to all four service pages — keep that. Two fixes:

- **`/baton-rouge` competes with the homepage.** Both target "foundation repair
  baton rouge". Decide which owns it: either make `/baton-rouge` about East
  Baton Rouge Parish *outside* the city core, or drop it and redirect to `/`.
  Leaving both is the cannibalisation the keyword map already warns about.
- **Some "We Also Serve" links are not nearby.** `/zachary` points to Hammond
  and `/prairieville` to Zachary — opposite ends of the metro, different
  parishes. Worth checking these are genuinely useful to a visitor; they read
  as link plumbing rather than geography.

## Schema

The page already inherits the site-wide `GeneralContractor` node and a
`BreadcrumbList`. Once a real job is on the page, `src/lib/seo.ts` can add a
`Service` node with `areaServed` set to that city. Not worth doing before the
content is real.

## Sequencing — do not rewrite all ten

Pick the two or three cities where you have the most work behind you. Write
those properly, publish, and give it 6–8 weeks against Search Console. If they
move, the format works and you roll it out. If they do not, you have spent two
pages' effort instead of ten.

**And if a city has no real jobs behind it, consider removing the page.** A page
with nothing true to say about a place is worth less than no page at all — it
dilutes the nine that do, and it is the kind of page the scaled-content policy
is written for. Nine strong pages beat ten with one hollow one.
