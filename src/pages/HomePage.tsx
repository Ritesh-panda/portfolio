import { motion } from 'framer-motion'
import HeroSection from '../components/hero/HeroSection'
import SEO from '../components/common/SEO'

/**
 * HomePage — Clean Minimalist Entry Point
 * Canonical home of Ritesh Ranjan Panda (AI/ML Engineer & Product-Minded Builder)
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
      <SEO
        title="Ritesh Panda — AI/ML Engineer & Product-Minded Builder"
        description="Ritesh Ranjan Panda is an AI/ML engineer and product-minded builder exploring artificial intelligence, intelligent systems, applied research, and product development."
        canonicalPath="/"
        ogType="profile"
      />
      <section id="hero" aria-label="Ritesh Ranjan Panda Introduction" className="w-full">
        <HeroSection />
      </section>
    </motion.div>
  )
}
