import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Bot, Code2, Globe, Smartphone } from 'lucide-react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { buttonVariants } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Services | Paalstack Studio',
  description:
    'Websites, AI automation, custom software and mobile apps built by Paalstack Studio for growing businesses in India.',
}

const services = [
  {
    icon: Globe,
    title: 'Websites',
    summary: 'Marketing sites and web apps that explain the offer and load fast on a phone.',
    fit: 'You need a credible site, a landing page for a launch, or a customer-facing web app.',
    deliverables: [
      'Responsive build with real content, not lorem ipsum',
      'Contact, WhatsApp and booking links wired in',
      'Basic SEO, sitemap and social preview images',
      'Deployment and handover notes',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  },
  {
    icon: Bot,
    title: 'AI automation',
    summary: 'Assistants and internal workflows that remove repetitive work instead of adding another dashboard.',
    fit: 'Your team copies data between tools, answers the same questions, or sorts documents by hand.',
    deliverables: [
      'Workflow map with the human review points marked',
      'Model and prompt setup with guardrails',
      'Logging so failures are visible',
      'A small pilot before a wider rollout',
    ],
    stack: ['LLM APIs', 'Node.js', 'PostgreSQL', 'Queues and cron'],
  },
  {
    icon: Code2,
    title: 'Custom software',
    summary: 'CRMs, portals and operations tools shaped around how your team already works.',
    fit: 'Off-the-shelf tools force your team into a process that does not match the business.',
    deliverables: [
      'Data model and role permissions',
      'The core workflow your team uses daily',
      'Reports and exports the office actually needs',
      'Imports for the spreadsheets you run today',
    ],
    stack: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL'],
  },
  {
    icon: Smartphone,
    title: 'Mobile apps',
    summary: 'React Native apps for customers and field teams, Android first when that is where your users are.',
    fit: 'Buyers, agents or field staff need updates, documents or approvals away from a desk.',
    deliverables: [
      'Phone login with refresh tokens',
      'Push notifications for the events that matter',
      'Offline cache of the last loaded data',
      'Store submission and release notes',
    ],
    stack: ['React Native', 'Expo', 'Firebase Cloud Messaging', 'REST API'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-border bg-surface/60 px-6 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-accent">Services</p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              Four ways we build with you.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Start with a website, add automation where the busywork is, or replace a spreadsheet
              process with software your team owns. Most projects use more than one.
            </p>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl divide-y divide-border">
            {services.map(({ icon: Icon, title, summary, fit, deliverables, stack }, index) => (
              <article key={title} className="grid gap-8 py-12 first:pt-0 last:pb-0 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-accent">0{index + 1}</span>
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
                  <p className="mt-3 text-muted-foreground">{summary}</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Good fit if</p>
                    <p className="mt-2 text-sm text-foreground/80">{fit}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">What you get</p>
                    <ul className="mt-2 space-y-2 text-sm text-foreground/80">
                      {deliverables.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Typical stack</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {stack.map((tech) => (
                        <span key={tech} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-card/40 px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Not sure which one you need?</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Describe the workflow that is causing trouble. If a website, an automation or a custom
              build is the right answer, we will say so. If it is not, we will say that too.
            </p>
            <Link href="/#contact" className={buttonVariants({ size: 'lg', className: 'mt-8' })}>
              Start a conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}