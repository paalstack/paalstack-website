import { projects, getProject } from '@/lib/projects'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.name} — PaalStack`,
    description: project.description,
    openGraph: {
      title: `${project.name} — PaalStack`,
      description: project.description,
    },
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) notFound()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div
        className="relative overflow-hidden py-32"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${project.accentColor}18 0%, transparent 70%)`,
        }}
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} />
            All Projects
          </Link>

          <p
            className="mb-3 text-xs font-medium uppercase tracking-widest"
            style={{ color: project.accentColor }}
          >
            {project.category}
          </p>
          <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl">{project.name}</h1>
          <p className="mb-8 text-xl text-muted-foreground">{project.tagline}</p>
          <p className="max-w-2xl text-muted-foreground leading-relaxed">{project.description}</p>
        </div>
      </div>

      {/* Feature grid */}
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <h2 className="mb-8 text-2xl font-bold">Key Features</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.features.map((feature) => (
            <div
              key={feature}
              className="rounded-lg border border-border bg-card p-5"
            >
              <div
                className="mb-3 h-1 w-8 rounded-full"
                style={{ backgroundColor: project.accentColor }}
              />
              <p className="font-medium text-foreground">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech stack */}
      <div className="mx-auto max-w-5xl px-6 py-8 pb-16 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold">Technology Stack</h2>
        <div className="flex flex-wrap gap-3">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full px-4 py-1.5 text-sm font-medium"
              style={{
                backgroundColor: `${project.accentColor}1a`,
                color: project.accentColor,
                border: `1px solid ${project.accentColor}33`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <h2 className="mb-4 text-3xl font-bold">Ready to build something similar?</h2>
          <p className="mb-8 text-muted-foreground">
            Let&apos;s discuss your project and explore how we can engineer it together.
          </p>
          <Link
            href="/#contact"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
          >
            Start a Similar Project
          </Link>
        </div>
      </div>
    </div>
  )
}
