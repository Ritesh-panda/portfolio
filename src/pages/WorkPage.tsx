import { motion } from 'framer-motion'
import WorkSection from '../components/work/WorkSection'
import SEO from '../components/common/SEO'
import type { Project } from '../data/projects'

interface WorkPageProps {
  onSelectProject: (project: Project) => void
}

export default function WorkPage({ onSelectProject }: WorkPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-full pt-16 sm:pt-20"
    >
      <SEO
        title="Ritesh Panda — AI/ML Projects & Products"
        description="Explore engineering systems, full-stack architectures, and AI projects built by Ritesh Ranjan Panda including SocioOps, JeevanRekha, and Semantic Search."
        canonicalPath="/work"
      />
      <WorkSection onSelectProject={onSelectProject} />
    </motion.div>
  )
}
