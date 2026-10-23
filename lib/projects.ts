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
    slug: 'shadhil-builders-crm',
    name: 'Real-estate CRM for Shadhil Builders',
    category: 'Custom software',
    tagline: 'One workspace for leads, inventory, bookings and receipts.',
    description:
      'Shadhil Builders ran sales and bookings across spreadsheets and chat threads. We built a CRM that keeps the sales floor in one place: leads, unit inventory, payment schedules, documents and role-based access. It runs on a Next.js frontend and a NestJS API over PostgreSQL, with row-level security enforced in the database.',
    features: [
      'Lead pipeline',
      'Unit inventory',
      'Booking management',
      'Payment schedules',
      'Document vault',
      'Role-based access',
    ],
    stack: ['Next.js 16', 'TypeScript', 'NestJS', 'Prisma 7', 'PostgreSQL 16', 'Tailwind CSS'],
    accentColor: '#4f46e5',
    gradient: 'from-indigo-600/20 to-cyan-600/10',
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
