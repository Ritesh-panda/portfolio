import { useEffect, useRef } from 'react'
import WebGLFluid from 'webgl-fluid'

/**
 * FluidCursorBackground — Navier-Stokes WebGL Fluid Physics Simulation
 * Exact water-physics fluid dynamics engine with flashing iridescent colors,
 * velocity advection, curl vorticity, and 3D specular water highlights.
 */
export default function FluidCursorBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Initialize high-performance WebGL Navier-Stokes Fluid Simulation
    try {
      WebGLFluid(canvas, {
        IMMEDIATE: true,
        TRIGGER: 'hover',
        AUTO: false,
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 1024,
        CAPTURE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 2.2, // Smooth dispersion
        VELOCITY_DISSIPATION: 0.98, // Water inertia: keeps flowing & swirling on swipe
        PRESSURE: 0.8,
        PRESSURE_ITERATIONS: 20,
        CURL: 35, // Water vortex & curling ripples
        SPLAT_RADIUS: 0.28, // Splash radius
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

    // Trigger an initial subtle fluid ripple
    const triggerInitialSplash = () => {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      const event = new MouseEvent('mousemove', {
        clientX: rect.width * 0.5,
        clientY: rect.height * 0.35,
        bubbles: true,
      })
      canvas.dispatchEvent(event)
    }

    const timer = setTimeout(triggerInitialSplash, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full block pointer-events-auto opacity-90 transition-opacity duration-500"
        style={{ touchAction: 'none' }}
      />
    </div>
  )
}
