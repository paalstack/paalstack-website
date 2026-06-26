'use client'
import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle2, Clock, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { fadeUp } from '@/lib/animations'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const subjects = [
  'New Project',
  'AI Agent Development',
  'SaaS Development',
  'Automation Platform',
  'Consultation',
  'Other',
]

export function FinalCTA() {
  const shouldReduceMotion = useReducedMotion()
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [subject, setSubject] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('loading')
    setErrorMessage('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      subject,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error ?? 'Something went wrong. Please try again.')
      }
      setFormState('success')
      setSubject('')
      form.reset()
    } catch (err) {
      setFormState('error')
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-card/60" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 15% 50%, rgba(0,85,255,0.10) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 85% 40%, rgba(99,102,241,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Floating gradient orbs */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            className="pointer-events-none absolute left-1/4 top-1/4 h-64 w-64 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(0,85,255,0.08) 0%, transparent 70%)' }}
            animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="pointer-events-none absolute right-1/4 bottom-1/3 h-48 w-48 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)' }}
            animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
        </>
      )}

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          variants={shouldReduceMotion ? undefined : fadeUp}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent-foreground/50">Start Your Project</p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Let&apos;s Build Something That Lasts</h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            Tell us about your project. We&apos;ll respond within 24 hours with a free consultation and no-pressure estimate.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground/60">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={12} className="text-ps-cyan shrink-0" />
              Free project estimate
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} className="text-ps-cyan shrink-0" />
              Response within 24 hours
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={12} className="text-ps-cyan shrink-0" />
              No lock-in contracts
            </span>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          variants={shouldReduceMotion ? undefined : fadeUp}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1 }}
        >
          {formState === 'success' ? (
            <div className="rounded-lg border border-accent/30 bg-accent/10 p-8 text-center">
              <p className="text-lg font-semibold text-foreground">Message sent!</p>
              <p className="mt-2 text-muted-foreground">
                Thanks for reaching out. We&apos;ll be in touch within 24 hours.
              </p>
              <Button
                variant="ghost"
                className="mt-4"
                onClick={() => setFormState('idle')}
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                    Name<span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    minLength={2}
                    maxLength={100}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-foreground">
                  Subject<span className="text-red-500">*</span>
                </label>
                <Select value={subject} onValueChange={(v) => setSubject(v ?? '')}>
                  <SelectTrigger id="subject" className="w-full">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                  Message<span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  minLength={10}
                  maxLength={2000}
                />
              </div>

              {formState === 'error' && (
                <div className="rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                  {errorMessage}
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full shadow-[0_0_20px_rgba(0,85,255,0.25)]"
                disabled={formState === 'loading'}
              >
                {formState === 'loading' ? 'Sending...' : 'Start a Free Consultation'}
              </Button>
              <p className="text-center text-xs text-muted-foreground/50">
                No commitment · Free estimate · Response within 24 hours
              </p>
            </form>
          )}
        </motion.div>

        {/* Direct email */}
        <motion.p
          className="mt-8 text-center text-sm text-muted-foreground"
          variants={shouldReduceMotion ? undefined : fadeUp}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.2 }}
        >
          Or reach us directly at{' '}
          <a href="mailto:hello@paalstack.com" className="text-primary hover:underline">
            hello@paalstack.com
          </a>
        </motion.p>
      </div>
    </section>
  )
}
