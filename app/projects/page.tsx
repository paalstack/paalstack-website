import type { Metadata } from 'next'
import { projects } from '@/lib/projects'
import { ProjectCard } from '@/components/projects/project-card'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects — PaalStack',
  description: 'Explore PaalStack projects: AI platforms, CRM tools, and SaaS starters built with Next.js and Supabase.',
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>

        <div className="mb-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">Our Work</p>
          <h1 className="mb-4 text-5xl font-bold tracking-tight">All Projects</h1>
          <p className="max-w-xl text-muted-foreground">
            Production applications engineered from the ground up — AI platforms, automation tools, and SaaS products
            built for real-world scale.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
