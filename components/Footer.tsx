'use client'

import { motion } from 'framer-motion'

const discoverLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Selected Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { number: '[01]', label: 'Instagram', href: 'https://instagram.com/INSTAGRAM' },
  { number: '[02]', label: 'LinkedIn', href: 'https://linkedin.com/in/LINKEDIN' },
  { number: '[03]', label: 'Behance', href: 'https://behance.net/BEHANCE' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1800px] px-6 py-16 lg:px-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-10 lg:grid-cols-3"
        >
          {/* Discover */}
          <div>
            <p className="section-label mb-6">/ Discover</p>
            <nav className="space-y-3">
              {discoverLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-foreground transition-opacity hover:opacity-60"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Info */}
          <div>
            <p className="section-label mb-6">/ Info</p>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-foreground transition-opacity hover:opacity-60"
              >
                Download CV
              </a>
              <a
                href="https://linkedin.com/in/LINKEDIN"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-foreground transition-opacity hover:opacity-60"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Ecosystem */}
          <div>
            <p className="section-label mb-6">/ Ecosystem</p>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground transition-opacity hover:opacity-60"
                >
                  <span className="font-mono text-xs text-muted-foreground">{link.number}</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1800px] px-6 py-8 lg:px-12">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <p className="text-sm text-muted-foreground">Jamil D Laksono</p>
            <p className="text-sm text-muted-foreground">
              &copy; 2026 &middot; All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
