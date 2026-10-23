import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Boxes, Code2, Smartphone, Sparkles } from 'lucide-react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { buttonVariants } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About | Paalstack Studio',
  description:
    'Paalstack Studio builds websites, AI automation and custom software for businesses in India and beyond. One team from first sketch to production.',
}

const services = [
  { icon: Code2, title: 'Websites', body: 'Marketing sites and web apps that load fast, read clearly and hold up under real traffic.' },
  { icon: Sparkles, title: 'AI automation', body: 'Assistants, document flows and internal tools that remove repetitive work instead of adding another dashboard.' },
  { icon: Boxes, title: 'Custom software', body: 'CRMs, portals and operations tools shaped around how your team already works.' },
  { icon: Smartphone, title: 'Mobile apps', body: 'React Native apps for customers and field teams, Android first when that is where your users are.' },
]

const principles = [
  {
    title: 'Ship the useful version first',
    body: 'A working screen in front of real users teaches more than a long specification. We build the core loop, then widen it.',
  },
  {
    title: 'Own the core, hand over the custom',
    body: 'Clients get a licence to the reusable framework and full ownership of their custom parts. We keep improving the shared base.',
  },
  {
    title: 'Keep the stack boring',
    body: 'Next.js, TypeScript, Node and Postgres by default. New tools have to earn their place, not arrive because they are new.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-border bg-surface/60 px-6 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-accent">About the studio</p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              A small studio that ships the whole stack.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Paalstack Studio builds websites, AI automation and custom software for businesses in India and
              beyond. One team takes the work from first sketch to production.
            </p>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Why we exist</h2>
            </div>
            <div className="space-y-5 text-muted-foreground">
              <p>
                Most small businesses do not need another agency that disappears after launch. They need someone
                who understands the operation, builds the software around it, and stays long enough to fix what
                the first version got wrong.
              </p>
              <p>
                We started with client work in real estate and still treat custom projects as the main business.
                Every build teaches us something reusable. Over time those patterns become products, starting
                with a CRM and buyer portal for builders.
              </p>
              <p>
                The studio is run by Paalamugan, a software engineer in Chennai with nine years of experience
                building web products in healthcare and real estate.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card/40 px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">What we build</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {services.map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-lg border border-border bg-surface p-6">
                  <Icon className="h-6 w-6 text-accent" />
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">How we work</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {principles.map((item, index) => (
                <div key={item.title}>
                  <span className="text-sm font-medium text-accent">0{index + 1}</span>
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-surface/60 px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Have a build in mind?</h2>
              <p className="mt-2 text-muted-foreground">Tell us what you are trying to run. We will tell you what it takes.</p>
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