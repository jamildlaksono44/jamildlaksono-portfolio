'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Service {
  number: string
  title: string
  subtags: string[]
  description: string
}

const services: Service[] = [
  {
    number: '01',
    title: 'Performance Marketing',
    subtags: ['Meta Ads', 'Google Ads', 'CTWA', 'Retargeting', 'Budget Planning'],
    description: "Meta Ads, Google Ads, and everything in between. I don't just run ads — I make them work. From audience architecture to creative briefs to post-campaign analysis.",
  },
  {
    number: '02',
    title: 'Brand Strategy',
    subtags: ['Positioning', 'Messaging', 'Visual Identity', 'Rebranding'],
    description: "Your brand isn't your logo. I'll help you figure out what it actually is — then build the language and visual system around it.",
  },
  {
    number: '03',
    title: 'Design & Creative',
    subtags: ['Landing Pages', 'Ad Creatives', 'Decks', 'UI'],
    description: "Landing pages, visuals, decks. Built to convert, not just look pretty. Every pixel has a reason to be there.",
  },
  {
    number: '04',
    title: 'Content & Copywriting',
    subtags: ['Ad Copy', 'Social Media', 'Email', 'FAQ', 'Long-form'],
    description: "Words that sell without sounding like they're trying to. From scroll-stopping ad copy to long-form strategy documents — written for humans, optimized for results.",
  },
]

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section id="services" className="py-20 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-[1800px] px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-6">/ 04 Services</p>
          <h2 className="headline-editorial text-4xl lg:text-6xl mb-6">
            <span className="block">Full-stack digital marketing.</span>
            <span className="block text-muted-foreground">One person. Zero excuses.</span>
          </h2>
          <p className="text-muted-foreground max-w-lg">
            From the first impression to the final conversion — I handle the whole game.
          </p>
        </motion.div>

        {/* Services Accordion */}
        <div className="border-t border-border">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="accordion-row"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              {/* Main Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 lg:gap-8">
                  <span className="font-mono text-sm text-muted-foreground">
                    {service.number}
                  </span>
                  <span className="text-muted-foreground">/</span>
                  <h3 className="font-serif text-xl lg:text-3xl">
                    {service.title}
                  </h3>
                </div>
                <motion.span
                  animate={{ rotate: expandedIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl text-muted-foreground"
                >
                  +
                </motion.span>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-8 pt-6 lg:flex-row lg:gap-16">
                      {/* Left - Description */}
                      <div className="flex-1 lg:pl-16">
                        {/* Sub-tags */}
                        <div className="mb-4 flex flex-wrap gap-2">
                          {service.subtags.map((tag) => (
                            <span
                              key={tag}
                              className="border border-border px-3 py-1 text-xs uppercase tracking-wider"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Right - Image Placeholder */}
                      <div className="lg:w-80">
                        <div className="aspect-[4/3] border border-border bg-surface">
                          <div className="flex h-full w-full items-center justify-center">
                            <span className="font-mono text-xs text-muted-foreground">
                              [ image placeholder ]
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
