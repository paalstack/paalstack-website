'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { Star } from 'lucide-react'

const results = [
  {
    metric: '6 wks',
    label: 'Concept to production',
    description:
      'From initial brief to a fully deployed AI agent — RAG pipeline, auth, and CI/CD all shipped.',
    tag: 'AI Agent',
    accent: 'var(--ps-blue)',
  },
  {
    metric: '70%',
    label: 'Ops time saved',
    description:
      "A custom automation platform eliminated the manual overhead of a client's core operations.",
    tag: 'Automation',
    accent: 'var(--ps-indigo)',
  },
  {
    metric: '3×',
    label: 'Faster feature velocity',
    description:
      "Migrating a legacy codebase to a type-safe stack tripled the team's ability to ship safely.",
    tag: 'Modernisation',
    accent: 'var(--ps-cyan)',
  },
  {
    metric: '100%',
    label: 'On-time delivery',
    description:
      'Every project delivered on schedule. Proactive risk surfacing keeps timelines intact.',
    tag: 'Delivery',
    accent: 'var(--ps-blue)',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT_EXPO } },
}

export function Testimonials() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Dot-grid texture — adapts to light/dark via foreground color */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, color-mix(in srgb, var(--foreground) 7%, transparent) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Faint radial vignette to fade grid at edges */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_40%,var(--background)_100%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="mb-20 text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent-foreground/50">
            Track Record
          </p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Results We&apos;ve Delivered
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Concrete outcomes from real projects — measured in time saved, velocity gained, and software shipped.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-4 lg:gap-x-12"
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {results.map((r) => (
            <motion.div
              key={r.label}
              variants={shouldReduceMotion ? undefined : itemVariants}
              className="group flex flex-col"
            >
              {/* Top rule — full width, accent coloured */}
              <div
                className="mb-5 h-px w-full"
                style={{
                  background: `linear-gradient(90deg, ${r.accent}, color-mix(in srgb, ${r.accent} 20%, transparent))`,
                }}
              />

              {/* Tag */}
              <span
                className="mb-4 inline-block w-fit rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest"
                style={{
                  backgroundColor: `color-mix(in srgb, ${r.accent} 12%, transparent)`,
                  color: r.accent,
                }}
              >
                {r.tag}
              </span>

              {/* Oversized metric */}
              <motion.p
                className="mb-3 font-extrabold leading-none tracking-tighter"
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  color: r.accent,
                  textShadow: `0 0 40px color-mix(in srgb, ${r.accent} 35%, transparent)`,
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { scale: 1.04, textShadow: `0 0 60px color-mix(in srgb, ${r.accent} 60%, transparent)` }
                }
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                {r.metric}
              </motion.p>

              {/* Label */}
              <p className="mb-2 text-sm font-semibold text-foreground">{r.label}</p>

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted-foreground">{r.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Social proof footer */}
        <motion.div
          className="mt-20 flex flex-col items-center gap-3 text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} fill="currentColor" className="text-yellow-400" />
              ))}
            </span>
            <span>100% client satisfaction across all delivered projects</span>
          </div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground/40">
            Free project estimate · No commitment required
          </p>
        </motion.div>

      </div>
    </section>
  )
}
