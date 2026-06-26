'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle2, Clock, ShieldCheck } from 'lucide-react'
import { InfrastructureGrid } from '@/components/animations/infrastructure-grid'
import { Button } from '@/components/ui/button'
import { wordReveal, staggerContainer, fadeUp } from '@/lib/animations'

const headlineLines = [
  ['Build', 'Software.'],
  ['Automate', 'Operations.'],
  ['Scale', 'Faster.'],
]

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background grid */}
      <InfrastructureGrid />

      {/* Atmospheric gradient overlays */}
      <div
        className="pointer-events-none absolute inset-0 z-1"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 20% 100%, rgba(0,85,255,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 0%, rgba(99,102,241,0.12) 0%, transparent 60%)',
        }}
      />

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-2 h-40 bg-linear-to-t from-background to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center lg:px-8">
        {/* Eyebrow badge */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center rounded-full border border-ps-cyan/30 bg-ps-cyan/10 px-4 py-1.5 text-sm text-ps-cyan"
        >
          AI-First Software Engineering
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={staggerContainer}
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
          className="mb-6 text-5xl font-extrabold tracking-tight md:text-6xl lg:text-[78px]"
          aria-label="Build Software. Automate Operations. Scale Faster."
        >
          {headlineLines.map((line, li) => (
            <span key={li} className="block">
              {line.map((word, wi) => (
                <motion.span
                  key={wi}
                  variants={shouldReduceMotion ? undefined : wordReveal}
                  className={`inline-block ${wi > 0 ? 'ml-[0.3em]' : ''} ${
                    wi === 1 ? 'text-primary' : ''
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={shouldReduceMotion ? undefined : fadeUp}
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
          transition={{ delay: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          AI-powered applications, automation platforms, and scalable SaaS products — engineered to ship in weeks, not months.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={shouldReduceMotion ? undefined : fadeUp}
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
          transition={{ delay: 0.75 }}
          className="mb-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button
            size="lg"
            className="min-w-50 px-8 shadow-[0_0_24px_rgba(0,85,255,0.35)]"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get a Free Consultation
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Our Work →
          </Button>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          variants={shouldReduceMotion ? undefined : fadeUp}
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
          transition={{ delay: 0.9 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-ps-cyan shrink-0" />
              Free project estimate
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-ps-cyan shrink-0" />
              24-hour response
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-ps-cyan shrink-0" />
              No lock-in contracts
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
