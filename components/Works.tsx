'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Project {
  number: string
  category: string
  title: string
  tags: string[]
  description: string
  metrics?: string
}

const projects: Project[] = [
  {
    number: '01',
    category: 'Performance Marketing',
    title: 'WBMS Studio — Meta Ads Campaign',
    tags: ['Meta Ads', 'CTWA', 'Lead Gen'],
    description: 'Full-funnel Meta Ads campaign for a mat pilates and barre studio in Yogyakarta. From cold audience targeting to warm retargeting flows, optimized for cost-per-registration.',
    metrics: 'CPR ↓42% · ROAS 3.8x · 200+ leads/month',
  },
  {
    number: '02',
    category: 'Performance Marketing',
    title: 'hellofriday — Paid Social',
    tags: ['Meta Ads', 'CAPI', 'ROAS'],
    description: 'Multi-objective campaign strategy covering cold and warm funnel stages. Built audience segmentation, ad creative briefs, and budget allocation across campaign objectives.',
    metrics: 'CTR 2.4% · CPM optimized · Rp XX budget managed',
  },
  {
    number: '03',
    category: 'Brand Strategy',
    title: 'Salon Victoria Julio — Digital Presence',
    tags: ['Brand Strategy', 'Meta Ads', 'Copywriting'],
    description: 'End-to-end digital marketing for a Bandung-based salon. Covered Meta Ads copywriting, FAQ content, and social media positioning.',
  },
  {
    number: '04',
    category: 'Copywriting',
    title: 'e-Meterai POSDIGI — Go-To-Market Strategy',
    tags: ['Strategy', 'SEO', 'AEO', 'Google Ads'],
    description: 'Comprehensive research and strategy document covering SEO, AEO, Google Ads, Meta Ads, and marketplace channels. Structured across two engagement models.',
  },
  {
    number: '05',
    category: 'Design & Creative',
    title: 'WBMS — Landing Page Reconstruction',
    tags: ['Frontend', 'Landing Page', 'Conversion'],
    description: 'Full landing page rebuild for a pilates and barre studio. Focus on conversion flow, booking integration with Rezerv platform, and brand-consistent visual design.',
  },
  {
    number: '06',
    category: 'Strategy',
    title: '[Placeholder Project]',
    tags: ['Digital Strategy', 'Research'],
    description: 'Placeholder — replace with your next case study.',
  },
]

export default function Works() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="work" className="py-20 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-6">/ 02 Selected Work</p>
          <h2 className="headline-editorial text-4xl lg:text-6xl mb-6">
            <span className="block">Results over aesthetics.</span>
            <span className="block text-muted-foreground">(Though we do both pretty well.)</span>
          </h2>
          <p className="text-muted-foreground max-w-lg">
            A curated look at what I&apos;ve built, run, and shipped.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="border-t border-border">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="accordion-row relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              {/* Main Row */}
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-1 flex-col gap-2 lg:flex-row lg:items-center lg:gap-8">
                  <span className="font-mono text-sm text-muted-foreground w-8">
                    {project.number}
                  </span>
                  <span className="section-label">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-xl lg:text-2xl">
                    {project.title}
                  </h3>
                </div>
                <button className="self-start text-sm text-muted-foreground transition-opacity hover:opacity-100 lg:self-center">
                  {expandedIndex === index ? 'Close ×' : 'View →'}
                </button>
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
                    <div className="pt-6 lg:pl-16">
                      <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
                        <div className="flex-1">
                          <p className="text-foreground mb-4">
                            {project.description}
                          </p>
                          {project.metrics && (
                            <p className="font-mono text-sm text-muted-foreground">
                              {project.metrics}
                            </p>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2 lg:w-48">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="border border-border px-3 py-1 text-xs uppercase tracking-wider"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hover Preview (Desktop only) */}
              <AnimatePresence>
                {hoveredIndex === index && expandedIndex !== index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="pointer-events-none absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 lg:block"
                  >
                    <div className="h-32 w-48 border border-border bg-surface">
                      <div className="flex h-full w-full items-center justify-center">
                        <span className="font-mono text-xs text-muted-foreground">
                          [ preview ]
                        </span>
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
