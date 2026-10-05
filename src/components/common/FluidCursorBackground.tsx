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
    try {
      WebGLFluid(canvas, {
        IMMEDIATE: true,
        TRIGGER: 'hover',
        AUTO: false,
        SIM_RESOLUTION: 256, // Ultra-crisp liquid resolution
        DYE_RESOLUTION: 1024, // Bold, high-definition dye saturation
        CAPTURE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 0.025, // Ultra-high color & fluid density — paint retains rich body and marble ribbons
        VELOCITY_DISSIPATION: 0.988, // Silky fluid inertia for viscous liquid marble movement
        PRESSURE: 0.88,
        PRESSURE_ITERATIONS: 32, // High precision pressure solver for crisp boundary curves
        CURL: 85, // Extremely high curve factor: dramatic curving swirls, liquid whirlpools, and fluid ribbon arcs
        SPLAT_RADIUS: 0.65, // Dense, thick, rich fluid paint stroke volume
        SPLAT_FORCE: 7500, // Dynamic responsive fluid velocity
        SHADING: true, // Deep 3D liquid highlights & specular sheen
        COLORFUL: true, // Vibrant chromatic transitions
        COLOR_UPDATE_SPEED: 14,
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

    // Auto initial splash on page load
    const triggerInitialRipple = () => {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      const x = rect.width * 0.5
      const y = rect.height * 0.35
      const downEvent = new MouseEvent('mousedown', { clientX: x, clientY: y, bubbles: false })
      Object.defineProperty(downEvent, 'offsetX', { get: () => x })
      Object.defineProperty(downEvent, 'offsetY', { get: () => y })
      canvas.dispatchEvent(downEvent)

      const moveEvent = new MouseEvent('mousemove', { clientX: x + 90, clientY: y + 35, bubbles: false })
      Object.defineProperty(moveEvent, 'offsetX', { get: () => x + 90 })
      Object.defineProperty(moveEvent, 'offsetY', { get: () => y + 35 })
      canvas.dispatchEvent(moveEvent)
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
