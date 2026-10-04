import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/* ─────────────────────────────────────────────────
   EXACT SEQUENCE (Gracefully Paced):
   1. Ritesh Panda (Typing effect)
   2. Hello (Cursive handwriting)
   3. ନମସ୍କାର (Odia - Typing effect)
   4. नमस्ते (Hindi - Typing effect)
   5. Bonjour (Cursive handwriting)
   6. Hola (Cursive handwriting)
   7. Olá (Cursive handwriting)
   8. こんにちは (Japanese - Typing effect)
──────────────────────────────────────────────────── */

interface StepItem {
  id: string
  text: string
  isCursive: boolean
  fontFamily: string
  duration: number
}

const SEQUENCE: StepItem[] = [
  {
    id: 'name',
    text: 'Ritesh Panda',
    isCursive: false,
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
    duration: 1400,
  },
  {
    id: 'hello',
    text: 'Hello',
    isCursive: true,
    fontFamily: '"Alex Brush", "Caveat", cursive',
    duration: 900,
  },
  {
    id: 'odia',
    text: 'ନମସ୍କାର',
    isCursive: false,
    fontFamily: '"Noto Sans Oriya", "Inter", sans-serif',
    duration: 950,
  },
  {
    id: 'hindi',
    text: 'नमस्ते',
    isCursive: false,
    fontFamily: '"Noto Sans Devanagari", "Inter", sans-serif',
    duration: 950,
  },
  {
    id: 'bonjour',
    text: 'Bonjour',
    isCursive: true,
    fontFamily: '"Alex Brush", "Caveat", cursive',
    duration: 850,
  },
  {
    id: 'hola',
    text: 'Hola',
    isCursive: true,
    fontFamily: '"Alex Brush", "Caveat", cursive',
    duration: 780,
  },
  {
    id: 'ola',
    text: 'Olá',
    isCursive: true,
    fontFamily: '"Alex Brush", "Caveat", cursive',
    duration: 780,
  },
  {
    id: 'konnichiwa',
    text: 'こんにちは',
    isCursive: false,
    fontFamily: '"Noto Sans JP", sans-serif',
    duration: 920,
  },
]

/**
 * Grapheme-Aware Typewriter Writer
 * Dead-centered in viewport with balanced typing rhythm
 */
function TypewriterWriter({ text, fontFamily, isName }: { text: string; fontFamily: string; isName: boolean }) {
  const [displayedLength, setDisplayedLength] = useState(0)

  // Split safely by true Unicode graphemes
  const graphemes = typeof Intl !== 'undefined' && 'Segmenter' in Intl
    ? Array.from(new Intl.Segmenter('und', { granularity: 'grapheme' }).segment(text), s => s.segment)
    : Array.from(text)

  useEffect(() => {
    setDisplayedLength(0)
    let count = 0
    const intervalTime = isName ? 48 : 62 // Balanced typing rhythm in ms

    const timer = setInterval(() => {
      count++
      setDisplayedLength(count)
      if (count >= graphemes.length) {
        clearInterval(timer)
      }
    }, intervalTime)

    return () => clearInterval(timer)
  }, [text, isName, graphemes.length])

  const visibleText = graphemes.slice(0, displayedLength).join('')
  const isComplete = displayedLength >= graphemes.length

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(8px)', transition: { duration: 0.2 } }}
      className="flex items-center justify-center text-center select-none"
    >
      <h1
        style={{
          fontFamily,
          lineHeight: 1.15,
        }}
        className={`
          text-[#F5F5F7] select-none m-0 p-0 inline-flex items-center justify-center text-center
          ${isName
            ? 'text-[clamp(2.75rem,7.5vw,5.5rem)] font-light tracking-[-0.04em]'
            : 'text-[clamp(2.5rem,7vw,5rem)] font-light tracking-[-0.02em]'
          }
        `}
      >
        <span>{visibleText}</span>
        {/* Subtle Apple-style typing cursor */}
        {!isComplete && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.5, ease: 'linear' }}
            className="inline-block w-[2px] h-[0.82em] bg-[#0A84FF] ml-1.5 align-middle rounded-full"
          />
        )}
      </h1>
    </motion.div>
  )
}

/**
 * Cursive Handwriting Writer
 * Smooth ink reveal with authentic calligraphy strokes
 */
function CursiveHandwriter({ text, fontFamily }: { text: string; fontFamily: string }) {
  const chars = Array.from(text)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(8px)', transition: { duration: 0.2 } }}
      className="flex items-center justify-center text-center select-none"
    >
      <div className="flex items-center justify-center text-center">
        {chars.map((char, index) => (
          <motion.span
            key={`${text}-${index}-${char}`}
            initial={{
              opacity: 0,
              y: 8,
              scale: 0.9,
              filter: 'blur(6px)',
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
            }}
            transition={{
              delay: index * 0.058,
              duration: 0.34,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              fontFamily,
              display: 'inline-block',
              whiteSpace: 'pre',
              lineHeight: 1.15,
            }}
            className="text-[clamp(3.8rem,10.5vw,7rem)] text-white font-normal drop-shadow-[0_0_24px_rgba(255,255,255,0.25)]"
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default function IntroSequence({ onComplete }: { onComplete: () => void }) {
  const [stepIndex, setStepIndex] = useState(0)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []
    let totalDelay = 0

    for (let i = 0; i < SEQUENCE.length; i++) {
      if (i > 0) {
        const t = setTimeout(() => {
          setStepIndex(i)
        }, totalDelay)
        timers.push(t)
      }
      totalDelay += SEQUENCE[i].duration
    }

    const endTimer = setTimeout(() => {
      setIsClosing(true)
      setTimeout(() => {
        onComplete()
      }, 500)
    }, totalDelay)

    timers.push(endTimer)

    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  const handleSkip = () => {
    setIsClosing(true)
    setTimeout(onComplete, 200)
  }

  const currentItem = SEQUENCE[stepIndex] || SEQUENCE[0]

  return (
    <motion.div
      className="fixed inset-0 z-[9999] w-screen h-screen flex flex-col items-center justify-center bg-black cursor-pointer select-none overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: isClosing ? 0 : 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onClick={handleSkip}
    >
      {/* Absolute Dead-Center Content Container */}
      <div className="flex items-center justify-center w-full h-full text-center px-4">
        <AnimatePresence mode="wait">
          {currentItem.isCursive ? (
            <CursiveHandwriter
              key={currentItem.id}
              text={currentItem.text}
              fontFamily={currentItem.fontFamily}
            />
          ) : (
            <TypewriterWriter
              key={currentItem.id}
              text={currentItem.text}
              fontFamily={currentItem.fontFamily}
              isName={currentItem.id === 'name'}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Minimal Apple Skip Indicator fixed at bottom */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="fixed bottom-7 text-[12px] text-[#86868B] font-sans tracking-wider pointer-events-none"
      >
        tap anywhere to enter
      </motion.p>
    </motion.div>
  )
}
