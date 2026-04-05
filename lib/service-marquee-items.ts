/** Shared list: vertical rail (Hero) + horizontal strip under hero */
export const SERVICE_MARQUEE_ITEMS = [
  'Strategy & Planning',
  'Performance Marketing',
  'SEO',
  'AEO',
  'Content Marketing',
  'Social Media Management',
  'Copywriting',
  'CRM',
  'Marketing Automation & Funnel',
  'Analytics & Reporting',
  'Brand Strategy',
  'Design & Creative',
  'Landing Page & Web',
] as const

/**
 * Rotated -90°: cell block-size must cover the text’s inline-size (pre-rotation width).
 * Uppercase + wide tracking at ~10px needs a higher rem/char than a naive count.
 */
export function verticalMarqueeCellMinRem(label: string): number {
  const n = label.length
  const base = 4.5
  const perChar = 0.52
  const gapBuffer = 0.75
  const raw = Math.max(5.75, Math.min(26, base + n * perChar + gapBuffer))
  return Math.round(raw * 100) / 100
}

/** Horizontal strip: tighter padding for short labels, more for long */
export function horizontalMarqueePaddingRem(label: string): number {
  return Math.max(0.45, Math.min(1.35, 0.28 + label.length * 0.038))
}
