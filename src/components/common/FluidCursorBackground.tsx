import { useEffect, useRef } from 'react'
import WebGLFluid from 'webgl-fluid'

/**
 * FluidCursorBackground — Translucent Jellyfish Bioluminescent Fluid Wave Simulation
 * Clean on load (zero initial splatters/rangoli), reacting gracefully to cursor/touch gestures
 * with floating, translucent, bioluminescent water ripples.
 */
export default function FluidCursorBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Curated Crimson Red (#A31C18) & Visibly Rich Forest Green (#165B33 / #22C55E) liquid palette
    const THEME_PALETTE = [
      { r: 0.06, g: 0.62, b: 0.30 }, // Lush Forest Green (vividly visible)
      { r: 0.74, g: 0.14, b: 0.12 }, // Crimson Red (#A31C18)
      { r: 0.08, g: 0.78, b: 0.38 }, // Vivid Emerald Forest
      { r: 0.86, g: 0.18, b: 0.15 }, // Vivid Crimson
      { r: 0.04, g: 0.48, b: 0.22 }, // Deep British Racing Forest Green
      { r: 0.68, g: 0.12, b: 0.10 }, // Ruby Crimson
    ]

    let paletteIndex = 0

    const fluidOptions: any = {
      IMMEDIATE: false, // Prevents sudden auto-blasts on mount
      TRIGGER: 'hover',
      AUTO: false,
      SIM_RESOLUTION: 256, // High resolution for crisp liquid edges
      DYE_RESOLUTION: 1024, // HD silky color quality
      CAPTURE_RESOLUTION: 512,
      DENSITY_DISSIPATION: 0.9, // ~7-second graceful fluid longevity
      VELOCITY_DISSIPATION: 1.2, // Silky underwater gliding resistance
      PRESSURE: 0.8,
      PRESSURE_ITERATIONS: 25,
      CURL: 20, // Gentle, undulating organic ripples
      SPLAT_RADIUS: 0.22, // Refined silky ribbons
      SPLAT_FORCE: 3500, // Natural responsive fluid wave momentum
      SHADING: false, // Disables specular highlight reflections that cause white core burnout
      COLORFUL: false, // Focus on Crimson Red & Forest Green theme
      SPLAT_COLOR: THEME_PALETTE[0],
      PAUSED: false,
      BACK_COLOR: { r: 0, g: 0, b: 0 },
      TRANSPARENT: true,
      BLOOM: false, // Zero blinding firecracker brightness
      SUNRAYS: false,
    }

    // Initialize WebGL Navier-Stokes Crimson & Forest Liquid Simulation
    try {
      WebGLFluid(canvas, fluidOptions)
    } catch (err) {
      console.warn('WebGL Fluid initialization fallback:', err)
    }

    let moveCounter = 0

    // Safely forward global window mouse events into WebGL canvas with smooth gliding and color cycling
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!e.isTrusted || !canvas) return
      const rect = canvas.getBoundingClientRect()
      const offsetX = e.clientX - rect.left
      const offsetY = e.clientY - rect.top

      moveCounter++
      if (moveCounter % 30 === 0) {
        paletteIndex = (paletteIndex + 1) % THEME_PALETTE.length
        fluidOptions.SPLAT_COLOR = THEME_PALETTE[paletteIndex]
      }

      const moveEvent = new MouseEvent('mousemove', {
        clientX: e.clientX,
        clientY: e.clientY,
        bubbles: false,
      })
      Object.defineProperty(moveEvent, 'offsetX', { get: () => offsetX })
      Object.defineProperty(moveEvent, 'offsetY', { get: () => offsetY })
      canvas.dispatchEvent(moveEvent)
    }

    // Touch event forwarder
    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (!e.isTrusted || !canvas || e.touches.length === 0) return
      const touch = e.touches[0]
      const rect = canvas.getBoundingClientRect()
      const offsetX = touch.clientX - rect.left
      const offsetY = touch.clientY - rect.top

      moveCounter++
      if (moveCounter % 30 === 0) {
        paletteIndex = (paletteIndex + 1) % THEME_PALETTE.length
        fluidOptions.SPLAT_COLOR = THEME_PALETTE[paletteIndex]
      }

      const moveEvent = new MouseEvent('mousemove', {
        clientX: touch.clientX,
        clientY: touch.clientY,
        bubbles: false,
      })
      Object.defineProperty(moveEvent, 'offsetX', { get: () => offsetX })
      Object.defineProperty(moveEvent, 'offsetY', { get: () => offsetY })
      canvas.dispatchEvent(moveEvent)
    }

    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true })
    window.addEventListener('touchmove', handleGlobalTouchMove, { passive: true })

    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove)
      window.removeEventListener('touchmove', handleGlobalTouchMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-85 transition-opacity duration-500"
      />
    </div>
  )
}



