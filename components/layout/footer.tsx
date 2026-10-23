import Link from 'next/link'
import { Logo } from '@/components/layout/logo'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'

const services = [
  { label: 'Websites', href: '/services' },
  { label: 'AI automation', href: '/services' },
  { label: 'Custom software', href: '/services' },
  { label: 'Mobile apps', href: '/services' },
]

const studio = [
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/process' },
  { label: 'Technology', href: '/technology' },
  { label: 'Work', href: '/projects' },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo size="md" variant="tagline" />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A studio in Chennai building websites, AI automation, custom software and mobile apps
              for growing businesses.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Services</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Studio</h3>
            <ul className="space-y-2.5">
              {studio.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/paalstack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <FaGithub size={15} />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/paalstack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <FaLinkedin size={15} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/paalstack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <FaXTwitter size={15} />
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@paalstack.com"
                  className="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail size={15} />
                  hello@paalstack.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">© 2026 Paalstack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}