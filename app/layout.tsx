import type { Metadata, Viewport } from 'next'
import { DM_Sans, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jamil D Laksono — Freelance Digital Marketer',
  description: 'Performance marketing, brand strategy, design & copywriting. Based in Bandung, Indonesia. Your one-man digital marketing department.',
  keywords: ['digital marketing', 'performance marketing', 'brand strategy', 'freelance', 'Bandung', 'Indonesia', 'Meta Ads', 'Google Ads'],
  authors: [{ name: 'Jamil D Laksono' }],
  creator: 'Jamil D Laksono',
  openGraph: {
    title: 'Jamil D Laksono — Freelance Digital Marketer',
    description: 'Performance marketing, brand strategy, design & copywriting. Based in Bandung, Indonesia.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jamil D Laksono — Freelance Digital Marketer',
    description: 'Performance marketing, brand strategy, design & copywriting. Based in Bandung, Indonesia.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f0' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} ${dmSans.variable} font-mono antialiased`}
      >
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
