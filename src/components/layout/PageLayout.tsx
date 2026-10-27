import { type ReactNode } from 'react'

interface PageLayoutProps {
  children: ReactNode
}

/**
 * PageLayout
 * Minimal Apple HIG wrapper for every page.
 */
export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <main id="top" className="min-h-screen bg-bg-primary text-fg-primary relative overflow-x-hidden selection:bg-brand/20 selection:text-brand">
      {children}
    </main>
  )
}
