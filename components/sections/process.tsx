'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We deeply understand your goals, users, and technical constraints before writing a single line.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Architecture, data models, and UI flows are mapped out to eliminate ambiguity before building.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Clean, type-safe code with CI/CD from day one — iterating rapidly with continuous feedback.',
  },
  {
    number: '04',
    title: 'Automate',
    description: 'Workflows, notifications, and AI agents are integrated to multiply team productivity.',
  },
  {
    number: '05',
    title: 'Scale',
    description: 'Infrastructure is right-sized, monitored, and optimized for reliability and growth.',
  },
]

export function Process() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="process" className="py-24 lg:py-32 bg-card/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-20 text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">How We Work</p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">From Idea to Production</h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            A structured, transparent process that turns complex requirements into production-grade software.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden lg:block">
          <div className="relative flex items-start">

            {/* Static track — from right edge of circle 1 to left edge of circle 5.
                Each step is flex-1 (20%), so centers sit at 10%,30%,50%,70%,90%.
                Circle is h-16 (4rem=64px), radius=32px. */}
            <div
              className="pointer-events-none absolute top-8 h-0.5 bg-border"
              style={{ left: 'calc(10% + 32px)', right: 'calc(10% + 32px)' }}
            />


            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative flex flex-1 flex-col items-center px-3 text-center"
                variants={shouldReduceMotion ? undefined : fadeUp}
                initial={shouldReduceMotion ? false : 'hidden'}
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Number badge — opaque backing discs (match section bg) hide the line behind circle */}
                <div className="relative z-10 mb-5 h-16 w-16">
                  <span className="absolute inset-0 rounded-full bg-background" />
                  <span className="absolute inset-0 rounded-full bg-card/40" />
                  <span className="absolute inset-0 flex items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-bold text-primary">
                    {step.number}
                  </span>
                </div>
                <h3 className="mb-2 text-base font-semibold">{step.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/tablet vertical timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex gap-5"
              variants={shouldReduceMotion ? undefined : fadeUp}
              initial={shouldReduceMotion ? false : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-bold text-primary">
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <div className="mt-2 h-full w-px bg-border" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="mb-1.5 text-base font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
