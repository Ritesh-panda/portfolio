import { type ReactNode } from 'react'

interface PageLayoutProps {
  children: ReactNode
}

/**
 * PageLayout
 * The single wrapper for every page's content.
 */
export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <main id="top" className="min-h-screen bg-bg-primary">
      {children}
    </main>
  )
}
