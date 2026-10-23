import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Paalstack Studio | Websites, automation and custom software',
  description:
    'Paalstack Studio builds websites, AI automation and custom software for growing businesses. Based in Chennai, working with clients across India.',
  keywords: ['Paalstack', 'custom software Chennai', 'Next.js development', 'AI automation', 'real estate CRM', 'buyer portal', 'web development India'],
  authors: [{ name: 'Paalstack' }],
  creator: 'Paalstack',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://paalstack.com',
    siteName: 'Paalstack',
    title: 'Paalstack Studio | Websites, automation and custom software',
    description:
      'Websites, AI automation and custom software for growing businesses. One team from first sketch to production.',
    images: [{ url: 'https://paalstack.com/opengraph-image', width: 1200, height: 630, alt: 'Paalstack' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paalstack Studio | Websites, automation and custom software',
    description: 'Websites, AI automation and custom software for growing businesses.',
    images: ['https://paalstack.com/opengraph-image'],
    creator: '@paalstack',
  },
  robots: { index: true, follow: true },
  metadataBase: new URL('https://paalstack.com'),
  icons: [
    // SVG favicon - supports light/dark via media query in browsers that support it
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/assets/favicon/favicon.svg',
    },
    // PNG fallbacks - dark scheme
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
    // PNG fallbacks - light scheme
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
    // Apple touch icon (180×180, no media query - iOS always uses light bg)
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
  name: 'Paalstack',
  url: 'https://paalstack.com',
  logo: 'https://paalstack.com/logo.png',
  description:
    'Paalstack Studio builds websites, AI automation and custom software for growing businesses. Based in Chennai, working with clients across India.',
  email: 'hello@paalstack.com',
  sameAs: ['https://github.com/paalstack', 'https://twitter.com/paalstack'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(inter.variable, inter.className)} suppressHydrationWarning>
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
