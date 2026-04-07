'use client'

import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { horizontalMarqueePaddingRem } from '@/lib/service-marquee-items'

interface HorizontalMarqueeProps {
  items: string[]
  className?: string
}

const labelClass =
  'uppercase tracking-[0.15em] text-sm lg:text-base text-foreground'

function MarqueeStrip({ items }: { items: string[] }) {
  return (
    <>
      {items.map((item, i) => (
        <Fragment key={`${item}-${i}`}>
          <span
            className={`inline-block ${labelClass}`}
            style={{
              paddingInline: `${horizontalMarqueePaddingRem(item)}rem`,
            }}
          >
            {item}
          </span>
          <span
            className="inline-block text-sm lg:text-base text-muted-foreground"
            aria-hidden
          >
            {' '}
            /{' '}
          </span>
        </Fragment>
      ))}
    </>
  )
}

export default function HorizontalMarquee({ items, className = '' }: HorizontalMarqueeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`hidden md:block overflow-hidden border-y border-border py-4 ${className}`}
    >
      <div className="flex w-full overflow-hidden">
        <div className="animate-marquee flex min-w-max">
          <div className="flex items-baseline">
            <MarqueeStrip items={items} />
          </div>
          <div className="flex items-baseline" aria-hidden>
            <MarqueeStrip items={items} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
