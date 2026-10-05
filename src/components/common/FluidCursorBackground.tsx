import { useEffect, useRef } from 'react'

interface FluidParticle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  maxRadius: number
  color: string
  alpha: number
  life: number
  maxLife: number
  angle: number
  spin: number
}

// Exact pastel holographic palette matching the iridescent watercolor marble aesthetic
const PALETTE = [
  'rgba(255, 175, 189, ', // Rose Pink
  'rgba(255, 209, 220, ', // Soft Blush
  'rgba(255, 195, 160, ', // Warm Peach
  'rgba(224, 187, 228, ', // Soft Lilac / Violet
  'rgba(180, 230, 245, ', // Pastel Sky
  'rgba(195, 245, 230, ', // Mint Ice
]

/**
 * FluidCursorBackground — Interactive Holographic Pastel Fluid & Watercolor Marble Trail
 * Seamlessly tracks cursor movements and diffuses colorful organic fluid trails across the background.
 */
export default function FluidCursorBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let width = 0
    let height = 0
    let dpr = 1
    let animationFrameId: number
    let isVisible = true

    const particles: FluidParticle[] = []
    let colorIdx = 0
    let lastX = 0
    let lastY = 0
    let hasMoved = false

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()
    window.addEventListener('resize', resize)

    const addFluidPoint = (x: number, y: number, speedX: number, speedY: number, count = 2) => {
      const speed = Math.hypot(speedX, speedY)
      const baseRadius = Math.min(Math.max(speed * 1.5, 35), 110)

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2
        const offset = Math.random() * (baseRadius * 0.4)
        const spread = (Math.random() - 0.5) * 1.8

        colorIdx = (colorIdx + 1) % PALETTE.length
        const selectedColor = PALETTE[colorIdx]

        particles.push({
          x: x + Math.cos(angle) * offset,
          y: y + Math.sin(angle) * offset,
          vx: speedX * 0.15 + Math.cos(angle) * spread,
          vy: speedY * 0.15 + Math.sin(angle) * spread,
          radius: baseRadius * (0.6 + Math.random() * 0.6),
          maxRadius: baseRadius * (1.6 + Math.random() * 0.8),
          color: selectedColor,
          alpha: 0.65 + Math.random() * 0.25,
          life: 0,
          maxLife: 60 + Math.random() * 35,
          angle: Math.random() * Math.PI * 2,
          spin: (Math.random() - 0.5) * 0.03,
        })
      }

      // Keep array memory bounded for high performance
      if (particles.length > 90) {
        particles.splice(0, particles.length - 90)
      }
    }

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0
      let clientY = 0

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX
        clientY = e.touches[0].clientY
      } else if ('clientX' in e) {
        clientX = e.clientX
        clientY = e.clientY
      } else {
        return
      }

      if (!hasMoved) {
        lastX = clientX
        lastY = clientY
        hasMoved = true
        addFluidPoint(clientX, clientY, 0, 0, 4)
        return
      }

      const dx = clientX - lastX
      const dy = clientY - lastY
      const dist = Math.hypot(dx, dy)

      if (dist > 3) {
        // Interpolate points for smooth fluid strokes even during fast cursor sweeps
        const steps = Math.min(Math.max(Math.floor(dist / 14), 1), 5)
        for (let s = 1; s <= steps; s++) {
          const t = s / steps
          const ix = lastX + dx * t
          const iy = lastY + dy * t
          addFluidPoint(ix, iy, dx, dy, 1)
        }
        lastX = clientX
        lastY = clientY
      }
    }

    window.addEventListener('mousemove', onPointerMove, { passive: true })
    window.addEventListener('touchmove', onPointerMove, { passive: true })

    const onVisibilityChange = () => {
      isVisible = !document.hidden
    }
    document.addEventListener('visibilitychange', onVisibilityChange)

    // Render loop
    let idleCounter = 0

    const loop = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(loop)
        return
      }

      // Clear with soft fade
      ctx.clearRect(0, 0, width, height)

      // Ambient idle breathing fluid ripple
      idleCounter++
      if (!hasMoved && idleCounter % 28 === 0) {
        const ambientX = width * 0.5 + Math.sin(idleCounter * 0.015) * (width * 0.25)
        const ambientY = height * 0.35 + Math.cos(idleCounter * 0.02) * (height * 0.15)
        addFluidPoint(ambientX, ambientY, Math.cos(idleCounter * 0.02) * 2, Math.sin(idleCounter * 0.015) * 2, 1)
      }

      // Update and draw particles with soft radial dissipation
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.life++
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.94
        p.vy *= 0.94
        p.angle += p.spin

        const progress = p.life / p.maxLife
        if (progress >= 1) {
          particles.splice(i, 1)
          continue
        }

        // Nonlinear organic expansion and soft fade out
        const currentRadius = p.radius + (p.maxRadius - p.radius) * Math.sin(progress * Math.PI * 0.5)
        const currentAlpha = p.alpha * Math.pow(1 - progress, 1.4)

        if (currentAlpha > 0.005) {
          const grad = ctx.createRadialGradient(
            p.x,
            p.y,
            0,
            p.x,
            p.y,
            currentRadius
          )

          grad.addColorStop(0, `${p.color}${currentAlpha * 0.85})`)
          grad.addColorStop(0.35, `${p.color}${currentAlpha * 0.55})`)
          grad.addColorStop(0.7, `${p.color}${currentAlpha * 0.2})`)
          grad.addColorStop(1, `${p.color}0)`)

          ctx.fillStyle = grad
          ctx.beginPath()
          ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      animationFrameId = requestAnimationFrame(loop)
    }

    loop()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onPointerMove)
      window.removeEventListener('touchmove', onPointerMove)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full block filter blur-[32px] sm:blur-[42px] opacity-80 mix-blend-multiply dark:mix-blend-screen dark:opacity-40 transition-opacity duration-700"
      />
    </div>
  )
}
