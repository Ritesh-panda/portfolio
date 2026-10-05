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
    <main id="top" className="min-h-screen bg-gradient-to-br from-[#FCF7FA] via-[#FAF4F8] to-[#F7F2F9] relative overflow-x-hidden text-fg-primary">
      {/* Interactive WebGL Water Fluid Canvas */}
      <FluidCursorBackground />

      {/* Primary Page Content */}
      <div className="relative z-10 pointer-events-auto">
        {children}
      </div>
    </main>
  )
}
