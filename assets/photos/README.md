# Photos

Drop original photos in this folder, then run:

```
npm run images
```

That converts each one to responsive WebP in `public/images/` and regenerates
`src/data/images.ts`. Use them in a page with the `Photo` component:

```tsx
import Photo from '../components/Photo';

<Photo
  name="drilled-pier-prairieville"
  alt="Drilled pier installation along the rear wall of a brick home in Prairieville, LA"
  className="w-full h-64 object-cover rounded-lg"
/>
```

## What to send

Real photos from real Baton Rouge jobs beat stock every time — they are the one
thing a competitor cannot copy, and they are what the thin service-area pages
need most. Useful shots:

- Before and after of the same corner, crack or doorway
- Crews working: drilling piers, excavation, hydraulic lifting
- Drainage work — catch basins, channel drains, sump pump installs
- Finished jobs with the house visible
- Anything identifiable to a specific city you serve

Phone photos are fine. Send the largest version you have; the script handles
resizing. Around 1600px wide or more is ideal.

## Naming

The filename becomes the key, so name it for what it shows and where:

```
drilled-pier-prairieville.jpg
catch-basin-install-central.jpg
stair-step-crack-before-zachary.jpg
```

Lowercase with hyphens. Avoid `IMG_4821.jpg`.

## What is committed

Originals in this folder are **not** committed — phone photos are megabytes
each. The generated WebP files in `public/images/` are. Keep the originals
somewhere durable (Drive, Dropbox) so the images can be regenerated.

## Licensing

`sources.json` lists remote images that may be self-hosted, and is the record
of why. Add a URL only if its licence permits hosting it on our own server.

Pexels and Unsplash permit it. **iStock preview URLs
(`media.istockphoto.com/...?s=612x612&w=0&k=20&c=...`) and Google image
thumbnails (`encrypted-tbn0.gstatic.com`) do not** — copying those onto our
server turns a hotlink into a clearer infringement, and Getty pursues exactly
this against small businesses.
