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
    <main id="top" className="min-h-screen bg-[#111113] bg-gradient-to-b from-[#0E0E10] via-[#131316] to-[#0C0C0E] relative overflow-x-hidden text-fg-primary">
      {/* ── CINEMATIC STUDIO LIGHTING (FAITHFUL REPLICATION OF THE PHOTO) ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
        {/* Subtle, Localized Forest Green Atmospheric Studio Sheen (Does not tint the black canvas) */}
        <div className="absolute top-[15%] -left-[10%] w-[380px] h-[380px] rounded-full bg-[#165B33]/10 blur-[100px]" />
        
        {/* Center: Sharp Architectural Crimson Light Pillar (Exact from photo) */}
        <div className="absolute top-[-25%] left-[38%] md:left-[45%] w-[80px] sm:w-[110px] md:w-[135px] h-[160%] -rotate-[14deg] bg-gradient-to-b from-[#FF2626] via-[#D31F1F] to-[#7F0E0E]/15 opacity-80 shadow-[0_0_80px_rgba(229,34,34,0.6)]" />

        {/* Ambient Volumetric Red Aura around the pillar */}
        <div className="absolute top-[-30%] left-[32%] md:left-[39%] w-[260px] sm:w-[340px] md:w-[420px] h-[170%] -rotate-[14deg] bg-gradient-to-b from-[#FF2B2B]/35 via-[#B91C1C]/45 to-transparent blur-[70px]" />

        {/* Floor: Crimson Red Ground Reflection / Underglow (Exact from photo) */}
        <div className="absolute -bottom-10 left-0 right-0 h-[280px] bg-gradient-to-t from-[#E52222]/35 via-[#B91C1C]/20 to-transparent blur-[65px]" />
        <div className="absolute bottom-0 left-[15%] right-[15%] h-[130px] bg-gradient-to-t from-[#FF3333]/30 via-[#DC2626]/15 to-transparent blur-[35px]" />
      </div>

      {/* Subtle Interactive Cursor Spotlight */}
      <CursorHighlight />

      {/* Primary Page Content */}
      <div className="relative z-10 pointer-events-auto">
        {children}
      </div>
    </main>
  )
}
