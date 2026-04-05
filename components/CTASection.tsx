'use client'

import { motion } from 'framer-motion'

const stripLabels = ['Performance', 'Branding', 'Design', 'Content', 'Strategy'] as const

function ImageMarqueeStrip() {
  return (
    <div className="flex shrink-0 gap-6">
      {stripLabels.map((label) => (
        <div key={label} className="flex w-max shrink-0 flex-col items-center">
          <div className="flex aspect-square w-40 shrink-0 items-center justify-center border border-border bg-foreground/5">
            <span className="font-mono text-xs text-muted-foreground">[ image ]</span>
          </div>
          <p className="mt-2 text-center section-label">{label}</p>
        </div>
      ))}
    </div>
  )
}

export default function CTASection() {
  return (
    <section className="border-t border-border py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-6 lg:px-12">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="lg:w-1/4">
            <p className="section-label">/ Write a line</p>
          </div>

          <div className="lg:w-2/4">
            <h2 className="headline-editorial text-4xl lg:text-[4vw]">
              <span className="block">{"Let's talk about"}</span>
              <span className="block text-muted-foreground">your project</span>
            </h2>
          </div>

          <div className="lg:w-1/4 lg:text-right">
            <a href="#contact" className="btn-brutalist text-lg">
              Say Hello &rarr;
            </a>
          </div>
        </motion.div>

        {/* Image Marquee — two identical strips so translateX(-50%) loops seamlessly */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden border-y border-border py-8"
        >
          <div className="flex min-w-max animate-marquee-cta">
            <ImageMarqueeStrip />
            <div aria-hidden className="shrink-0">
              <ImageMarqueeStrip />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
