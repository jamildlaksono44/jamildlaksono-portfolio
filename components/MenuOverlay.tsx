'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface MenuOverlayProps {
  isOpen: boolean
  onClose: () => void
}

const navItems = [
  { number: '01', label: 'Home', href: '#home' },
  { number: '02', label: 'Selected Work', href: '#work' },
  { number: '03', label: 'About', href: '#about' },
  { number: '04', label: 'Services', href: '#services' },
  { number: '05', label: 'Contact', href: '#contact' },
]

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const handleNavClick = (href: string) => {
    onClose()
    // Small delay to let the menu close animation start
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[60] flex flex-col bg-background"
        >
          {/* Close Button */}
          <div className="flex h-16 items-center justify-end border-b border-border px-6 lg:px-12">
            <button
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center border border-border transition-opacity hover:opacity-60"
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex flex-1 flex-col lg:flex-row">
            {/* Navigation Links - Left Side */}
            <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:w-[60%] lg:px-12">
              <nav className="space-y-4 lg:space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  >
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="group flex items-baseline gap-4 text-left transition-opacity hover:opacity-60"
                    >
                      <span className="font-mono text-sm text-muted-foreground">/ {item.number}</span>
                      <span className="font-sans text-4xl lg:text-[6vw] leading-none">{item.label}</span>
                    </button>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Contact Info - Right Side */}
            <div className="flex flex-col justify-between border-t border-border px-6 py-8 lg:w-[40%] lg:border-l lg:border-t-0 lg:px-12 lg:py-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="space-y-6"
              >
                <p className="section-label">/ Get In Touch</p>
                <div className="space-y-3">
                  <a
                    href="mailto:hello@EMAIL.com"
                    className="block text-lg transition-opacity hover:opacity-60"
                  >
                    hello@EMAIL.com
                  </a>
                  <a
                    href="https://wa.me/62PHONE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg transition-opacity hover:opacity-60"
                  >
                    +62 PHONE NUMBER
                  </a>
                  <a
                    href="https://instagram.com/INSTAGRAM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg transition-opacity hover:opacity-60"
                  >
                    @INSTAGRAM
                  </a>
                  <a
                    href="https://linkedin.com/in/LINKEDIN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg transition-opacity hover:opacity-60"
                  >
                    linkedin.com/in/LINKEDIN
                  </a>
                </div>
              </motion.div>

              {/* Bottom Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="mt-8 flex flex-col gap-4 text-sm text-muted-foreground lg:flex-row lg:justify-between"
              >
                <p>&copy; 2026 Jamil D Laksono</p>
                <p>Made with focus. Built for results.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
