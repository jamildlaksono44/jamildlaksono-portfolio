'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 100
    const interval = duration / steps

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 99) {
          clearInterval(timer)
          setTimeout(() => {
            setIsVisible(false)
            setTimeout(onComplete, 500)
          }, 200)
          return 99
        }
        return prev + 1
      })
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          {/* Counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <span className="font-sans text-[20vw] leading-none text-foreground">
              {count.toString().padStart(2, '0')}
            </span>
          </motion.div>

          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 uppercase tracking-[0.3em] text-xs text-muted-foreground"
          >
            Loading
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
