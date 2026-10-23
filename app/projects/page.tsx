import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { projects } from '@/lib/projects'
import { ProjectCard } from '@/components/projects/project-card'
import { buttonVariants } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Work | Paalstack Studio',
  description:
    'Custom software, websites and AI automation built by Paalstack Studio for real businesses.',
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pb-24 pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>

          <div className="mb-14">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">Our work</p>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Builds in production</h1>
            <p className="max-w-xl text-muted-foreground">
              Client work we have shipped. Each one started as a custom build and left behind patterns we reuse.
            </p>
          </div>

          {projects.length === 0 ? (
            <div className="rounded-lg border border-border bg-surface p-10 text-center">
              <p className="text-lg font-semibold">Case studies are on the way</p>
              <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                We are finishing the write-up for our first build. In the meantime, tell us what you are working on
                and we will walk you through similar work.
              </p>
              <Link href="/#contact" className={buttonVariants({ className: 'mt-6' })}>
                Start a conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}