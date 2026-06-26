import { projects } from '@/lib/projects'
import { ProjectCard } from '@/components/projects/project-card'

export function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent-foreground/50">Featured Work</p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Systems Built to Scale</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Real applications engineered for production — AI-powered platforms, automation tools, and SaaS products
            that businesses rely on every day.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
