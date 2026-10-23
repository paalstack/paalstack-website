'use client'
import Link from 'next/link'
import { motion, useReducedMotion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, Layers } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations'
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNestjs,
  SiPrisma,
  SiPostgresql,
  SiTailwindcss,
  SiVercel,
} from 'react-icons/si'
import type { IconType } from 'react-icons'
import type { LucideIcon } from 'lucide-react'

type TechIcon = IconType | LucideIcon

const technologies: { name: string; category: string; accent: string; Icon: TechIcon }[] = [
  { name: 'Next.js',      category: 'Framework',      accent: '#ffffff', Icon: SiNextdotjs   },
  { name: 'TypeScript',   category: 'Language',       accent: '#3178c6', Icon: SiTypescript  },
  { name: 'React',        category: 'UI Library',     accent: '#61dafb', Icon: SiReact       },
  { name: 'Node.js',      category: 'Runtime',        accent: '#68a063', Icon: SiNodedotjs   },
  { name: 'NestJS',       category: 'API Framework',  accent: '#e0234e', Icon: SiNestjs      },
  { name: 'Prisma',       category: 'ORM',            accent: '#2d3748', Icon: SiPrisma      },
  { name: 'PostgreSQL',   category: 'Database',       accent: '#4169e1', Icon: SiPostgresql  },
  { name: 'Tailwind CSS', category: 'Styling',        accent: '#06b6d4', Icon: SiTailwindcss },
  { name: 'shadcn/ui',    category: 'Components',     accent: '#ffffff', Icon: Layers        },
  { name: 'Vercel',       category: 'Deployment',     accent: '#ffffff', Icon: SiVercel      },
]

const springConfig = { stiffness: 350, damping: 28 }

function TechCard({
  tech,
  shouldReduceMotion,
}: {
  tech: (typeof technologies)[number]
  shouldReduceMotion: boolean | null
}) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig)
  const glowX = useTransform(mouseX, [-0.5, 0.5], [0, 100])
  const glowY = useTransform(mouseY, [-0.5, 0.5], [0, 100])
  const glowOpacity = useSpring(0, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return
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

  const Icon = tech.Icon

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : fadeUp}
      style={
        shouldReduceMotion
          ? undefined
          : { rotateX, rotateY, transformPerspective: 700 }
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col items-center justify-center gap-3 rounded-lg border border-border bg-card p-6 text-center overflow-hidden"
    >
      {/* Mouse-tracked spotlight */}
      {!shouldReduceMotion && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-lg"
          style={{
            opacity: glowOpacity,
            background: `radial-gradient(circle at ${glowX}% ${glowY}%, ${tech.accent}20 0%, transparent 65%)`,
          }}
        />
      )}

      {/* Accent top-edge line */}
      {!shouldReduceMotion && (
        <motion.div
          className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left rounded-t-lg"
          style={{
            background: `linear-gradient(90deg, transparent, ${tech.accent}80, transparent)`,
            scaleX: glowOpacity,
          }}
        />
      )}

      <div
        className="relative flex h-10 w-10 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-110"
        style={{ backgroundColor: `${tech.accent}15` }}
      >
        <Icon
          size={22}
          style={{ color: tech.accent === '#ffffff' ? 'var(--foreground)' : tech.accent }}
        />
      </div>
      <div>
        <div className="text-sm font-semibold text-foreground">{tech.name}</div>
        <div className="mt-0.5 text-xs text-muted-foreground">{tech.category}</div>
      </div>
    </motion.div>
  )
}

export function Technology() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="technology" className="py-24 lg:py-32 bg-card/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">Our stack</p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">One stack, known well</h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            TypeScript from the browser to the server, one relational database, and managed hosting where it saves time.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          variants={shouldReduceMotion ? undefined : staggerContainer}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {technologies.map((tech) => (
            <TechCard key={tech.name} tech={tech} shouldReduceMotion={shouldReduceMotion} />
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            href="/technology"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
          >
            Why we chose this stack
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
