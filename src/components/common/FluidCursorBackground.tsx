import { useEffect, useRef } from 'react'
import WebGLFluid from 'webgl-fluid'

/**
 * FluidCursorBackground — Navier-Stokes WebGL Dense Silky Water & Liquid Marble Simulation
 * Exact liquid marbling physics with 10-second longevity, silky 3D sheen,
 * glossy surface curvature, and smooth curling wave momentum.
 */
export default function FluidCursorBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Initialize WebGL Navier-Stokes Silky Liquid Fluid Simulation
    // Configured for Pure Laminar Curves (vortex pair) without zig-zag turbulence
    try {
      WebGLFluid(canvas, {
        IMMEDIATE: true,
        TRIGGER: 'hover',
        AUTO: false,
        SIM_RESOLUTION: 256, // Ultra-crisp liquid resolution
        DYE_RESOLUTION: 1024, // Bold, high-definition dye saturation
        CAPTURE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 0.02, // Dense, bold paint that lasts 10+ seconds
        VELOCITY_DISSIPATION: 0.982, // Smooth, continuous forward gliding inertia
        PRESSURE: 0.92, // Strong incompressible pressure for pure circular/curved bow waves
        PRESSURE_ITERATIONS: 36, // Maximum solver precision for pristine smooth curves
        CURL: 22, // Pure laminar curve factor (eliminates chaotic zig-zags; creates smooth twin-ear vortex loops)
        SPLAT_RADIUS: 0.55, // Dense, smooth, rich liquid paint volume
        SPLAT_FORCE: 6800, // Forward-propelling liquid wave momentum
        SHADING: true, // Deep 3D specular liquid sheen
        COLORFUL: true, // Chromatic spectrum
        COLOR_UPDATE_SPEED: 12,
        PAUSED: false,
        BACK_COLOR: { r: 0, g: 0, b: 0 },
        TRANSPARENT: true,
        BLOOM: false,
        SUNRAYS: false,
      })
    } catch (err) {
      console.warn('WebGL Fluid initialization fallback:', err)
    }

    let isPointerInitialized = false
    let lastRawX = 0
    let lastRawY = 0
    let smoothDirX = 0
    let smoothDirY = 0

    // Forward projected splash offset: ~1.5 cm (~55px) ahead of cursor in movement direction
    const FORWARD_OFFSET_PX = 55

    const dispatchFluidPoint = (rawX: number, rawY: number, isDown = false) => {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()

      const dx = rawX - (lastRawX || rawX)
      const dy = rawY - (lastRawY || rawY)
      const dist = Math.hypot(dx, dy)

      // Smooth the direction vector to eliminate hand jitter and zig-zag noise
      if (dist > 1.5) {
        const targetDirX = dx / dist
        const targetDirY = dy / dist
        smoothDirX += (targetDirX - smoothDirX) * 0.45
        smoothDirY += (targetDirY - smoothDirY) * 0.45
        const smoothMag = Math.hypot(smoothDirX, smoothDirY) || 1
        smoothDirX /= smoothMag
        smoothDirY /= smoothMag
      }

      lastRawX = rawX
      lastRawY = rawY

      // Project the splash 1-2 cm ahead in the stroke direction
      const projectedX = rawX + smoothDirX * FORWARD_OFFSET_PX
      const projectedY = rawY + smoothDirY * FORWARD_OFFSET_PX

      const offsetX = projectedX - rect.left
      const offsetY = projectedY - rect.top

      if (isDown || !isPointerInitialized) {
        const downEvent = new MouseEvent('mousedown', {
          clientX: projectedX,
          clientY: projectedY,
          bubbles: false,
        })
        Object.defineProperty(downEvent, 'offsetX', { get: () => offsetX })
        Object.defineProperty(downEvent, 'offsetY', { get: () => offsetY })
        canvas.dispatchEvent(downEvent)
        isPointerInitialized = true
      }

      const moveEvent = new MouseEvent('mousemove', {
        clientX: projectedX,
        clientY: projectedY,
        bubbles: false,
      })
      Object.defineProperty(moveEvent, 'offsetX', { get: () => offsetX })
      Object.defineProperty(moveEvent, 'offsetY', { get: () => offsetY })
      canvas.dispatchEvent(moveEvent)
    }

    // Safely forward global window mouse events
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!e.isTrusted || !canvas) return
      dispatchFluidPoint(e.clientX, e.clientY, false)
    }

    const handleGlobalMouseDown = (e: MouseEvent) => {
      if (!e.isTrusted || !canvas) return
      dispatchFluidPoint(e.clientX, e.clientY, true)
    }

    // Touch event forwarder
    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (!e.isTrusted || !canvas || e.touches.length === 0) return
      const touch = e.touches[0]
      dispatchFluidPoint(touch.clientX, touch.clientY, false)
    }

    const handleGlobalTouchStart = (e: TouchEvent) => {
      if (!e.isTrusted || !canvas || e.touches.length === 0) return
      const touch = e.touches[0]
      dispatchFluidPoint(touch.clientX, touch.clientY, true)
    }

    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true })
    window.addEventListener('mousedown', handleGlobalMouseDown, { passive: true })
    window.addEventListener('touchmove', handleGlobalTouchMove, { passive: true })
    window.addEventListener('touchstart', handleGlobalTouchStart, { passive: true })

    // Auto initial splash on page load
    const triggerInitialRipple = () => {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      const x = rect.width * 0.5
      const y = rect.height * 0.35
      smoothDirX = 0.8
      smoothDirY = 0.4
      dispatchFluidPoint(x, y, true)
      dispatchFluidPoint(x + 70, y + 30, false)
    }

    const timer = setTimeout(triggerInitialRipple, 300)

    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('mousemove', handleGlobalMouseMove)
      window.removeEventListener('mousedown', handleGlobalMouseDown)
      window.removeEventListener('touchmove', handleGlobalTouchMove)
      window.removeEventListener('touchstart', handleGlobalTouchStart)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-95 transition-opacity duration-500"
      />
    </div>
  )
}
