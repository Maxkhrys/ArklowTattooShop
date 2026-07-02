# Arklow Tattoo Studio — Pitch Demo Site

Demo/pitch website for **Arklow Tattoo Studio** (Andrew O'Callaghan), 7 Bridge Street, Arklow, Co. Wicklow.

Built with **Astro** + **Tailwind CSS v4** + **GSAP ScrollTrigger** + **Lenis** smooth scroll. Static output, deploys straight to Vercel.

## Run it

```sh
npm install
npm run dev      # local dev server
npm run build    # static build → dist/
```

## Brand system

Two registers of the same identity, kept deliberately separate:

- **Crest register** (site-wide): black raven crest, deep purple neon glow (`#7c2fd6`), gothic display face (Pirata One), slow confident motion.
- **Flyer register** (Flash Day section only): comic-bold type (Bungee), lightning bolts, hard drop-shadows, punchy `back.out` easing.

The purple glow treatment (`.glow-text`, `.glow-drop`, `.glow-ring`, `.divider-glow` in `src/styles/global.css`) is the reusable signature — applied to the crest, headings, dividers and hover states.

## Dropping in real assets

| Asset | Where | Notes |
|---|---|---|
| Real logo | `public/brand/` | Then swap the SVG in `src/components/Crest.astro` (currently a hand-drawn SVG recreation of the crest) |
| Gallery photography | `public/gallery/` | Update the `work` array at the top of `src/components/Gallery.astro` (src, style, alt). Current SVGs are labelled placeholders |
| Andrew's portrait | `public/brand/` | Swap the placeholder block in `src/components/About.astro` |
| Hours / pricing | `Location.astro`, `Piercing.astro`, `Footer.astro` | Marked with `[placeholder …]` in-page |
| Booking backend | `src/components/Booking.astro` | Form is demo-only; wire to Formspree/Basin or studio email |
| Flash Day promo | `src/components/FlashDay.astro` | All event-specific copy lives in this one file — swap for future events |

## Deploy

Vercel auto-detects Astro. `vercel --prod` from the repo root, or connect the GitHub repo in the Vercel dashboard.
