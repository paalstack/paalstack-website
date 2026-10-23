import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Terms | Paalstack Studio',
  description: 'Terms for using the Paalstack Studio website.',
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="px-6 pb-24 pt-32 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Terms</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: 23 October 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/80">
            <section>
              <h2 className="text-lg font-semibold text-foreground">Using this site</h2>
              <p className="mt-2">
                The content here is for general information about Paalstack Studio. It is not a quote,
                a contract or a guarantee of a particular result.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Project work</h2>
              <p className="mt-2">
                Client work is governed by a written scope and agreement signed before the work starts.
                This page does not replace that agreement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Intellectual property</h2>
              <p className="mt-2">
                The text, layout and code of this site belong to Paalstack Studio. Case-study details are
                published with the client&apos;s permission. You may link to the site, but do not republish
                it as your own.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">External links</h2>
              <p className="mt-2">
                Links to WhatsApp, Calendly, GitHub and other services go to sites we do not control. Their
                terms apply when you use them.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Liability</h2>
              <p className="mt-2">
                We keep the site accurate where we can, but we do not promise that it is free of errors or
                always available. We are not liable for decisions made from reading it alone.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Governing law</h2>
              <p className="mt-2">
                These terms are governed by the laws of India. Disputes belong to the courts in Chennai,
                Tamil Nadu.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">Contact</h2>
              <p className="mt-2">
                Questions about these terms can go to{' '}
                <a className="text-accent hover:underline" href="mailto:hello@paalstack.com">
                  hello@paalstack.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}