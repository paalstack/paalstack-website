# PaalStack Website

The official marketing and portfolio site for **PaalStack** — a modern web development consultancy. Built with Next.js 16, React 19, Tailwind CSS v4, and Supabase.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Animations | Framer Motion 12 |
| Backend / DB | [Supabase](https://supabase.com) (SSR client) |
| Icons | Lucide React + React Icons |
| Package manager | pnpm 9 |

## Project Structure

```
paalstack-website/
├── app/
│   ├── api/
│   │   └── contact/          # Contact form API route
│   ├── projects/
│   │   └── [slug]/           # Dynamic project detail pages
│   ├── globals.css
│   ├── layout.tsx
│   ├── opengraph-image.tsx   # Auto-generated OG image
│   ├── page.tsx              # Home page
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── animations/           # Reusable animation wrappers
│   │   ├── infrastructure-grid.tsx
│   │   ├── scroll-reveal.tsx
│   │   └── stagger-container.tsx
│   ├── layout/               # Navbar, Footer, Logo, ThemeToggle
│   ├── projects/             # Project card component
│   ├── sections/             # Page sections (Hero, Stats, Services…)
│   └── ui/                   # shadcn/ui primitives
├── hooks/
│   └── use-scroll-progress.ts
├── lib/
│   ├── animations.ts         # Shared Framer Motion variants
│   ├── projects.ts           # Project data helpers
│   ├── utils.ts              # cn() and shared utilities
│   └── supabase/
│       ├── client.ts         # Browser Supabase client
│       └── server.ts         # Server-side Supabase client (SSR)
└── public/
    └── assets/               # Brand assets, logos, favicons, icons
```

## Home Page Sections

The home page (`app/page.tsx`) renders the following sections in order:

1. **Hero** — headline, CTA buttons
2. **Stats** — key numbers / social proof
3. **Projects** — featured portfolio work
4. **Services** — service offerings
5. **Process** — how we work
6. **Technology** — tech stack showcase
7. **Why PaalStack** — differentiators
8. **FAQ** — common questions
9. **Final CTA** — conversion call-to-action

## Getting Started

### Prerequisites

- Node.js ≥ 20
- pnpm 9 (`npm i -g pnpm@9`)

### Installation

```bash
pnpm install
```

### Environment Variables

Create a `.env.local` file at the root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://<your-project>.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=<your-publishable-key>
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Production

```bash
pnpm build
pnpm start
```

### Linting & Type Checking

```bash
pnpm lint
pnpm typecheck
```

## Links

- **Live site:** [paalstack.com](https://paalstack.com)
- **Repository:** [github.com/paalstack/paalstack-website](https://github.com/paalstack/paalstack-website)
- **Issues:** [github.com/paalstack/paalstack-website/issues](https://github.com/paalstack/paalstack-website/issues)
