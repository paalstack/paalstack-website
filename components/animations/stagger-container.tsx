'use client'
import { motion } from 'framer-motion'
import { staggerContainer, staggerContainerFast } from '@/lib/animations'

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  fast?: boolean
}

export function StaggerContainer({ children, className, fast = false }: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fast ? staggerContainerFast : staggerContainer}
    >
      {children}
    </motion.div>
  )
}
