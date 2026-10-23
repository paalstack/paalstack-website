# Architecture: Paalstack (paalstack.com Studio site)

## Stack

| layer | choice | why |
| --- | --- | --- |
| web | Next.js 15 (App Router) + TypeScript | already in paalstack-website repo; SSG for speed, RSC |
| styling | Tailwind CSS v4 + shadcn/ui tokens | already wired; matches paalstack-react-ui |
| components | @paalstack/react-ui (Props API) | built-ins over hand-rolled where applicable |
| motion | framer-motion (existing animations/) | scroll reveal, stagger |
| database | none (static content) | marketing site; no user data |
| auth | none | no accounts |
| payments | none | v1 quotes via WhatsApp/email |
| email | none (mailto + wa.me) | user picked simplest; no backend |
| jobs | none | |
| files | public/ + next/image | images, OG |
| hosting | Vercel | domain paalstack.com, already configured |

## Schema

Tables: 0. No persistent data. Content is typed arrays in lib/content/.
Access rules: n/a (read-only static).

No replica/schema.sql needed.

## API

No custom endpoints. Contact goes through wa.me and mailto links.
Next/Image optimization is the only server-side concern.

| method path | does | who | input | output | flow |
| --- | --- | --- | --- | --- | --- |
| (none) | | | | | |

Webhooks in: none. Webhooks out: none.
Jobs: none.

## The parts that bite

- time zones: n/a
- idempotency: n/a
- races: n/a
- content: case-study copy timing; need consented testimonials/logos
- performance: Lighthouse 90+ on mobile, AVIF/WebP, image sizes
- SEO: metadata, sitemap, OG image generation (app/opengraph-image.tsx exists)
- accessibility: keyboard nav, focus rings, reduced motion

## Build order

1. Vertical slice: Home (S01) with hero + services + process + final CTA + contact link, all sections wired to real typed content. Proves layout + design tokens.
2. Must-haves: Services (S02), Process (S03), Projects index/detail (S04/S05), About (S06), Contact (S07), 404 (S08).
3. Should-haves: theme toggle polish, testimonials, FAQ, final CTA, SEO metadata, sitemap.
4. Could-haves: analytics (cookie-less), privacy/terms (S09/S10).
5. Fixes: from replica-entrepreneur if run; otherwise ship.