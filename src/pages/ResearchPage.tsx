import { motion } from 'framer-motion'
import ResearchSection from '../components/research/ResearchSection'
import type { ResearchItem } from '../data/research'

interface ResearchPageProps {
  onSelectResearch: (item: ResearchItem) => void
}

export default function ResearchPage({ onSelectResearch }: ResearchPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-full pt-16 sm:pt-20"
    >
      <ResearchSection onSelectResearch={onSelectResearch} />
    </motion.div>
  )
}
