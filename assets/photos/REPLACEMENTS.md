# Stock image replacement checklist

The 18 image slots below are served by URLs that may not be self-hosted:
eleven iStock preview/comp URLs and four Google image thumbnails. They stay
hotlinked until each is replaced by a job photo or a free-licensed equivalent.

Work through it by filling the "replacement" column, adding the URL to
`sources.json` under a matching `name`, then running `npm run images`.

**Verify before you commit to one.** Several of the current images do not show
what the page says they show — the drainage page is illustrating a Baton Rouge
yard with an airport runway, and the About page uses basement waterproofing in
a market that is almost entirely slab and pier-and-beam. Open the candidate and
look at it; do not pick from a filename.

## Foundation repair

| Slot | Needs to show | Current |
| --- | --- | --- |
| `pages/FoundationRepair.tsx:65` | Diagonal cracking in a slab or brick veneer | iStock, roughly right |
| `pages/OurProcess.tsx:6` | Step 1 — assessment / inspecting a crack | iStock, roughly right |
| `pages/OurProcess.tsx:7` | Step 2 — excavation at the foundation perimeter | iStock "building insulation", wrong |
| `pages/OurProcess.tsx:8` | Step 3 — drilling / pouring a concrete pier | iStock "new concrete driveway", wrong |
| `pages/OurProcess.tsx:9` | Step 4 — finished lift, backfilled | iStock formwork, roughly right |
| `pages/FoundationRepairMethods.tsx:133` | Pier or formwork detail | iStock formwork, roughly right |

## Pier and beam

| Slot | Needs to show | Current |
| --- | --- | --- |
| `pages/PierAndBeam.tsx:30` | Crawl space under a raised home | iStock "building insulation", wrong |
| `pages/PierAndBeam.tsx:96` | Pier installation under a house | Google thumbnail, subject unknown |

## Drainage

| Slot | Needs to show | Current |
| --- | --- | --- |
| `pages/Drainage.tsx:39` | Waterlogged residential yard | iStock "airport apron", wrong |
| `pages/drainage/DrainagePages.tsx:35` | Catch basin | Google thumbnail, subject unknown |
| `pages/drainage/DrainagePages.tsx:72` | Channel / trench drain in a driveway | Google thumbnail, subject unknown |
| `pages/drainage/DrainagePages.tsx:109` | Buried PVC drain line in a trench | iStock "pipeline", roughly right |
| `pages/drainage/DrainagePages.tsx:146` | Sump pump | Google thumbnail, subject unknown |
| `pages/DrainageSubPage.tsx:114` | "Before" — yard with standing water | iStock district heating pipeline, wrong |
| `pages/DrainageSubPage.tsx:122` | "After" — finished drainage | iStock, roughly right |

## Other

| Slot | Needs to show | Current |
| --- | --- | --- |
| `pages/SmallDemo.tsx:51` | Concrete demolition | iStock, roughly right |
| `pages/About.tsx:47` | Crew working on a slab or pier-and-beam home | iStock basement waterproofing, wrong for this market |
| `pages/Blog.tsx:13` | Drainage post thumbnail | iStock, roughly right |

## Worth leaving empty

`About.tsx:47` is better with no image than with another stock worker. A photo
of the actual crew or a branded truck earns trust; generic stock does not.

The four Google thumbnails are the most urgent regardless of licensing — those
URLs expire without warning, and nobody can say what they currently display.
