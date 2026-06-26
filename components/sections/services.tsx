'use client'
import { motion, useReducedMotion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Code2, Bot, Zap, Layers, Cloud, Cpu } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations'

const services = [
  {
    icon: Code2,
    title: 'Software Development',
    description: 'Full-stack applications built with modern, type-safe technologies that scale with your business.',
  },
  {
    icon: Bot,
    title: 'AI Agents',
    description: 'Intelligent agents that automate complex workflows, answer questions, and take action on your behalf.',
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'End-to-end process automation that eliminates repetitive tasks and keeps your team focused on what matters.',
  },
  {
    icon: Layers,
    title: 'SaaS Development',
    description: 'Production-ready SaaS products with auth, billing, user management, and AI features from day one.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Reliable, cost-optimized cloud infrastructure designed for performance, security, and growth.',
  },
  {
    icon: Cpu,
    title: 'AI Integrations',
    description: 'Connect your products with leading AI models and APIs to unlock intelligent, context-aware features.',
  },
]

const springConfig = { stiffness: 350, damping: 28 }

function ServiceCard({
  service,
  shouldReduceMotion,
}: {
  service: { icon: LucideIcon; title: string; description: string }
  shouldReduceMotion: boolean | null
}) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const glowX = useTransform(mouseX, [-0.5, 0.5], [0, 100])
  const glowY = useTransform(mouseY, [-0.5, 0.5], [0, 100])
  const glowOpacity = useSpring(0, springConfig)
  const iconScale = useSpring(1, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
    glowOpacity.set(1)
    iconScale.set(1.15)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    glowOpacity.set(0)
    iconScale.set(1)
  }

  const Icon = service.icon

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : fadeUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-colors duration-200 hover:border-primary/30 cursor-pointer"
    >
      {/* Cursor spotlight */}
      {!shouldReduceMotion && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-lg"
          style={{
            opacity: glowOpacity,
            background: `radial-gradient(circle at ${glowX}% ${glowY}%, hsl(var(--primary) / 0.12) 0%, transparent 65%)`,
          }}
        />
      )}

      <motion.div
        className="relative mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"
        style={{ scale: iconScale }}
      >
        <Icon size={20} />
      </motion.div>
      <h3 className="mb-2 font-semibold text-foreground">{service.title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
    </motion.div>
  )
}

export function Services() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent-foreground/50">What We Do</p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">End-to-End Engineering</h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            From initial architecture to production deployment, we handle every layer of your product.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={shouldReduceMotion ? undefined : staggerContainer}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} shouldReduceMotion={shouldReduceMotion} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
