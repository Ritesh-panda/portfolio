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
    <main id="top" className="min-h-screen bg-gradient-to-br from-[#FDF0F5] via-[#F9EBF6] to-[#F5EBF9] relative overflow-x-hidden text-fg-primary">
      {/* Interactive WebGL Water Fluid Canvas */}
      <FluidCursorBackground />

      {/* Primary Page Content */}
      <div className="relative z-10 pointer-events-auto">
        {children}
      </div>
    </main>
  )
}
