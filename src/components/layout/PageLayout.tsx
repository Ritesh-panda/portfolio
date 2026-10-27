import { type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import CursorHighlight from '../common/CursorHighlight'

interface PageLayoutProps {
  children: ReactNode
}

/**
 * PageLayout
 * Global wrapper containing pure Charcoal Black base.
 * Renders the dramatic photo-inspired studio lighting (Crimson beam + floor underglow)
 * exclusively on the Home Page hero, keeping all subpages clean, distraction-free, and perfectly legible.
 */
export default function PageLayout({ children }: PageLayoutProps) {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <main id="top" className="min-h-screen bg-[#111113] bg-gradient-to-b from-[#0E0E10] via-[#131316] to-[#0C0C0E] relative overflow-x-hidden text-fg-primary">
      {/* ── CINEMATIC STUDIO LIGHTING (ONLY RENDERED ON HOME PAGE HERO) ── */}
      {isHomePage && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
          {/* Subtle, Localized Forest Green Atmospheric Sheen */}
          <div className="absolute top-[15%] -left-[10%] w-[380px] h-[380px] rounded-full bg-[#165B33]/10 blur-[100px]" />
          
          {/* Center-Right: Sharp Architectural Crimson Light Pillar (Exact from photo, placed between bio and portrait) */}
          <div className="absolute top-[-25%] left-[50%] lg:left-[54%] w-[75px] sm:w-[95px] md:w-[120px] h-[160%] -rotate-[14deg] bg-gradient-to-b from-[#FF2626] via-[#D31F1F] to-[#7F0E0E]/15 opacity-80 shadow-[0_0_80px_rgba(229,34,34,0.6)]" />

          {/* Ambient Volumetric Red Aura around the pillar */}
          <div className="absolute top-[-30%] left-[45%] lg:left-[49%] w-[220px] sm:w-[280px] md:w-[350px] h-[170%] -rotate-[14deg] bg-gradient-to-b from-[#FF2B2B]/30 via-[#B91C1C]/40 to-transparent blur-[70px]" />

          {/* Floor: Crimson Red Ground Reflection / Underglow (Exact from photo) */}
          <div className="absolute -bottom-10 left-0 right-0 h-[280px] bg-gradient-to-t from-[#E52222]/30 via-[#B91C1C]/15 to-transparent blur-[65px]" />
          <div className="absolute bottom-0 left-[20%] right-[20%] h-[130px] bg-gradient-to-t from-[#FF3333]/25 via-[#DC2626]/12 to-transparent blur-[35px]" />
        </div>
      )}

      {/* Subtle Interactive Cursor Spotlight */}
      <CursorHighlight />

      {/* Primary Page Content */}
      <div className="relative z-10 pointer-events-auto">
        {children}
      </div>
    </main>
  )
}
