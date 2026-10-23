# Paalstack Website

The Paalstack Studio site: websites, AI automation, custom software and mobile apps for growing businesses. Built with Next.js 16, React 19 and Tailwind CSS v4. No backend, no database, no accounts.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Animations | Framer Motion 12 |
| Icons | Lucide React + React Icons |
| Package manager | pnpm 9 |
| Hosting | Vercel |

## Routes

| Route | Purpose |
|---|---|
| `/` | Home: hero, selected work, services, process, stack, why Paalstack, FAQ, contact |
| `/services` | Websites, AI automation, custom software, mobile apps |
| `/process` | Five-step engagement path with the output of each step |
| `/technology` | Stack by layer and the reason for each choice |
| `/projects` | Client work index |
| `/projects/[slug]` | Case study detail, content in `lib/projects.ts` |
| `/about` | Studio story, principles, how it works |
| `/privacy`, `/terms` | Legal pages |
| Any unmatched path | Custom 404 (`app/not-found.tsx`) |

## Project Structure

```
paalstack-website/
├── app/
│   ├── about|services|process|technology|projects|privacy|terms/
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── opengraph-image.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── animations/           # Infrastructure grid and motion wrappers
│   ├── layout/               # Navbar, Footer, Logo, ThemeToggle
│   ├── projects/             # Project card
│   ├── sections/             # Home page sections
│   └── ui/                   # shadcn/ui primitives
├── lib/
│   ├── animations.ts
│   ├── projects.ts           # Case study data
│   └── utils.ts
├── replica/                  # Recon, architecture, design tokens and feature matrix
└── public/assets/            # Logos, icons, favicons
```

## Getting Started

Requires Node.js 20 or newer and pnpm 9.

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000. If port 3000 is busy, run `pnpm exec next dev -p 3111`. Do not use `pnpm dev -- --port 3111`; Next treats `--port` as a directory.

There are no environment variables. The site is fully static and the contact section links to WhatsApp, email and Calendly.

## Build and Checks

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

## Links

- Live site: [paalstack.com](https://paalstack.com)
- Repository: [github.com/paalstack/paalstack-website](https://github.com/paalstack/paalstack-website)
- Issues: [github.com/paalstack/paalstack-website/issues](https://github.com/paalstack/paalstack-website/issues)
