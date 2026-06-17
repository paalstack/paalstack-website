export interface Project {
  slug: string
  name: string
  category: string
  tagline: string
  description: string
  features: string[]
  stack: string[]
  accentColor: string
  gradient: string
}

export const projects: Project[] = [
  {
    slug: 'paalstack-nexus',
    name: 'PaalStack Nexus',
    category: 'AI Operations Platform',
    tagline: 'The operating system for modern teams.',
    description:
      'An AI-powered operations hub that centralizes company knowledge, workflows, documentation, task management, and business processes.',
    features: ['AI Knowledge Assistant', 'Document Search', 'Workflow Builder', 'Team Workspace', 'Task Management', 'Analytics Dashboard'],
    stack: ['Next.js', 'TypeScript', 'OpenRouter', 'Supabase', 'Tailwind CSS', 'shadcn/ui'],
    accentColor: '#2563eb',
    gradient: 'from-blue-600/20 to-cyan-600/10',
  },
  {
    slug: 'paalstack-orbit',
    name: 'PaalStack Orbit',
    category: 'CRM & Automation Platform',
    tagline: 'Automated customer operations for growing businesses.',
    description:
      'A modern CRM and workflow automation platform helping businesses manage leads, automate follow-ups, and streamline customer operations.',
    features: ['Lead Management', 'Workflow Automation', 'Email Automation', 'Activity Tracking', 'Team Collaboration', 'Reporting Dashboard'],
    stack: ['Next.js', 'TypeScript', 'OpenRouter', 'Supabase', 'Tailwind CSS', 'shadcn/ui'],
    accentColor: '#6366f1',
    gradient: 'from-indigo-600/20 to-purple-600/10',
  },
  {
    slug: 'paalstack-forge',
    name: 'PaalStack Forge',
    category: 'SaaS Starter Platform',
    tagline: 'Launch SaaS products faster.',
    description:
      'A production-ready SaaS foundation with authentication, subscriptions, user management, dashboards, and AI integrations.',
    features: ['Authentication', 'User Management', 'Billing', 'Dashboard', 'AI Features', 'Admin Panel'],
    stack: ['Next.js', 'TypeScript', 'OpenRouter', 'Supabase', 'Tailwind CSS', 'shadcn/ui'],
    accentColor: '#06b6d4',
    gradient: 'from-cyan-600/20 to-teal-600/10',
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
