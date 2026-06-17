'use client'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
}

const springConfig = { stiffness: 350, damping: 28 }

export function ProjectCard({ project }: ProjectCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const glowX = useTransform(mouseX, [-0.5, 0.5], [0, 100])
  const glowY = useTransform(mouseY, [-0.5, 0.5], [0, 100])
  const glowOpacity = useSpring(0, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
    glowOpacity.set(1)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    glowOpacity.set(0)
  }

  return (
    <motion.div
      style={{
        '--accent-color': project.accentColor,
      } as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card"
    >
      {/* Cursor spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-lg"
        style={{
          opacity: glowOpacity,
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, ${project.accentColor}18 0%, transparent 65%)`,
        }}
      />

      {/* Accent strip */}
      <div
        className="h-[3px] w-full shrink-0"
        style={{ backgroundColor: project.accentColor }}
      />

      <div className="flex flex-1 flex-col p-6">
        {/* Category */}
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {project.category}
        </p>

        {/* Name */}
        <h3 className="mb-3 text-xl font-bold text-foreground">{project.name}</h3>

        {/* Description */}
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        {/* Feature tags */}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.features.map((feature) => (
            <span
              key={feature}
              className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Stack chips */}
        <div className="mb-6 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded px-2 py-0.5 text-xs font-medium"
              style={{
                backgroundColor: `${project.accentColor}1a`,
                color: project.accentColor,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer link */}
        <div className="mt-auto">
          <a
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
            style={{ color: project.accentColor }}
          >
            View Project
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </motion.div>
  )
}
