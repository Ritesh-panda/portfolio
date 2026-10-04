import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight, GitFork, ExternalLink, CheckCircle2 } from 'lucide-react'
import type { Project } from '../../data/projects'

interface ProjectDetailModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl rounded-2xl bg-bg-primary border border-sep-standard shadow-elev-3 overflow-hidden z-10 my-8 select-none max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-6 sm:p-8 border-b border-sep-subtle sticky top-0 bg-bg-primary/95 backdrop-blur z-20">
            <div>
              <span className="text-[12px] font-mono font-medium text-brand uppercase tracking-wider block mb-1">
                Project {project.number}
              </span>
              <h3 className="text-h3 text-fg-primary font-semibold">
                {project.title}
              </h3>
              <p className="text-small text-fg-secondary">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-bg-secondary hover:bg-sep-subtle text-fg-secondary hover:text-fg-primary transition-colors duration-200"
              aria-label="Close project details"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body Content — Scrollable */}
          <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
            
            {/* Overview */}
            <div>
              <h4 className="text-small font-mono text-fg-tertiary uppercase tracking-wider mb-2">
                Overview
              </h4>
              <p className="text-body text-fg-primary leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Metrics */}
            {project.fullDetails.metrics && project.fullDetails.metrics.length > 0 && (
              <div>
                <h4 className="text-small font-mono text-fg-tertiary uppercase tracking-wider mb-3">
                  Engineering Specifications
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.fullDetails.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="p-3.5 rounded-lg bg-bg-secondary border border-sep-subtle text-center"
                    >
                      <div className="text-[11px] text-fg-tertiary font-mono mb-1">
                        {metric.label}
                      </div>
                      <div className="text-[1.15rem] font-semibold text-fg-primary nums">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* What I Built */}
            <div>
              <h4 className="text-small font-mono text-fg-tertiary uppercase tracking-wider mb-3">
                Key Technical Contributions
              </h4>
              <ul className="space-y-2.5">
                {project.fullDetails.whatIBuilt.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-small text-fg-secondary leading-relaxed">
                    <CheckCircle2 size={15} className="text-brand shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture */}
            <div>
              <h4 className="text-small font-mono text-fg-tertiary uppercase tracking-wider mb-2">
                System Architecture
              </h4>
              <p className="text-small text-fg-secondary font-mono leading-relaxed bg-bg-secondary p-4 rounded-lg border border-sep-subtle">
                {project.fullDetails.architecture}
              </p>
            </div>

            {/* Technology Stack */}
            <div>
              <h4 className="text-small font-mono text-fg-tertiary uppercase tracking-wider mb-3">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-[12px] font-mono bg-bg-secondary text-fg-secondary border border-sep-subtle"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Action Links */}
          <div className="p-6 border-t border-sep-subtle bg-bg-secondary/40 flex flex-wrap items-center gap-4 sticky bottom-0">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-brand text-white font-medium text-btn hover:bg-brand-hover transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink size={14} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-fg-primary text-bg-primary font-medium text-btn hover:opacity-90 transition-opacity"
              >
                <GitFork size={14} />
                <span>GitHub Repository</span>
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
