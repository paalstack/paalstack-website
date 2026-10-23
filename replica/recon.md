# Recon map: paalstack.com (Web)

Scope: Paalstack Studio v1 marketing site — Home, Services, Process,
Case studies, About, Contact/quote. Excludes Estate/Nexus/Orbit/Forge products
and product landing pages (estate.paalstack.com etc.) until a product ships.
For: Indian SMB, real-estate and services founders hiring one team for websites,
AI automation and custom software.
Date: 2026-10-23

## Sources

| # | source | URL | notes |
| 1 | reference site | https://www.buildstack.in/ | content + idea only; not design |
| 2 | competitor/peer | generic India dev-agency listings | service names borrowed loosely |
| 3 | own repo | /home/paalstack/paalstack-website | existing Next.js 15 app router + Tailwind |
| 4 | case study subject | shadhilbuilders-crm repo | the flagship build to showcase |

## Core loop

a founder arrives, understands that Paalstack builds websites, AI
automations and custom software on one stack, reads a build like the
shadhil CRM, and asks for a quote on WhatsApp/email.

## Screens

| ID | screen | route | purpose | key components | states |
| S01 | Home | / | hero + services + why us + stats + process + testimonials + CTA | Hero, ServiceCard, Stat, ProcessStep, TestimonialCard, FinalCta | loading, filled |
| S02 | Services | /services | 6 service cards with outcomes | ServiceCard, Badge | filled |
| S03 | Process | /process | 4-step how-we-work | StepCard, NumberBadge | filled |
| S04 | Case studies index | /projects | grid of builds | ProjectCard | empty, filled |
| S05 | Case study detail | /projects/[slug] | problem/solution/outcome | Hero, Gallery, Tag | filled |
| S06 | About | /about | story, values, studio | Avatar, ValueCard | filled |
| S07 | Contact / quote | /contact | WhatsApp + email CTAs + book a call | ContactCard, CalendlyLink, Button | filled, success |
| S08 | 404 | /not-found | not found | EmptyState | filled |
| S09 | Legal: privacy | /privacy | privacy | Prose | filled |
| S10 | Legal: terms | /terms | terms | Prose | filled |

Shared layout: Navbar (S-shared), Footer (S-shared), theme toggle, logo.

## Flows

```
F01 Visitor gets a quote (happy path)
    S01 -> S07 (or scroll)
    hero read -> services scan -> case study click -> S05 -> CTA -> S07 -> WhatsApp
    happy path clicks: 4
    edge: no case studies yet (empty state on S04), email-only visitor, mobile

F02 Visitor validates competence
    S01 -> S04 -> S05 -> S03 -> S07
    happy path clicks: 5
    edge: missing tech stack badge, image load fail

F03 Mobile visitor
    S01 -> sticky bottom CTA -> WhatsApp
    happy path clicks: 2
    edge: slow 3G, theme toggle
```

## Components

| component | variants | states | used on |
| Hero | default, with image | default | S01 |
| Navbar | desktop, mobile drawer | default, scrolled | all |
| Footer | default | default | all |
| ServiceCard | with icon, with metric | default, hover | S01, S02 |
| ProjectCard | default, featured | default, hover | S04 |
| Stat | default | default | S01 |
| StepCard / ProcessStep | default, numbered | default | S01, S03 |
| TestimonialCard | default | default | S01 |
| FinalCta | default | default | S01, S04 |
| ContactCard | whatsapp, email | default, hover | S07 |
| Button | primary, secondary, ghost, link | default, hover, focus, disabled, loading | all |
| Badge | default, outline | default | S02, S05 |
| EmptyState | default | default | S04, S08 |
| ThemeToggle | default | default | Navbar |
| Logo | wordmark, mark | default | Navbar, Footer |

## Inferred data model

Static site. No user accounts. Content is code/config (typed arrays in lib/).

Project  slug, title, summary, industry, challenge, solution, outcomes[],
         techStack[], images[], featured, deliveredAt, client (display only, consented)
         evidence: app/projects/[slug]/page.tsx, components/projects/project-card.tsx
         confidence: high

Service  id, name, tagline, description, outcomes[], icon
         evidence: components/sections/services.tsx
         confidence: high

Testimonial  name, role, company, quote, avatar
         evidence: components/sections/testimonials.tsx
         confidence: medium

No inquiry table: contact goes through WhatsApp wa.me link and mailto.

Relationships: none persistent.

## Feature matrix

See `features.csv`. must: 14, should: 4, could: 3, skip: 3.

## Out of scope (cannot or should not be cloned)

- Licensed content, stock imagery rights (use own / licensed assets only)
- Client logos without consent (display only with consent)
- Payment processing, booking, CRM (separate product later: Estate)
- Multi-language (v2)
- Blog / SEO content engine (v2)
- Nexus, Orbit, Forge product names (not product lines)

## Size

Screens 10, flows 3, entities 3. Hard parts: content strategy and case-study
copy for the one flagship build; image optimization for mobile. Size: S
(one to two weekends).