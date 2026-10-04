import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, AnimatePresence } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const STORY_PARAGRAPHS = [
  {
    id: 1,
    content: (
      <>
        I’m interested in the space where <strong className="text-fg-primary font-semibold">AI, product thinking, and systems engineering</strong> come together. I like starting with the problem rather than the technology — understanding who it is for, what actually needs to be solved, exploring what is technically possible, and then turning that understanding into a reliable, high-performance product.
      </>
    )
  },
  {
    id: 2,
    content: (
      <>
        As a <strong className="text-fg-primary font-semibold">Computer Science and Business Systems (CSBS)</strong> student at VIT, my education naturally sits between two worlds: building technology and understanding the distributed systems, user dynamics, and business problems around it. That has shaped the way I approach engineering. I don’t see engineering as simply writing code; I see it as understanding a problem deeply enough to make the right technical, algorithmic, and architectural decisions.
      </>
    )
  },
  {
    id: 3,
    content: (
      <>
        My work spans <strong className="text-fg-primary font-semibold">AI/ML engineering, retrieval architectures, intelligent agents, applied research, and end-to-end technical execution</strong>. I enjoy working through ambiguity, learning new domains quickly, experimenting with ideas, and taking ownership from initial concept through implementation and production refinement.
      </>
    )
  },
  {
    id: 4,
    content: (
      <>
        I’ve had the opportunity to test this mindset in competitive national environments — being selected for <strong className="text-fg-primary font-semibold">Amazon ML Summer School 2026</strong> (~Top 2% nationwide), reaching the national finals / Top 10 of <strong className="text-fg-primary font-semibold">Cisco Champions League 2026</strong>, and becoming a national semifinalist at <strong className="text-fg-primary font-semibold">Bain BrAINWARS 2026</strong>.
      </>
    )
  },
  {
    id: 5,
    content: (
      <>
        What I bring is the combination of <strong className="text-fg-primary font-semibold">technical curiosity, product thinking, ownership, and execution</strong>. I enjoy asking <em>why before how</em>, working across different perspectives, and moving an idea through the journey from <em>"could this work?"</em> → <em>"should we build it?"</em> → <em>"how do we make it useful?"</em>
      </>
    )
  }
]

export default function ScrollStorytelling() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      // Map scroll progress (0 to 1) into 5 discrete stages
      const numStages = STORY_PARAGRAPHS.length
      const step = 1 / numStages
      const index = Math.min(
        Math.floor(latest / step),
        numStages - 1
      )
      setActiveIndex(Math.max(0, index))
    })

    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full">
      {/* Sticky Container pinned during the 300vh scroll progression */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden">
        
        {/* Header & Identity (Remains Stationary & Visible) */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8 max-w-2xl">
          <span className="text-[12.5px] font-mono font-medium text-brand uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Sparkles size={14} />
            <span>Background & Philosophy</span>
          </span>
          <h1 className="text-[clamp(2.4rem,4.5vw,3.5rem)] font-semibold text-fg-primary tracking-[-0.035em] leading-tight mb-2">
            About Me
          </h1>
          <p className="text-[15px] sm:text-[16.5px] text-fg-secondary font-medium tracking-[-0.01em]">
            Ritesh Ranjan Panda — AI/ML Engineer & Product-Minded Builder
          </p>
        </div>

        {/* Storytelling Paragraph Area with Generous Whitespace */}
        <div className="relative w-full max-w-2xl sm:max-w-3xl min-h-[170px] sm:min-h-[190px] flex items-center justify-center text-center px-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="text-[1.08rem] sm:text-[1.22rem] md:text-[1.32rem] text-fg-secondary font-normal leading-[1.65] tracking-[-0.01em]"
            >
              {STORY_PARAGRAPHS[activeIndex].content}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Subtle Apple-style 01 / 05 Progress Indicator */}
        <div className="mt-8 sm:mt-10 flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            {STORY_PARAGRAPHS.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-6 bg-brand'
                    : 'w-1.5 bg-sep-standard hover:bg-fg-tertiary'
                }`}
              />
            ))}
          </div>
          <span className="text-[12.5px] font-mono font-semibold text-fg-primary tracking-wider">
            0{activeIndex + 1} <span className="text-sep-standard font-normal">/</span> 05
          </span>
        </div>

      </div>
    </div>
  )
}
