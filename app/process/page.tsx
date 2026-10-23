import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { buttonVariants } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Process | Paalstack Studio',
  description:
    'How Paalstack Studio takes a project from first conversation to launch: scope, design, build in slices, review and handover.',
}

const steps = [
  {
    number: '01',
    title: 'Conversation and scope',
    summary: 'We start with the workflow that is causing trouble, not a feature list.',
    details: [
      'A call to understand the business and who will use the software',
      'A written scope: screens, integrations, data and what is out of scope',
      'A fixed first milestone so the project can start without a long contract',
    ],
    output: 'Written scope and first milestone',
  },
  {
    number: '02',
    title: 'Design and data model',
    summary: 'Screens and schema are mapped before code, because changing them later is expensive.',
    details: [
      'Screen flow for the core loop, reviewed with you',
      'Data model and role permissions written down',
      'Open questions listed instead of guessed',
    ],
    output: 'Flow, schema and permission map',
  },
  {
    number: '03',
    title: 'Build in slices',
    summary: 'The core loop ships first. You use it while the rest is built.',
    details: [
      'A working slice every week or two, on a real URL',
      'Your feedback goes into the next slice',
      'No six-month build with a single launch at the end',
    ],
    output: 'Working software you can open and use',
  },
  {
    number: '04',
    title: 'Review and harden',
    summary: 'Permissions, edge cases and mobile get checked before launch, not after.',
    details: [
      'Access tests: one user must never see another user\'s records',
      'Empty, error and slow-network states handled',
      'Mobile widths and keyboard navigation checked',
    ],
    output: 'Test notes and fixes',
  },
  {
    number: '05',
    title: 'Launch and handover',
    summary: 'You get the deployment, the repository and the notes to run it without us.',
    details: [
      'Production deploy on your domain and accounts',
      'Handover of repo access, environment variables and run notes',
      'A support window agreed in the scope, not assumed',
    ],
    output: 'Live system and handover pack',
  },
]

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-border bg-surface/60 px-6 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-accent">Process</p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              A short path from problem to working software.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Five steps, each with something you can see or use. No phase where nothing ships for months.
            </p>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-5xl">
            <ol className="space-y-12">
              {steps.map((step) => (
                <li key={step.number} className="grid gap-6 border-b border-border pb-12 last:border-0 last:pb-0 lg:grid-cols-[auto_1fr]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-sm font-bold text-accent">
                    {step.number}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h2 className="text-2xl font-bold tracking-tight">{step.title}</h2>
                      <span className="rounded-full border border-border px-3 py-0.5 text-xs text-muted-foreground">
                        {step.output}
                      </span>
                    </div>
                    <p className="mt-3 max-w-2xl text-muted-foreground">{step.summary}</p>
                    <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-border bg-card/40 px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">How we keep it predictable</h2>
              <p className="mt-3 text-muted-foreground">
                Most project problems are communication problems. These rules are part of the engagement.
              </p>
            </div>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold">One channel</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Decisions live in one thread, not across calls, chats and forwarded messages.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Written decisions</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  If a decision changes the scope, it is written down before the work starts.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Visible progress</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  You see the build on a URL, not a status report that says 80 percent done.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Ready to scope the first milestone?</h2>
              <p className="mt-2 text-muted-foreground">Tell us what is slow, manual or spread across spreadsheets.</p>
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