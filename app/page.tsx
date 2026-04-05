'use client'

import { useState } from 'react'
import Preloader from '@/components/Preloader'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HorizontalMarquee from '@/components/HorizontalMarquee'
import Works from '@/components/Works'
import Services from '@/components/Services'
import About from '@/components/About'
import CTASection from '@/components/CTASection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { useDarkMode } from '@/hooks/useDarkMode'

const marqueeItems = [
  'Performance Marketing',
  'Brand Strategy',
  'Design & Creative',
  'Copywriting',
  'Content Creation',
  'Digital Marketing',
]

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const { isDark, toggleTheme } = useDarkMode()

  return (
    <>
      {/* Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Main Content */}
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        
        <main>
          <Hero />
          <HorizontalMarquee items={marqueeItems} />
          <Works />
          <About />
          <Services />
          <CTASection />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  )
}
