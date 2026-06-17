import { projects } from '@/lib/projects'
import { Logo } from '@/components/layout/logo'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'

const services = [
  'Software Development',
  'AI Agents',
  'Automation Platforms',
  'SaaS Development',
  'Cloud Solutions',
  'AI Integrations',
]

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo size="md" variant='tagline' />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A software engineering studio specializing in AI-powered applications, automation platforms, and scalable
              SaaS products.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Services</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Projects</h3>
            <ul className="space-y-2.5">
              {projects.map((project) => (
                <li key={project.slug}>
                  <a
                    href={`/projects/${project.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
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

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">© 2026 PaalStack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
