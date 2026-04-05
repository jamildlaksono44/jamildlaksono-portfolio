'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-[1800px] px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-6">/ 05 Contact</p>
          <h2 className="headline-editorial text-4xl lg:text-6xl mb-6">
            {"Let's make it happen."}
          </h2>
          <p className="text-muted-foreground max-w-lg">
            Have a brief ready or just a vague idea — either works. Good things start with a conversation.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:w-[55%]"
          >
            {isSubmitted ? (
              <div className="flex h-full items-center justify-center border border-border p-12">
                <p className="font-sans text-xl text-center">
                  Done! I&apos;ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    className="w-full border border-border bg-transparent px-4 py-4 font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    className="w-full border border-border bg-transparent px-4 py-4 font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    className="w-full border border-border bg-transparent px-4 py-4 font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-brutalist w-full text-lg disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send it →'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right - Direct Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-[45%] space-y-10"
          >
            {/* Direct Contact */}
            <div>
              <p className="section-label mb-4">/ Or reach out directly</p>
              <div className="space-y-3">
                <a
                  href="https://wa.me/62PHONE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border-b border-border pb-3 transition-opacity hover:opacity-60"
                >
                  <span className="text-lg">WhatsApp</span>
                  <span className="text-muted-foreground">&rarr;</span>
                </a>
                <a
                  href="mailto:hello@EMAIL.com"
                  className="flex items-center justify-between border-b border-border pb-3 transition-opacity hover:opacity-60"
                >
                  <span className="text-lg">Email</span>
                  <span className="text-muted-foreground">&rarr;</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="section-label mb-4">/ Connect</p>
              <div className="space-y-3">
                <a
                  href="https://instagram.com/INSTAGRAM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 border-b border-border pb-3 transition-opacity hover:opacity-60"
                >
                  <span className="font-mono text-sm text-muted-foreground">[01]</span>
                  <span className="text-lg">Instagram</span>
                </a>
                <a
                  href="https://linkedin.com/in/LINKEDIN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 border-b border-border pb-3 transition-opacity hover:opacity-60"
                >
                  <span className="font-mono text-sm text-muted-foreground">[02]</span>
                  <span className="text-lg">LinkedIn</span>
                </a>
                <a
                  href="https://behance.net/BEHANCE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 border-b border-border pb-3 transition-opacity hover:opacity-60"
                >
                  <span className="font-mono text-sm text-muted-foreground">[03]</span>
                  <span className="text-lg">Behance</span>
                </a>
              </div>
            </div>

            {/* Location */}
            <div>
              <p className="section-label mb-4">/ Location</p>
              <p className="text-lg mb-2">Bandung, West Java, Indonesia</p>
              <p className="text-muted-foreground">Available for remote &amp; on-site projects</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
