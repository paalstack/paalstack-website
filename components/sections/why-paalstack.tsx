'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'

const pillars = [
  {
    title: 'Modern Architecture',
    description:
      'Every project is built on proven, scalable patterns — not hacked-together shortcuts. We use type-safe, maintainable code that teams can build on for years.',
  },
  {
    title: 'AI Expertise',
    description:
      'AI is native to how we build, not bolted on. From RAG pipelines to autonomous agents, we integrate AI where it creates real leverage for your users.',
  },
  {
    title: 'Scalable Systems',
    description:
      'Infrastructure is designed to handle growth from day one. Whether you have 10 users or 100,000, performance and reliability are always priorities.',
  },
  {
    title: 'Fast Execution',
    description:
      'We ship working software quickly without sacrificing quality. Tight feedback loops and agile processes keep projects on track and stakeholders informed.',
  },
  {
    title: 'Long-Term Partnership',
    description:
      'We invest in understanding your business deeply. Our goal is to be the engineering partner you call first — not just a vendor you hand specs to.',
  },
  {
    title: 'Security by Design',
    description:
      'Security is not an afterthought. Authentication, authorization, data encryption, and least-privilege access are baked into every layer from the very first commit.',
  },
]

export function WhyPaalStack() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent-foreground/50">Why PaalStack</p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Engineering You Can Rely On</h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            We combine technical depth with business understanding to deliver software that works — and keeps working.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={shouldReduceMotion ? undefined : staggerContainer}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              variants={shouldReduceMotion ? undefined : fadeUp}
              className="group rounded-lg border border-border bg-card p-7 transition-colors duration-200"
            >
              <div className="mb-3 flex items-center gap-3">
                <div
                  className="h-5 w-1 shrink-0 rounded-full transition-all duration-200 group-hover:h-6"
                  style={{ backgroundColor: i % 2 === 0 ? 'var(--ps-blue)' : 'var(--ps-cyan)' }}
                />
                <h3 className="text-base font-semibold text-foreground">{pillar.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
