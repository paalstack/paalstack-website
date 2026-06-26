import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'PaalStack — AI-First Software Engineering',
  description:
    'PaalStack is an AI-first software engineering company building intelligent applications, automation platforms, and scalable SaaS products with Next.js, TypeScript, and Supabase.',
  keywords: ['AI-first software engineering', 'AI agents', 'software engineering company', 'SaaS development', 'automation', 'Next.js', 'TypeScript', 'Supabase'],
  authors: [{ name: 'PaalStack' }],
  creator: 'PaalStack',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://paalstack.com',
    siteName: 'PaalStack',
    title: 'PaalStack — AI-First Software Engineering',
    description:
      'AI-first software engineering company building intelligent applications, automation platforms, and scalable SaaS products.',
    images: [{ url: 'https://paalstack.com/opengraph-image', width: 1200, height: 630, alt: 'PaalStack' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PaalStack — AI-First Software Engineering',
    description: 'AI-first software engineering company building intelligent applications, automation, and SaaS products.',
    images: ['https://paalstack.com/opengraph-image'],
    creator: '@paalstack',
  },
  robots: { index: true, follow: true },
  metadataBase: new URL('https://paalstack.com'),
  icons: [
    // SVG favicon — supports light/dark via media query in browsers that support it
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/assets/favicon/favicon.svg',
    },
    // PNG fallbacks — dark scheme
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/assets/app-icons/png/app-icon-dark-16.png',
      media: '(prefers-color-scheme: dark)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/assets/app-icons/png/app-icon-dark-32.png',
      media: '(prefers-color-scheme: dark)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '64x64',
      url: '/assets/app-icons/png/app-icon-dark-64.png',
      media: '(prefers-color-scheme: dark)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '256x256',
      url: '/assets/app-icons/png/app-icon-dark-256.png',
      media: '(prefers-color-scheme: dark)',
    },
    // PNG fallbacks — light scheme
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/assets/app-icons/png/app-icon-light-16.png',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/assets/app-icons/png/app-icon-light-32.png',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '64x64',
      url: '/assets/app-icons/png/app-icon-light-64.png',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '256x256',
      url: '/assets/app-icons/png/app-icon-light-256.png',
      media: '(prefers-color-scheme: light)',
    },
    // Apple touch icon (180×180, no media query — iOS always uses light bg)
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/assets/app-icons/png/app-icon-light-180.png',
    },
    // ICO fallback for legacy browsers
    {
      rel: 'icon',
      url: '/assets/favicon/favicon.ico',
    },
  ],
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PaalStack',
  url: 'https://paalstack.com',
  logo: 'https://paalstack.com/logo.png',
  description:
    'AI-first software engineering company building intelligent applications, automation platforms, and scalable SaaS products.',
  email: 'hello@paalstack.com',
  sameAs: ['https://github.com/paalstack', 'https://twitter.com/paalstack'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(inter.variable, spaceGrotesk.variable, inter.className)} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
