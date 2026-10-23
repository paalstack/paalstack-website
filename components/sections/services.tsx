'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Bot, Code2, Globe, Smartphone } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations'

const services = [
  {
    icon: Globe,
    title: 'Websites',
    description: 'Marketing sites and web apps that explain the offer and load fast on a phone.',
  },
  {
    icon: Bot,
    title: 'AI automation',
    description: 'Assistants and internal workflows that remove repetitive work instead of adding another dashboard.',
  },
  {
    icon: Code2,
    title: 'Custom software',
    description: 'CRMs, portals and operations tools shaped around how your team already works.',
  },
  {
    icon: Smartphone,
    title: 'Mobile apps',
    description: 'React Native apps for customers and field teams, Android first when that is where your users are.',
  },
]

export function Services() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">What we build</p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Four ways we build with you</h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Start with a website, add automation where the busywork is, or replace a spreadsheet process
            with software your team owns.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          variants={shouldReduceMotion ? undefined : staggerContainer}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={shouldReduceMotion ? undefined : fadeUp}
              className="rounded-lg border border-border bg-card p-6"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon size={20} />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
          >
            See what each service includes
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}