'use client'

import { motion } from 'framer-motion'

interface HorizontalMarqueeProps {
  items: string[]
  className?: string
}

export default function HorizontalMarquee({ items, className = '' }: HorizontalMarqueeProps) {
  const content = items.join(' / ') + ' / '
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`overflow-hidden border-y border-border py-4 ${className}`}
    >
      <div className="flex whitespace-nowrap">
        <div className="animate-marquee flex">
          <span className="uppercase tracking-[0.15em] text-sm lg:text-base px-4">
            {content}
          </span>
          <span className="uppercase tracking-[0.15em] text-sm lg:text-base px-4">
            {content}
          </span>
          <span className="uppercase tracking-[0.15em] text-sm lg:text-base px-4">
            {content}
          </span>
          <span className="uppercase tracking-[0.15em] text-sm lg:text-base px-4">
            {content}
          </span>
        </div>
      </div>
    </motion.div>
  )
}
