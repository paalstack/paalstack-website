# Component specs — paalstack.com

All use an accessible base (shadcn/ui + @base-ui). Lucide icons (MIT). Open fonts only.

Button
  variants  primary, secondary, ghost, link, danger
  sizes     sm 32px, md 40px, lg 48px
  states    default, hover, active, focus-visible (2px ring accent), disabled, loading
  tokens    bg accent, text on-accent, radius md, font sm/600
  a11y      real <button>, visible focus, loading keeps label for SR
  used on   S01, S02, S05, S06, S07

Hero
  variants  with-image, text-only
  sizes     full-width, max 1200px
  states    loaded
  tokens    bg bg, text text, radius lg, type display
  used on   S01

Navbar
  variants  desktop, mobile-drawer
  states    default, scrolled (shadow)
  tokens    bg surface, border border, radius sm, font sm/500
  a11y      skip-to-content, keyboard trap in drawer
  used on   all

Footer
  states    default
  used on   all

ServiceCard
  variants  with-icon, with-metric
  states    default, hover (lift + shadow)
  tokens    bg surface, border border, radius lg, shadow card
  used on   S01, S02

ProjectCard
  variants  default, featured
  states    default, hover
  tokens    bg surface, border border, radius lg, shadow card
  used on   S04

Stat
  states    default
  used on   S01

StepCard / ProcessStep
  variants  numbered, icon
  states    default
  used on   S01, S03

TestimonialCard
  states    default
  tokens    bg surface, radius lg
  used on   S01

FinalCta
  states    default
  used on   S01, S04

ContactCard
  variants  whatsapp, email, calendly
  states    default, hover
  used on   S07

Badge
  variants  default, outline, accent
  used on   S02, S05

EmptyState
  states    default (no projects)
  used on   S04, S08

ThemeToggle
  states    default
  a11y      toggles .dark on <html>
  used on   Navbar

Logo
  variants  wordmark, mark
  used on   Navbar, Footer

Empty state copy, labels, and headlines are written fresh (not taken from buildstack).