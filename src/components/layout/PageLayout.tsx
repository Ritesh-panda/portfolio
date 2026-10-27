import { type ReactNode } from 'react'
import CursorHighlight from '../common/CursorHighlight'

interface PageLayoutProps {
  children: ReactNode
}

/**
 * PageLayout
 * Global wrapper containing Black + Forest Green ambient mesh and subtle Crimson Red cursor highlight.
 */
export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <main id="top" className="min-h-screen bg-[#0D120F] bg-gradient-to-br from-[#091C12] via-[#0E1713] to-[#121614] relative overflow-x-hidden text-fg-primary">
      {/* Forest Green Ambient Mesh Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-[#165B33]/25 blur-[120px]" />
        <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[#0F3D24]/20 blur-[100px]" />
      </div>

      {/* Subtle Crimson Red & Forest Green Cursor Spotlight Effect */}
      <CursorHighlight />

      {/* Primary Page Content */}
      <div className="relative z-10 pointer-events-auto">
        {children}
      </div>
    </main>
  )
}
