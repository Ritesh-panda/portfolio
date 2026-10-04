import { motion } from 'framer-motion'
import HeroSection from '../components/hero/HeroSection'

/**
 * HomePage — Clean Minimalist Entry Point
 * Contains solely the Centered Hero with the 3D avatar, introduction,
 * and quick destination buttons to all sections.
 */
export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col w-full items-center justify-center min-h-[calc(100vh-3.5rem)]"
    >
      <section id="hero" aria-label="Introduction" className="w-full">
        <HeroSection />
      </section>
    </motion.div>
  )
}
