import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { buttonVariants } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Technology | Paalstack Studio',
  description:
    'The stack Paalstack Studio uses: Next.js and TypeScript on the front, NestJS and PostgreSQL behind it, React Native for mobile, and managed hosting.',
}

const layers = [
  {
    name: 'Frontend',
    tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Radix primitives'],
    why: 'Server rendering for fast first loads, one language across the stack, and a component library we can reuse between client projects.',
  },
  {
    name: 'Backend',
    tools: ['Node.js', 'NestJS', 'Prisma', 'REST and GraphQL'],
    why: 'Typed APIs with a structure a new developer can follow. Prisma keeps the schema and migrations visible.',
  },
  {
    name: 'Data',
    tools: ['PostgreSQL', 'Row-level security', 'Object storage'],
    why: 'One relational database by default. Permissions live in the database, not only in the UI.',
  },
  {
    name: 'AI',
    tools: ['Model APIs', 'MCP', 'Workflow queues', 'Evaluation notes'],
    why: 'Models are a dependency, not the product. Every AI feature has a fallback and a way to see why it failed.',
  },
  {
    name: 'Mobile',
    tools: ['React Native', 'Expo', 'Firebase Cloud Messaging'],
    why: 'One codebase for Android and iOS, with push notifications and offline caching for field use.',
  },
  {
    name: 'Infrastructure',
    tools: ['Vercel', 'Docker', 'Coolify', 'GitHub Actions'],
    why: 'Managed where it saves time, self-hosted where the client needs control. Deploys run from the repository.',
  },
]

export default function TechnologyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-border bg-surface/60 px-6 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-accent">Technology</p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              A small stack we know well.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              We stay on TypeScript from the browser to the server. Fewer languages means fewer handoffs
              and a codebase your next developer can read.
            </p>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            {layers.map((layer) => (
              <article key={layer.name} className="rounded-lg border border-border bg-surface p-6">
                <h2 className="text-lg font-semibold">{layer.name}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {layer.tools.map((tool) => (
                    <span key={tool} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{layer.why}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-card/40 px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">What that means for you</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="font-semibold">No lock-in</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  The repository, the database and the deployment accounts stay with you.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Hiring is easier</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  React, Node and Postgres are common skills. You are not stuck with a rare framework.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Fewer moving parts</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  One database and one language until a real constraint says otherwise.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Want a second opinion on your stack?</h2>
              <p className="mt-2 text-muted-foreground">We will tell you what to keep and what is costing you time.</p>
            </div>
            <Link href="/#contact" className={buttonVariants({ size: 'lg' })}>
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