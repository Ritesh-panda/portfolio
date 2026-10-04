import { motion } from 'framer-motion'

/**
 * ScientificGraphVisual — Apple-grade minimalist scientific visualization
 * Abstract representation: Temporal Patient Trajectory, Connected Clinical Nodes & Evidence Links.
 */
export default function ScientificGraphVisual() {
  return (
    <div className="relative w-full h-full min-h-[260px] md:min-h-[300px] flex items-center justify-center overflow-hidden select-none">
      {/* Subtle radial ambient backdrop */}
      <div className="absolute inset-0 bg-radial from-brand/5 via-transparent to-transparent pointer-events-none" />

      <svg
        viewBox="0 0 500 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[460px] h-auto text-fg-primary"
      >
        <defs>
          {/* Subtle line gradient */}
          <linearGradient id="scientificLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#0066CC" stopOpacity="0.4" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.08" />
          </linearGradient>

          {/* Accent glow */}
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0066CC" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0066CC" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── BACKGROUND ORBITAL & TEMPORAL GRID RINGS ── */}
        <circle cx="250" cy="160" r="120" stroke="currentColor" strokeOpacity="0.06" strokeDasharray="3 5" />
        <circle cx="250" cy="160" r="70" stroke="currentColor" strokeOpacity="0.08" />
        <line x1="60" y1="160" x2="440" y2="160" stroke="url(#scientificLineGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="250" y1="50" x2="250" y2="270" stroke="currentColor" strokeOpacity="0.07" strokeWidth="1" />

        {/* ── VECTOR EDGES & RELATIONSHIP PATHS ── */}
        <motion.path
          d="M 120 160 Q 185 90 250 160 T 380 160"
          fill="none"
          stroke="#0066CC"
          strokeWidth="1.5"
          strokeOpacity="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.path
          d="M 170 210 L 250 160 L 330 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.18"
        />

        <motion.path
          d="M 170 110 L 250 160 L 330 220"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.18"
        />

        {/* ── PERIPHERAL SCIENTIFIC NODES ── */}
        {/* Node 1: Clinical Encounter / Event */}
        <g transform="translate(120, 160)">
          <circle r="14" fill="#0066CC" fillOpacity="0.06" />
          <circle r="4" fill="currentColor" fillOpacity="0.75" />
          <text x="-4" y="-12" textAnchor="middle" className="text-[10px] font-mono fill-fg-tertiary" opacity="0.8">
            Encounter t₀
          </text>
        </g>

        {/* Node 2: Biomarker / Diagnostic Evidence */}
        <g transform="translate(170, 105)">
          <circle r="12" fill="#0066CC" fillOpacity="0.05" />
          <circle r="3.5" fill="#0066CC" fillOpacity="0.8" />
          <text x="0" y="-10" textAnchor="middle" className="text-[9.5px] font-mono fill-fg-tertiary" opacity="0.8">
            Evidence
          </text>
        </g>

        {/* Node 3: Longitudinal Record */}
        <g transform="translate(170, 215)">
          <circle r="10" fill="currentColor" fillOpacity="0.04" />
          <circle r="3" fill="currentColor" fillOpacity="0.5" />
          <text x="0" y="18" textAnchor="middle" className="text-[9.5px] font-mono fill-fg-tertiary" opacity="0.8">
            Trajectory
          </text>
        </g>

        {/* ── CENTRAL REASONING CORE (Latent Graph Memory) ── */}
        <g transform="translate(250, 160)">
          <motion.circle
            r="28"
            fill="url(#nodeGlow)"
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <circle r="18" fill="var(--color-bg-primary, #ffffff)" stroke="#0066CC" strokeWidth="1.5" />
          <circle r="6" fill="#0066CC" />
          <text x="0" y="34" textAnchor="middle" className="text-[10.5px] font-mono font-medium fill-fg-primary">
            Structured Memory
          </text>
        </g>

        {/* Node 4: Attention / Grad-CAM Feature Map */}
        <g transform="translate(330, 105)">
          <circle r="12" fill="#5856D6" fillOpacity="0.08" />
          <circle r="3.5" fill="#5856D6" fillOpacity="0.85" />
          <text x="0" y="-10" textAnchor="middle" className="text-[9.5px] font-mono fill-fg-tertiary" opacity="0.8">
            Grad-CAM
          </text>
        </g>

        {/* Node 5: Temporal Inference */}
        <g transform="translate(330, 215)">
          <circle r="10" fill="currentColor" fillOpacity="0.04" />
          <circle r="3" fill="currentColor" fillOpacity="0.5" />
          <text x="0" y="18" textAnchor="middle" className="text-[9.5px] font-mono fill-fg-tertiary" opacity="0.8">
            Inference
          </text>
        </g>

        {/* Node 6: Synthesized Clinical Output */}
        <g transform="translate(380, 160)">
          <circle r="14" fill="#0066CC" fillOpacity="0.06" />
          <circle r="4" fill="#0066CC" fillOpacity="0.9" />
          <text x="6" y="-12" textAnchor="middle" className="text-[10px] font-mono fill-fg-tertiary" opacity="0.8">
            Decision tₙ
          </text>
        </g>
      </svg>
    </div>
  )
}
