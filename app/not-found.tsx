import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { buttonVariants } from '@/components/ui/button'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] items-center px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">404</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">That page is not here.</h1>
          <p className="mt-4 text-muted-foreground">
            The link may be old, or the page may have moved. Start from the home page or look at the work.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/" className={buttonVariants({ size: 'lg' })}>
              Back to home
            </Link>
            <Link href="/projects" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
              See the work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}