import { type ReactNode } from 'react'
import FluidCursorBackground from '../common/FluidCursorBackground'

interface PageLayoutProps {
  children: ReactNode
}

/**
 * PageLayout
 * Global wrapper containing the interactive fluid holographic cursor background and page content.
 */
export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <main id="top" className="min-h-screen bg-bg-primary relative overflow-x-hidden">
      {/* Interactive Holographic Pastel Fluid Canvas */}
      <FluidCursorBackground />

      {/* Primary Page Content */}
      <div className="relative z-10">
        {children}
      </div>
    </main>
  )
}
