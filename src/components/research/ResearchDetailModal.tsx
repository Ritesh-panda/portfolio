import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, CheckCircle2, Copy, Check, FileText, BookOpen } from 'lucide-react'
import type { ResearchItem } from '../../data/research'

interface ResearchDetailModalProps {
  item: ResearchItem | null
  onClose: () => void
}

export default function ResearchDetailModal({ item, onClose }: ResearchDetailModalProps) {
  const [copiedBib, setCopiedBib] = useState(false)

  if (!item) return null

  const handleCopyBibtex = () => {
    if (item.bibtex) {
      navigator.clipboard.writeText(item.bibtex)
      setCopiedBib(true)
      setTimeout(() => setCopiedBib(false), 2000)
    }
  }

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
          <div className="flex items-start justify-between p-6 sm:p-8 border-b border-sep-subtle sticky top-0 bg-bg-primary/95 backdrop-blur z-20">
            <div className="pr-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11.5px] font-mono font-medium text-brand uppercase tracking-wider">
                  {item.statusDate}
                </span>
                {item.venue && (
                  <>
                    <span className="text-fg-quaternary">·</span>
                    <span className="text-[12px] font-mono text-fg-tertiary">
                      {item.venue}
                    </span>
                  </>
                )}
              </div>
              <h3 className="text-[clamp(1.25rem,2vw,1.6rem)] font-semibold text-fg-primary leading-snug">
                {item.title}
              </h3>
              <p className="text-[13px] text-fg-secondary font-mono mt-1.5">
                {item.authors.join(', ')}
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-bg-secondary hover:bg-sep-subtle text-fg-secondary hover:text-fg-primary transition-colors duration-200 shrink-0"
              aria-label="Close research details"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body Content — Scrollable */}
          <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
            
            {/* Abstract */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FileText size={15} className="text-brand" />
                <h4 className="text-small font-mono text-fg-tertiary uppercase tracking-wider">
                  Abstract
                </h4>
              </div>
              <p className="text-body text-fg-primary leading-relaxed bg-bg-secondary/50 p-5 rounded-xl border border-sep-subtle">
                {item.abstract}
              </p>
            </div>

            {/* Metrics */}
            {item.metrics && item.metrics.length > 0 && (
              <div>
                <h4 className="text-small font-mono text-fg-tertiary uppercase tracking-wider mb-3">
                  Quantitative Benchmarks
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {item.metrics.map((metric) => (
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

            {/* Motivation & Problem */}
            <div>
              <h4 className="text-small font-mono text-fg-tertiary uppercase tracking-wider mb-2">
                Problem & Clinical Motivation
              </h4>
              <p className="text-small text-fg-secondary leading-relaxed">
                {item.motivation}
              </p>
            </div>

            {/* Approach & Methodology */}
            <div>
              <h4 className="text-small font-mono text-fg-tertiary uppercase tracking-wider mb-3">
                Methodology & Evaluation Framework
              </h4>
              <ul className="space-y-2.5">
                {item.approach.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-small text-fg-secondary leading-relaxed">
                    <CheckCircle2 size={15} className="text-brand shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Findings */}
            <div>
              <h4 className="text-small font-mono text-fg-tertiary uppercase tracking-wider mb-3">
                Key Findings & Contributions
              </h4>
              <div className="p-4 rounded-xl bg-bg-secondary border border-sep-subtle space-y-2.5">
                {item.keyFindings.map((finding, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-small text-fg-primary leading-relaxed">
                    <span className="text-brand font-mono font-semibold shrink-0">[{idx + 1}]</span>
                    <span>{finding}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags / Domains */}
            <div>
              <h4 className="text-small font-mono text-fg-tertiary uppercase tracking-wider mb-3">
                Research Keywords
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[12px] font-mono bg-bg-secondary text-fg-secondary border border-sep-subtle"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* BibTeX Citation */}
            {item.bibtex && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <BookOpen size={14} className="text-fg-tertiary" />
                    <h4 className="text-small font-mono text-fg-tertiary uppercase tracking-wider">
                      Citation (BibTeX)
                    </h4>
                  </div>
                  <button
                    onClick={handleCopyBibtex}
                    className="inline-flex items-center gap-1 text-[11.5px] font-mono text-brand hover:text-brand-hover transition-colors"
                  >
                    {copiedBib ? <Check size={13} /> : <Copy size={13} />}
                    <span>{copiedBib ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="text-[11.5px] font-mono text-fg-secondary bg-bg-secondary p-4 rounded-lg border border-sep-subtle overflow-x-auto whitespace-pre">
                  {item.bibtex}
                </pre>
              </div>
            )}

          </div>

          {/* Footer Action Bar */}
          <div className="p-6 border-t border-sep-subtle bg-bg-secondary/40 flex flex-wrap items-center justify-between gap-4 sticky bottom-0">
            {item.recordUrl ? (
              <a
                href={item.recordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-brand text-white font-medium text-btn hover:bg-brand-hover transition-colors"
              >
                <span>Read Full Paper</span>
                <ExternalLink size={14} />
              </a>
            ) : (
              <span className="text-small font-mono text-fg-tertiary">
                Investigation in progress
              </span>
            )}

            {item.doi && (
              <span className="text-[12px] font-mono text-fg-tertiary">
                DOI: {item.doi}
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
