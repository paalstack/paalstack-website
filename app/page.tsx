import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { Stats } from '@/components/sections/stats'
import { Projects } from '@/components/sections/projects'
import { Process } from '@/components/sections/process'
import { Services } from '@/components/sections/services'
import { Technology } from '@/components/sections/technology'
import { WhyPaalStack } from '@/components/sections/why-paalstack'
import { Testimonials } from '@/components/sections/testimonials'
import { FAQ } from '@/components/sections/faq'
import { FinalCTA } from '@/components/sections/final-cta'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <Services />
        <Process />
        <Technology />
        <WhyPaalStack />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
