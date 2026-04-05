'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SERVICE_MARQUEE_ITEMS,
  verticalMarqueeCellMinRem,
} from '@/lib/service-marquee-items'

const rotatingWords = [
  'digital marketing',
  'performance ads',
  'brand strategy',
  'content creation',
  'design',
  'copywriting',
]

function VerticalMarqueeStrip() {
  return (
    <div className="flex shrink-0 flex-col gap-y-2">
      {SERVICE_MARQUEE_ITEMS.map((item) => (
        <div
          key={item}
          className="flex w-full shrink-0 items-center justify-center px-1 py-2"
          style={{ minHeight: `${verticalMarqueeCellMinRem(item)}rem` }}
        >
          <span className="section-label inline-block whitespace-nowrap origin-center -rotate-90 text-[10px] tracking-[0.16em]">
            {item}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen pt-16">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1800px] flex-col lg:flex-row">
        {/* Left Column - Vertical Marquee */}
        <div className="hidden w-[15%] border-r border-border lg:block">
          <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-hidden">
            <div className="animate-marquee-vertical flex shrink-0 flex-col">
              <VerticalMarqueeStrip />
              <div aria-hidden className="shrink-0">
                <VerticalMarqueeStrip />
              </div>
            </div>
          </div>
        </div>

        {/* Center Column - Main Content */}
        <div className="flex flex-1 flex-col justify-center px-6 py-20 lg:w-[55%] lg:px-12 lg:py-0">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.6 }}
            className="section-label mb-8"
          >
            Freelance Digital Marketer &middot; Bandung, ID
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="headline-editorial text-[10vw] lg:text-[4.5vw] text-foreground mb-8"
          >
            <span className="block">Meet your living,</span>
            <span className="block">breathing one-man</span>
            <span className="block">digital marketing</span>
            <span className="block">department.</span>
          </motion.h1>

          {/* Text Rotator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 3.2 }}
            className="mb-8 h-12 overflow-hidden"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-xl lg:text-2xl text-foreground">{"Let's do"}</span>
              <div className="relative h-8 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="font-mono text-xl lg:text-2xl text-foreground inline-block"
                  >
                    {rotatingWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.4 }}
            className="max-w-md text-muted-foreground mb-10"
          >
            No bloated agencies. No 47-person email threads.
            <br />
            Just sharp strategy and clean execution — done right.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.6 }}
          >
            <a
              href="#contact"
              className="btn-brutalist text-lg"
            >
              {"Let's work together"} &rarr;
            </a>
          </motion.div>
        </div>

        {/* Right Column - Geometric Block */}
        <div className="relative flex items-center justify-center border-t border-border p-6 lg:w-[30%] lg:border-l lg:border-t-0 lg:p-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 3.0 }}
            className="relative aspect-[3/4] w-full max-w-sm lg:max-w-none lg:h-[70vh]"
          >
            {/* Geometric Pattern */}
            <div className="absolute inset-0 border border-border bg-foreground/5">
              {/* Diagonal Grid Lines */}
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <pattern
                    id="diagonal-lines"
                    patternUnits="userSpaceOnUse"
                    width="40"
                    height="40"
                    patternTransform="rotate(45)"
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="40"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-border"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
              </svg>
            </div>

            {/* Photo Placeholder Label */}
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-mono text-xs text-muted-foreground">
                [ photo placeholder ]
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Contact Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 3.8 }}
        className="border-t border-border px-6 py-4 lg:px-12"
      >
        <div className="mx-auto max-w-[1800px]">
          <p className="text-sm text-muted-foreground">
            <a href="tel:+62PHONE" className="transition-opacity hover:opacity-60">+62 PHONE</a>
            {' '}&middot;{' '}
            <a href="https://instagram.com/INSTAGRAM" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-60">@INSTAGRAM</a>
            {' '}&middot;{' '}
            <a href="mailto:hello@EMAIL.com" className="transition-opacity hover:opacity-60">hello@EMAIL.com</a>
          </p>
        </div>
      </motion.div>
    </section>
  )
}
