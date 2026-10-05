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

    // Initialize WebGL Navier-Stokes Jellyfish Fluid Simulation with gentle silky pastel waves
    try {
      WebGLFluid(canvas, {
        IMMEDIATE: true,
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
        SPLAT_RADIUS: 0.25, // Refined silky ribbons
        SPLAT_FORCE: 4000, // Natural fluid wave momentum
        SHADING: false, // Soft flat liquid shading (no harsh blinding white specular flashes)
        COLORFUL: true, // Smooth pastel violet/rose/lilac color gradient cycle
        COLOR_UPDATE_SPEED: 6,
        PAUSED: false,
        BACK_COLOR: { r: 0, g: 0, b: 0 },
        TRANSPARENT: true,
        BLOOM: false, // Disabled to eliminate blinding firecracker brightness
        SUNRAYS: false,
      })
    } catch (err) {
      console.warn('WebGL Fluid initialization fallback:', err)
    }

    let isPointerInitialized = false

    // Safely forward global window mouse events into WebGL canvas with recursion protection
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!e.isTrusted || !canvas) return
      const rect = canvas.getBoundingClientRect()
      const offsetX = e.clientX - rect.left
      const offsetY = e.clientY - rect.top

      if (!isPointerInitialized) {
        const downEvent = new MouseEvent('mousedown', {
          clientX: e.clientX,
          clientY: e.clientY,
          bubbles: false,
        })
        Object.defineProperty(downEvent, 'offsetX', { get: () => offsetX })
        Object.defineProperty(downEvent, 'offsetY', { get: () => offsetY })
        canvas.dispatchEvent(downEvent)
        isPointerInitialized = true
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

    const handleGlobalMouseDown = (e: MouseEvent) => {
      if (!e.isTrusted || !canvas) return
      const rect = canvas.getBoundingClientRect()
      const offsetX = e.clientX - rect.left
      const offsetY = e.clientY - rect.top

      const downEvent = new MouseEvent('mousedown', {
        clientX: e.clientX,
        clientY: e.clientY,
        bubbles: false,
      })
      Object.defineProperty(downEvent, 'offsetX', { get: () => offsetX })
      Object.defineProperty(downEvent, 'offsetY', { get: () => offsetY })
      canvas.dispatchEvent(downEvent)
      isPointerInitialized = true
    }

    // Touch event forwarder
    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (!e.isTrusted || !canvas || e.touches.length === 0) return
      const touch = e.touches[0]
      const rect = canvas.getBoundingClientRect()
      const offsetX = touch.clientX - rect.left
      const offsetY = touch.clientY - rect.top

      const moveEvent = new MouseEvent('mousemove', {
        clientX: touch.clientX,
        clientY: touch.clientY,
        bubbles: false,
      })
      Object.defineProperty(moveEvent, 'offsetX', { get: () => offsetX })
      Object.defineProperty(moveEvent, 'offsetY', { get: () => offsetY })
      canvas.dispatchEvent(moveEvent)
    }

    const handleGlobalTouchStart = (e: TouchEvent) => {
      if (!e.isTrusted || !canvas || e.touches.length === 0) return
      const touch = e.touches[0]
      const rect = canvas.getBoundingClientRect()
      const offsetX = touch.clientX - rect.left
      const offsetY = touch.clientY - rect.top

      const downEvent = new MouseEvent('mousedown', {
        clientX: touch.clientX,
        clientY: touch.clientY,
        bubbles: false,
      })
      Object.defineProperty(downEvent, 'offsetX', { get: () => offsetX })
      Object.defineProperty(downEvent, 'offsetY', { get: () => offsetY })
      canvas.dispatchEvent(downEvent)
      isPointerInitialized = true
    }

    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true })
    window.addEventListener('mousedown', handleGlobalMouseDown, { passive: true })
    window.addEventListener('touchmove', handleGlobalTouchMove, { passive: true })
    window.addEventListener('touchstart', handleGlobalTouchStart, { passive: true })

    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
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


