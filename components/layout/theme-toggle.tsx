'use client'
import { useEffect, useState, startTransition } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { startTransition(() => setMounted(true)) }, [])

  const isDark = resolvedTheme === 'dark'

  function toggle() {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggle}
      aria-label="Toggle color theme"
      className={`relative ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted ? (
          <motion.span
            key={isDark ? 'moon' : 'sun'}
            initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: 0.1, ease: 'easeInOut' }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {isDark ? <Moon size={17} /> : <Sun size={17} />}
          </motion.span>
        ) : (
          <span className="absolute inset-0 flex items-center justify-center">
            <Moon size={17} />
          </span>
        )}
      </AnimatePresence>
    </Button>
  )
}
