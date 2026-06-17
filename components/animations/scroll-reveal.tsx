'use client'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: fadeUp.hidden,
        visible: {
          ...fadeUp.visible,
          transition: {
            ...(typeof fadeUp.visible === 'object' && 'transition' in fadeUp.visible
              ? fadeUp.visible.transition as object
              : {}),
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
