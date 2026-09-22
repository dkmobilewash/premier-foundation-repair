# Business facts

The single source of truth for anything asserted about this business. Every
line below is traceable to the codebase. Anything not listed here is unknown —
ask the owner rather than inferring it.

## Confirmed

| Fact | Value | Source |
| --- | --- | --- |
| Business name | Premier Foundation Repair of Baton Rouge | `index.html` JSON-LD |
| Address | 670 O'Neal Ln, Baton Rouge, LA 70816 | `src/components/Footer.tsx` |
| Phone | (225) 435-8289 / `+1-225-435-8289` | site-wide |
| Geo | 30.4586597, -91.0114244 | derived from the Google Maps embed |
| Hours | Mon–Fri 7am–6pm | `src/components/Header.tsx:117` |
| General email | info@premierfoundationrepair.com | `src/pages/Contact.tsx` |
| Agent email | agents@premierfoundationrepair.com | `src/pages/RealEstate.tsx` |
| Domain | www.premierfoundationrepairofbatonrouge.com | `public/sitemap.xml`, `src/lib/seo.ts` |
| Schema type | `GeneralContractor` (a LocalBusiness subtype) | `index.html` |
| Service areas | Baton Rouge, Central, Denham Springs, Gonzales, Hammond, Pine Grove, Plaquemine, Port Allen, Prairieville, Zachary | `src/App.tsx` |
| Services | slab foundation repair, pier & beam, yard drainage (catch basins, channel drains, PVC drains, sump pumps), small demolition | `index.html` offer catalog |
| Warranty | lifetime transferable on drilled-pier slab repair; 10-year limited on pier & beam | `src/pages/Warranty.tsx` |

## Unknown — do not assert, do not guess

- **Contractor licence number.** `src/components/Footer.tsx:137` still reads the
  literal placeholder `Louisiana Contractors License #LICENSE`. This is
  customer-facing on all 41 pages and should be corrected or removed.
- **Social profile URLs.** The Facebook, Instagram and Google Reviews icons in
  the footer are all `href="#"`. Until real URLs exist there is no `sameAs`
  array to add to the schema.
- **Reviews and ratings.** No review data exists anywhere in the codebase.
  `aggregateRating` must stay out of the schema. See `guardrails.md`.
- **Years in business.** The homepage stat bar says "40+ Years Experience"; no
  founding date is recorded. Do not convert this into a `foundingDate`.
- **Google Business Profile.** Not referenced in the codebase. Ownership and
  access are unknown, and it cannot be managed from this repository.

## Known inconsistency

The email domain (`premierfoundationrepair.com`) does not match the website
domain (`premierfoundationrepairofbatonrouge.com`). Both are used as-is
throughout the site. Worth confirming with the owner, since NAP consistency
across directories depends on picking one presentation and sticking to it.

## Hours are available but not yet in the schema

`openingHours` / `openingHoursSpecification` is absent from the LocalBusiness
node in `index.html` even though Mon–Fri 7am–6pm is confirmed above. Adding it
is a straightforward improvement. Weekend hours are unknown — if the business
is closed Sat/Sun, that should be stated explicitly rather than omitted.
