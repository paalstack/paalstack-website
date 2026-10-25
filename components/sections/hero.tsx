'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { InfrastructureGrid } from '@/components/animations/infrastructure-grid'
import { Button } from '@/components/ui/button'
import { fadeUp } from '@/lib/animations'

export function Hero() {
  const shouldReduceMotion = useReducedMotion()
  // Only pick up the tour file once the panel is actually shown (md and up), so
  // phones never download a video they cannot read.
  const [tourSrc, setTourSrc] = useState<string | null>(null)

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 768px)')
    const large = window.matchMedia('(min-width: 1024px)')
    const pick = () =>
      setTourSrc(
        wide.matches
          ? large.matches
            ? '/assets/hero/paalstack-tour.mp4'
            : '/assets/hero/paalstack-tour-720.mp4'
          : null,
      )
    pick()
    wide.addEventListener('change', pick)
    large.addEventListener('change', pick)
    return () => {
      wide.removeEventListener('change', pick)
      large.removeEventListener('change', pick)
    }
  }, [])

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <InfrastructureGrid />

      <div
        className="pointer-events-none absolute inset-0 z-1"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 20% 100%, rgba(0,85,255,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 0%, rgba(99,102,241,0.12) 0%, transparent 60%)',
        }}
      />

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-2 h-40 bg-linear-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pt-32 pb-4 text-center lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center rounded-full border border-ps-cyan/30 bg-ps-cyan/10 px-4 py-1.5 text-sm leading-none text-ps-cyan"
        >
          Paalstack Studio, Chennai
        </motion.div>

        <motion.h1
          variants={shouldReduceMotion ? undefined : fadeUp}
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
          className="mb-6 text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl"
        >
          <span className="block">Websites. Automation.</span>
          <span className="block text-primary">Software that fits.</span>
        </motion.h1>

        <motion.p
          variants={shouldReduceMotion ? undefined : fadeUp}
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          We build the public site, the internal tools and the AI workflows behind them. One team
          takes it from first sketch to production.
        </motion.p>

        <motion.div
          variants={shouldReduceMotion ? undefined : fadeUp}
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
          transition={{ delay: 0.35 }}
          className="mb-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button
            size="lg"
            className="min-w-50 px-8 shadow-[0_0_24px_rgba(0,85,255,0.35)]"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a project
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See our work
          </Button>
        </motion.div>

        <motion.div
          variants={shouldReduceMotion ? undefined : fadeUp}
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
          transition={{ delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-foreground/75"
        >
          <span>Free estimate</span>
          <span>Reply within 24 hours</span>
          <span>No lock-in contracts</span>
        </motion.div>
      </div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="relative z-10 mx-auto mt-12 mb-20 hidden w-full max-w-5xl px-6 md:block lg:px-8"
      >
        <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-surface shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]">
          {shouldReduceMotion ? (
            <Image
              src="/assets/hero/paalstack-tour-poster.jpg"
              alt="Home page of the Paalstack site"
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
          ) : (
            <video
              className="block h-auto w-full"
              src={tourSrc ?? undefined}
              poster="/assets/hero/paalstack-tour-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              disablePictureInPicture
              aria-label="Scroll-through tour of the Paalstack site"
            />
          )}
        </div>
      </motion.div>
    </section>
  )
}
