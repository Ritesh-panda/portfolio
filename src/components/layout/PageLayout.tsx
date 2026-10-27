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
    <main id="top" className="min-h-screen bg-[#111613] bg-gradient-to-br from-[#0A2317] via-[#0D1914] to-[#141715] relative overflow-x-hidden text-fg-primary">
      {/* Visible Forest Green Ambient Glow Mesh */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-[#165B33]/25 blur-[120px]" />
        <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[#0F3D24]/20 blur-[100px]" />
      </div>

      {/* Interactive WebGL Water Fluid Canvas */}
      <FluidCursorBackground />

      {/* Primary Page Content */}
      <div className="relative z-10 pointer-events-auto">
        {children}
      </div>
    </main>
  )
}
