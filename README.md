# Pranav Hole Portfolio

A responsive Next.js 16 portfolio with a custom hand-drawn comic aesthetic, generated local artwork, typed content, accessible interactions, and reduced-motion support.

## Requirements

- Node.js 20.9 or newer
- npm

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production

```bash
npm run build
npm start
```

Run the full quality gate with:

```bash
npm run verify
```

Set `NEXT_PUBLIC_SITE_URL` to the deployed HTTPS origin before a self-hosted production build so canonical and social metadata use the public domain. Vercel deployments derive this automatically from the platform URL when the environment variable is absent.

## Editing content

- Identity, email/phone, GitHub/LinkedIn and per-project GitHub/live links: `config/site.ts` (a `null` link is hidden until you set a real URL)
- All page copy (hero, services, projects, process, experience, skills, about, CTA, nav): `lib/constants.ts`
- SEO metadata: `app/layout.tsx`, `components/seo/JsonLd.tsx`, `app/opengraph-image.tsx`

## Replacing artwork

- Hero developer: `public/images/developer-hero.png` with a transparent background
- About developer: `public/images/developer-about.png` with a transparent background
- Project thumbnails: `public/projects/*.png`
- Doodle textures: `public/doodles/*.svg`

Project artwork is center-cropped into the card's wide image frame. Keep important subjects inside the central safe area, preserve descriptive alt text, and keep filenames stable unless their paths are also updated in the relevant section component.

## Hand-drawn system

The sketchbook effect combines stable per-card rotations, varied radii, 2–3px ink borders, offset shadows, inline SVG scribbles, wavy separators, pastel paper fields, and local grain textures. Variations are deterministic rather than randomized at render time, preventing hydration mismatch and visual jumping. Section-specific geometry lives in CSS Modules; shared colors, focus states, texture, and reduced-motion behavior live in `app/globals.css`.

## Accessibility and motion

The site includes a focusable skip destination, semantic landmarks, visible focus states, keyboard-operable mobile navigation and carousel controls, descriptive image alternatives, unavailable states for missing destinations, and `prefers-reduced-motion` support. Section reveals use a small progressive enhancement: content is readable without JavaScript, and motion is disabled when reduced motion is requested.
