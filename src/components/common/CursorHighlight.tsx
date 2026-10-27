import { useEffect, useState } from 'react'

/**
 * CursorHighlight — Lightweight Ambient Cursor Spotlight
 * Pure hardware-accelerated highlight effect with Crimson Red core & Forest Green halo.
 * Zero lag, zero canvas splatter, perfectly responsive.
 */
export default function CursorHighlight() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 })
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    let targetX = -1000
    let targetY = -1000
    let currentX = -1000
    let currentY = -1000
    let animationFrameId: number

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
      setOpacity(1)
    }

    const handleMouseLeave = () => setOpacity(0)

    const updatePosition = () => {
      // Smooth lerp interpolation for silky motion
      currentX += (targetX - currentX) * 0.15
      currentY += (targetY - currentY) * 0.15
      setPos({ x: Math.round(currentX), y: Math.round(currentY) })
      animationFrameId = requestAnimationFrame(updatePosition)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    animationFrameId = requestAnimationFrame(updatePosition)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700 overflow-hidden"
      style={{ opacity }}
    >
      <div
        className="absolute w-[480px] h-[480px] rounded-full blur-[100px] will-change-transform"
        style={{
          transform: `translate3d(${pos.x - 240}px, ${pos.y - 240}px, 0)`,
          background: 'radial-gradient(circle, rgba(224, 62, 62, 0.14) 0%, rgba(34, 197, 94, 0.08) 50%, transparent 75%)',
        }}
      />
    </div>
  )
}
