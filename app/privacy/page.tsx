import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Privacy | Paalstack Studio',
  description: 'How Paalstack Studio handles information sent through this website.',
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="px-6 pb-24 pt-32 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Privacy</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: 23 October 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/80">
            <section>
              <h2 className="text-lg font-semibold text-foreground">What we collect</h2>
              <p className="mt-2">
                This site has no accounts and no contact form. If you email us, message us on WhatsApp or
                book a call, we receive the details you choose to send: your name, contact information and
                whatever you write about the project.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">How we use it</h2>
              <p className="mt-2">
                We use those details to reply, scope the work and keep a record of the project. We do not
                sell your information or add you to a marketing list without asking.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Storage and retention</h2>
              <p className="mt-2">
                Project correspondence stays in our email and chat tools for as long as the working
                relationship needs it. If you want us to delete it, email{' '}
                <a className="text-accent hover:underline" href="mailto:hello@paalstack.com">
                  hello@paalstack.com
                </a>{' '}
                and we will remove what we are not required to keep.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Cookies and analytics</h2>
              <p className="mt-2">
                The site stores your light or dark theme choice in your browser. We do not run
                advertising trackers. If we add privacy-friendly analytics later, this page will say so.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Third-party services</h2>
              <p className="mt-2">
                WhatsApp and Calendly are external services with their own privacy terms. Opening those
                links takes you to their sites. Hosting and email providers process data on our behalf.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Contact</h2>
              <p className="mt-2">
                Questions about this page can go to{' '}
                <a className="text-accent hover:underline" href="mailto:hello@paalstack.com">
                  hello@paalstack.com
                </a>
                . Paalstack Studio is based in Chennai, India.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}