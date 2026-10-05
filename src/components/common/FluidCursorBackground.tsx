import { useEffect, useRef } from 'react'
import WebGLFluid from 'webgl-fluid'

/**
 * FluidCursorBackground — Navier-Stokes WebGL Fluid Physics Simulation
 * Exact water-physics fluid dynamics engine with flashing iridescent colors,
 * velocity advection, curl vorticity, and 3D specular water highlights.
 * Captures global window pointer events so fluid moves everywhere you swipe.
 */
export default function FluidCursorBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Ensure canvas dimensions match window
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Initialize high-performance WebGL Navier-Stokes Fluid Simulation
    try {
      WebGLFluid(canvas, {
        IMMEDIATE: true,
        TRIGGER: 'hover',
        AUTO: false,
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 1024,
        CAPTURE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 1.8, // Smooth, lingering water dye dispersion
        VELOCITY_DISSIPATION: 0.98, // Water inertia: fluid keeps swirling and flowing on swipe
        PRESSURE: 0.8,
        PRESSURE_ITERATIONS: 20,
        CURL: 35, // Water vortex & curling ripples
        SPLAT_RADIUS: 0.35, // Splash radius
        SPLAT_FORCE: 6500, // Reactive force from cursor speed
        SHADING: true, // 3D water lighting highlights
        COLORFUL: true, // Flashing iridescent holographic colors
        COLOR_UPDATE_SPEED: 14, // Flashing color shift speed
        PAUSED: false,
        BACK_COLOR: { r: 0, g: 0, b: 0 },
        TRANSPARENT: true,
        BLOOM: false,
        SUNRAYS: false,
      })
    } catch (err) {
      console.warn('WebGL Fluid initialization fallback:', err)
    }

    // ── Global Pointer Forwarder ──
    // Forwards all mouse and touch events from the window directly into the WebGL fluid canvas
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      const syntheticEvent = new MouseEvent('mousemove', {
        clientX: e.clientX,
        clientY: e.clientY,
        bubbles: true,
      })
      Object.defineProperty(syntheticEvent, 'offsetX', { get: () => e.clientX - rect.left })
      Object.defineProperty(syntheticEvent, 'offsetY', { get: () => e.clientY - rect.top })
      canvas.dispatchEvent(syntheticEvent)
    }

    const handleGlobalMouseDown = (e: MouseEvent) => {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      const syntheticEvent = new MouseEvent('mousedown', {
        clientX: e.clientX,
        clientY: e.clientY,
        bubbles: true,
      })
      Object.defineProperty(syntheticEvent, 'offsetX', { get: () => e.clientX - rect.left })
      Object.defineProperty(syntheticEvent, 'offsetY', { get: () => e.clientY - rect.top })
      canvas.dispatchEvent(syntheticEvent)
    }

    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (!canvas) return
      const syntheticEvent = new TouchEvent('touchmove', {
        touches: Array.from(e.touches),
        targetTouches: Array.from(e.touches),
        changedTouches: Array.from(e.changedTouches),
        bubbles: true,
      })
      canvas.dispatchEvent(syntheticEvent)
    }

    const handleGlobalTouchStart = (e: TouchEvent) => {
      if (!canvas) return
      const syntheticEvent = new TouchEvent('touchstart', {
        touches: Array.from(e.touches),
        targetTouches: Array.from(e.touches),
        changedTouches: Array.from(e.changedTouches),
        bubbles: true,
      })
      canvas.dispatchEvent(syntheticEvent)
    }

    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true })
    window.addEventListener('mousedown', handleGlobalMouseDown, { passive: true })
    window.addEventListener('touchmove', handleGlobalTouchMove, { passive: true })
    window.addEventListener('touchstart', handleGlobalTouchStart, { passive: true })

    // Trigger initial colorful water splash ripples across the screen
    const triggerSplash = (xRatio: number, yRatio: number) => {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      const x = rect.width * xRatio
      const y = rect.height * yRatio
      const downEvent = new MouseEvent('mousedown', { clientX: x, clientY: y, bubbles: true })
      Object.defineProperty(downEvent, 'offsetX', { get: () => x })
      Object.defineProperty(downEvent, 'offsetY', { get: () => y })
      canvas.dispatchEvent(downEvent)

      const moveEvent = new MouseEvent('mousemove', { clientX: x + 40, clientY: y + 20, bubbles: true })
      Object.defineProperty(moveEvent, 'offsetX', { get: () => x + 40 })
      Object.defineProperty(moveEvent, 'offsetY', { get: () => y + 20 })
      canvas.dispatchEvent(moveEvent)
    }

    const timer1 = setTimeout(() => triggerSplash(0.5, 0.35), 250)
    const timer2 = setTimeout(() => triggerSplash(0.3, 0.5), 500)
    const timer3 = setTimeout(() => triggerSplash(0.7, 0.45), 750)

    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
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
