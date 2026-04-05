'use client'

import { motion } from 'framer-motion'

const imageLabels = [
  'Performance',
  'Branding',
  'Design',
  'Content',
  'Strategy',
  'Performance',
  'Branding',
  'Design',
  'Content',
  'Strategy',
]

export default function CTASection() {
  return (
    <section className="py-20 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-[1800px] px-6 lg:px-12">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between mb-16"
        >
          {/* Left - Label */}
          <div className="lg:w-1/4">
            <p className="section-label">/ Write a line</p>
          </div>

          {/* Center - Headline */}
          <div className="lg:w-2/4">
            <h2 className="headline-editorial text-4xl lg:text-[4vw]">
              <span className="block">{"Let's talk about"}</span>
              <span className="block text-muted-foreground">your project</span>
            </h2>
          </div>

          {/* Right - Button */}
          <div className="lg:w-1/4 lg:text-right">
            <a
              href="#contact"
              className="btn-brutalist inline-block font-serif text-lg"
            >
              Say Hello &rarr;
            </a>
          </div>
        </motion.div>

        {/* Image Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden border-y border-border py-8"
        >
          <div className="flex animate-marquee gap-6">
            {[...imageLabels, ...imageLabels].map((label, index) => (
              <div key={index} className="flex-shrink-0">
                {/* Image Placeholder */}
                <div 
                  className={`border border-border bg-foreground/5 flex items-center justify-center ${
                    index % 3 === 0 ? 'w-40 h-52' : index % 3 === 1 ? 'w-52 h-40' : 'w-44 h-44'
                  }`}
                >
                  <span className="font-mono text-xs text-muted-foreground">
                    [ image ]
                  </span>
                </div>
                {/* Label */}
                <p className="mt-2 text-center section-label">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
