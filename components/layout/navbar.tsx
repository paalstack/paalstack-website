'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { ThemeToggle } from '@/components/layout/theme-toggle'
import { Logo } from '@/components/layout/logo'
import Link from 'next/link'

const navLinks = [
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/process' },
  { label: 'Technology', href: '/technology' },
  { label: 'About', href: '/about' },
] 

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (y) => setIsScrolled(y > 80))
    return unsubscribe
  }, [scrollY])

  useEffect(() => {
    if (!mobileOpen) return
    const frame = requestAnimationFrame(() => {
      menuRef.current?.querySelector<HTMLAnchorElement>('a')?.focus()
    })
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [mobileOpen])

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (href.startsWith('#') || (href.startsWith('/#') && pathname === '/')) {
      e.preventDefault()
      const id = href.startsWith('/#') ? href.slice(2) : href.slice(1)
      if (id) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      setMobileOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-background/80 border-b border-border/50' : ''
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" aria-label="Paalstack home" className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
          <Logo size="lg" variant='tagline' />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link href="/#contact" className={buttonVariants({ size: 'sm' })}>
            Get in touch
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="flex h-9 w-9 items-center justify-center text-foreground"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md px-6 pb-6 pt-4"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    autoFocus={index === 0}
                    className="block rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className={buttonVariants({ className: 'w-full' })}
                >
                  Get in touch
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
