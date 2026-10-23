'use client'
import { MessageCircle, Mail, Calendar } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { buttonVariants } from '@/components/ui/button'
import { fadeUp } from '@/lib/animations'

const WHATSAPP_NUMBER = '919445450410'
const EMAIL = 'hello@paalstack.com'
const CALENDLY_URL = 'https://calendly.com/paalamugan/30min'

const options = [
  { icon: MessageCircle, title: 'WhatsApp', desc: 'Quick questions on WhatsApp chat.', href: `https://wa.me/${WHATSAPP_NUMBER}` },
  { icon: Mail, title: 'Email', desc: 'Send project details by email.', href: `mailto:${EMAIL}` },
  { icon: Calendar, title: 'Book a call', desc: 'Schedule a 30-minute discovery call.', href: CALENDLY_URL },
]

export function FinalCTA() {
  const shouldReduceMotion = useReducedMotion()
  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-card/60" />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          variants={shouldReduceMotion ? undefined : fadeUp}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">Start your project</p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Let&apos;s build something that lasts</h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            Pick the channel that works for you. We reply within 24 hours.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
          variants={shouldReduceMotion ? undefined : fadeUp}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1 }}
        >
          {options.map(({ icon: Icon, title, desc, href }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 rounded-lg border border-border bg-surface p-6 text-center transition-colors hover:border-accent"
            >
              <Icon className="h-6 w-6 text-accent" />
              <span className="text-base font-semibold text-foreground">{title}</span>
              <span className="text-xs text-muted-foreground">{desc}</span>
              <span className={buttonVariants({ variant: 'secondary', size: 'sm' })}>Open</span>
            </a>
          ))}
        </motion.div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          No commitment · free estimate · response within 24 hours
        </p>
      </div>
    </section>
  )
}