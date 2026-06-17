'use client'
import { useEffect, useRef, useState, startTransition, useCallback } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import {
  SiNextdotjs,
  SiTypescript,
  SiSupabase,
  SiVercel,
  SiTailwindcss,
} from 'react-icons/si'
import { Route } from 'lucide-react'
import { useTheme } from 'next-themes'

const techStack = [
  { name: 'Next.js',      Icon: SiNextdotjs,   color: { light: '#000', dark: '#fff' }         },
  { name: 'TypeScript',   Icon: SiTypescript,  color: { light: '#3178c6', dark: '#3178c6' }   },
  { name: 'Supabase',     Icon: SiSupabase,    color: { light: '#3ecf8e', dark: '#3ecf8e' }   },
  { name: 'OpenRouter',   Icon: null,          color: { light: '#6366f1', dark: '#6366f1' }   },
  { name: 'Vercel',       Icon: SiVercel,      color: { light: '#111', dark: '#fafafa' }      },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: { light: '#06b6d4', dark: '#06b6d4' }   },
]

interface Stat {
  value: number
  suffix: string
  label: string
  description: string
}

const stats: Stat[] = [
  { value: 3, suffix: '', label: 'Flagship Platforms', description: 'Production-grade products in our portfolio' },
  { value: 7, suffix: '+', label: 'Engineering Services', description: 'From AI agents to cloud infrastructure' },
  { value: 9, suffix: '', label: 'Core Technologies', description: 'A modern, battle-tested stack' },
  { value: 100, suffix: '%', label: 'Type-Safe Code', description: 'End-to-end TypeScript across every layer' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const shouldReduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (shouldReduceMotion) {
      startTransition(() => setDisplay(value))
      return
    }
    const duration = 1400
    let raf = 0
    let start: number | null = null
    function tick(now: number) {
      if (start === null) start = now
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, shouldReduceMotion])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export function Stats() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { startTransition(() => setMounted(true)) }, [])

  const theme = (resolvedTheme ?? 'dark') as 'light' | 'dark'
  const iconColor = useCallback(
    (color: { light: string; dark: string }) => mounted ? color[theme] : 'currentColor',
    [mounted, theme],
  )

  return (
    <section className="relative border-y border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Social proof header */}
        <div className="mb-12 text-center">
          <p className="mb-5 text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
            Built on a modern, battle-tested stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {techStack.map(({ name, Icon, color }) => (
              <div
                key={name}
                className="flex items-center gap-2 text-muted-foreground/70 transition-colors hover:text-foreground"
              >
                {Icon ? (
                  <Icon size={18} style={{ color: iconColor(color) }} />
                ) : (
                  <Route size={16} style={{ color: iconColor(color) }} />
                )}
                <span className="text-sm font-medium">{name}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 h-px bg-linear-to-r from-transparent via-border to-transparent" />
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center sm:text-left"
            >
              <div className="mb-2 bg-linear-to-br from-foreground to-foreground/60 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mb-1 text-sm font-semibold text-foreground">{stat.label}</div>
              <p className="text-xs leading-relaxed text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
