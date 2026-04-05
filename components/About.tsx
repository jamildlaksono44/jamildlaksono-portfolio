'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

interface ExperienceItem {
  year: string
  company: string
  role: string
  description?: string
}

interface ResumeSection {
  number: string
  title: string
  items: ExperienceItem[] | string[]
}

const stats = [
  { value: 15, suffix: '+', label: 'Happy clients' },
  { value: 3, suffix: '+', label: 'Years active' },
  { value: 10, suffix: '+', label: 'Industries served' },
  { value: 100, suffix: '%', label: 'Remote-friendly' },
]

const resumeSections: ResumeSection[] = [
  {
    number: '01',
    title: 'Experience',
    items: [
      { year: '2024–Now', company: 'Freelance Digital Marketing Consultant', role: 'Bandung, ID', description: 'Full-stack digital marketing services including performance marketing, brand strategy, and creative design for various clients.' },
      { year: '2023–2024', company: '[COMPANY NAME]', role: '[ROLE]', description: 'Add your previous role description here.' },
      { year: '2022–2023', company: '[COMPANY NAME]', role: '[ROLE]', description: 'Add your previous role description here.' },
    ],
  },
  {
    number: '02',
    title: 'Education',
    items: [
      { year: '2018–2022', company: 'S1 [MAJOR]', role: '[UNIVERSITY NAME]', description: 'Add details about your education here.' },
    ],
  },
  {
    number: '03',
    title: 'Everyday Toolbox',
    items: [
      'Meta Ads Manager',
      'Google Ads',
      'GA4',
      'Meta Business Suite',
      'Canva',
      'Figma',
      'Notion',
      'Rezerv',
      'WhatsApp API',
    ],
  },
]

const marqueeItems = [
  'Performance Marketing',
  'Brand Strategy',
  'Design',
  'Copywriting',
  'Content Creation',
  'Digital Marketing',
]

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 1500
      const steps = 60
      const increment = end / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, end])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function About() {
  const [expandedSection, setExpandedSection] = useState<number | null>(0)

  return (
    <section id="about" className="py-20 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-[1800px] px-6 lg:px-12">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label mb-12"
        >
          / 03 About
        </motion.p>

        {/* Part A - Hero Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="headline-editorial text-4xl lg:text-[5vw] mb-8">
            <span className="block">Performance Marketer /</span>
            <span className="block">Brand Strategist /</span>
            <span className="block text-muted-foreground">Digital Consultant</span>
          </h2>
          <p className="text-lg text-muted-foreground italic">
            Hey — I&apos;m Jamil. I&apos;m passionate about building brands that grow, campaigns that convert, and strategies that actually make sense.
          </p>
        </motion.div>

        {/* Horizontal Marquee */}
        <div className="mb-16 overflow-hidden border-y border-border py-4">
          <div className="flex whitespace-nowrap">
            <div className="animate-marquee flex">
              {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
                <span key={index} className="px-4 text-sm uppercase tracking-[0.15em]">
                  {item} &middot;
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Part B - Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 grid grid-cols-2 border border-border lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center py-8 lg:py-12 ${
                index < stats.length - 1 ? 'border-r border-border' : ''
              } ${index < 2 ? 'border-b border-border lg:border-b-0' : ''}`}
            >
              <span className="font-sans text-4xl lg:text-5xl mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </span>
              <span className="section-label text-center">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Part C - Bio Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col gap-12 lg:flex-row lg:gap-20"
        >
          {/* Left - Pull Quote */}
          <div className="lg:w-2/5">
            <blockquote className="font-sans text-3xl lg:text-4xl leading-tight">
              &ldquo;I&apos;ve been doing this long enough to know what actually works.&rdquo;
            </blockquote>
          </div>

          {/* Right - Body Text */}
          <div className="lg:w-3/5 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m Jamil — a freelance digital marketer based in Bandung, Indonesia.
            </p>
            <p>
              I work across the full stack: strategy, paid media, branding, design, and copy. My clients range from fitness studios to fintech brands — and I treat each one like it&apos;s the only one on my plate.
            </p>
            <p>
              I don&apos;t believe in one-size-fits-all. Every brief gets a custom approach, every result gets scrutinized, and every budget gets respected.
            </p>
            <p>
              When I&apos;m not deep in a campaign dashboard, I&apos;m probably thinking about the next big idea — or building it.
            </p>
          </div>
        </motion.div>

        {/* Part D - Resume */}
        <div className="border-t border-border">
          {resumeSections.map((section, sectionIndex) => (
            <motion.div
              key={section.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              className="accordion-row"
              onClick={() => setExpandedSection(expandedSection === sectionIndex ? null : sectionIndex)}
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 lg:gap-8">
                  <span className="font-mono text-sm text-muted-foreground">
                    {section.number}
                  </span>
                  <span className="text-muted-foreground">/</span>
                  <h3 className="font-sans text-xl lg:text-2xl">
                    {section.title}
                  </h3>
                </div>
                <motion.span
                  animate={{ rotate: expandedSection === sectionIndex ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl text-muted-foreground"
                >
                  +
                </motion.span>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedSection === sectionIndex && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 lg:pl-16">
                      {section.title === 'Everyday Toolbox' ? (
                        // Tools Grid
                        <div className="flex flex-wrap gap-2">
                          {(section.items as string[]).map((tool) => (
                            <span
                              key={tool}
                              className="border border-border px-4 py-2 text-sm"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      ) : (
                        // Experience/Education List
                        <div className="space-y-4">
                          {(section.items as ExperienceItem[]).map((item, index) => (
                            <div
                              key={index}
                              className="flex flex-col gap-1 border-b border-border/50 pb-4 last:border-0"
                            >
                              <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-4">
                                <span className="font-mono text-sm text-muted-foreground w-24">
                                  {item.year}
                                </span>
                                <span className="font-sans text-lg">
                                  {item.company}
                                </span>
                                <span className="text-muted-foreground">
                                  {item.role}
                                </span>
                              </div>
                              {item.description && (
                                <p className="text-sm text-muted-foreground lg:pl-28">
                                  {item.description}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
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
