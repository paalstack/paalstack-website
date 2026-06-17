'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'

const testimonials = [
  {
    quote:
      "PaalStack took our rough idea and shipped a production-grade AI agent in 6 weeks. The code quality alone saved us months of refactoring down the road.",
    author: 'Marcus T.',
    role: 'Founder & CEO',
    company: 'Automate Ventures',
    avatar: 'MT',
    accent: 'var(--ps-blue)',
  },
  {
    quote:
      "They didn't just write code — they understood our business. The automation platform they built cut our operations time by 70%. ROI was clear within the first month.",
    author: 'Priya S.',
    role: 'Head of Operations',
    company: 'ScaleOps Inc.',
    avatar: 'PS',
    accent: 'var(--ps-indigo)',
  },
  {
    quote:
      "Best engineering partner we've worked with. TypeScript end-to-end, CI/CD from day one, and they were always proactive about surfacing technical risks before they became problems.",
    author: 'Daniel R.',
    role: 'CTO',
    company: 'NovaSaaS',
    avatar: 'DR',
    accent: 'var(--ps-cyan)',
  },
]

export function Testimonials() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-24 lg:py-32 bg-card/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">What Clients Say</p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Proven. Trusted. Delivered.</h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Real outcomes from real partnerships — we measure success by the impact we create for your business.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={shouldReduceMotion ? undefined : staggerContainer}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.author}
              variants={shouldReduceMotion ? undefined : fadeUp}
              className="flex flex-col rounded-xl border border-border bg-card p-7 transition-all duration-200 hover:border-primary/30 hover:shadow-[0_0_24px_rgba(0,85,255,0.06)]"
            >
              {/* Quote mark */}
              <div
                className="mb-5 text-4xl font-serif leading-none"
                style={{ color: t.accent, opacity: 0.6 }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Quote text */}
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">{t.quote}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: t.accent }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className="mt-5 h-0.5 w-12 rounded-full opacity-60"
                style={{ backgroundColor: t.accent }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom social proof bar */}
        <motion.div
          className="mt-16 flex flex-col items-center gap-4 text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-accent">★★★★★</span>
            <span>100% client satisfaction across all delivered projects</span>
          </div>
          <p className="text-xs text-muted-foreground/50 uppercase tracking-widest">
            Free project estimate · No commitment required
          </p>
        </motion.div>
      </div>
    </section>
  )
}
