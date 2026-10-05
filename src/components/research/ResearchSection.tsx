import { motion } from 'framer-motion'
import { ArrowUpRight, FileText } from 'lucide-react'
import { RESEARCH_PAPERS, RESEARCH_DOMAINS } from '../../data/research'
import type { ResearchItem } from '../../data/research'
import ScientificGraphVisual from './ScientificGraphVisual'

interface ResearchSectionProps {
  onSelectResearch?: (item: ResearchItem) => void
}

/**
 * ResearchSection — Single Completed Scientific Publication + Intellectual Domains
 * Honest, editorial, and disciplined Apple-grade layout without fake placeholders.
 */
export default function ResearchSection({ onSelectResearch }: ResearchSectionProps) {
  const paper = RESEARCH_PAPERS[0]

  return (
    <div className="w-full select-none py-16 md:py-28 bg-bg-primary">
      <div className="container-content max-w-6xl mx-auto">
        
        {/* ── 1. SECTION OPENING ── */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold text-fg-primary tracking-[-0.03em] leading-tight mb-3"
          >
            Research
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-body text-fg-secondary max-w-xl font-normal leading-relaxed"
          >
            Exploring ideas, experiments, and investigations at the intersection of AI.
          </motion.p>
        </div>

        {/* ── 2. SINGLE FEATURED PUBLISHED PAPER (LARGE EDITORIAL CARD) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => onSelectResearch && onSelectResearch(paper)}
          className="group relative rounded-3xl border border-sep-standard/70 bg-bg-secondary hover:border-sep-standard hover:shadow-elev-2 transition-all duration-500 ease-apple cursor-pointer p-8 sm:p-10 md:p-12 mb-16 overflow-hidden"
        >
          {/* Subtle gradient background accent */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-radial from-brand/5 to-transparent pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content Area (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Number, Status & Venue */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[13px] font-mono font-medium text-fg-tertiary">
                    {paper.number}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-brand/10 text-brand border border-brand/20">
                    {paper.statusDate}
                  </span>
                  <span className="text-[12px] font-mono text-fg-tertiary hidden sm:inline">
                    {paper.venue}
                  </span>
                </div>

                {/* Paper Title */}
                <h3 className="text-[clamp(1.35rem,2.3vw,1.85rem)] font-semibold text-fg-primary tracking-[-0.02em] leading-snug mb-3 group-hover:text-brand transition-colors duration-200">
                  {paper.title}
                </h3>

                {/* Authors */}
                <p className="text-[13px] font-mono text-fg-tertiary mb-4">
                  {paper.authors.join(' · ')}
                </p>

                {/* Description */}
                <p className="text-body text-fg-secondary leading-relaxed mb-6">
                  {paper.shortDescription}
                </p>

                {/* Keywords / Tags */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {paper.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11.5px] font-mono bg-bg-primary text-fg-secondary border border-sep-standard/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="inline-flex items-center gap-1.5 text-btn font-medium text-brand group-hover:text-brand-hover transition-colors duration-200">
                <FileText size={15} />
                <span>Read paper & abstract</span>
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-200 ease-apple group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                />
              </div>
            </div>

            {/* Right Abstract Scientific Visualization (5 cols) */}
            <div className="lg:col-span-5 flex items-center justify-center p-2 rounded-2xl bg-bg-primary/50 border border-sep-subtle/80">
              <ScientificGraphVisual />
            </div>
          </div>
        </motion.div>

        {/* ── 3. AREAS OF EXPLORATION (AUTHENTIC DOMAINS) ── */}
        <div className="pt-12 border-t border-sep-standard/60">
          <div className="text-center mb-12">
            <h4 className="text-[13px] font-mono font-medium text-fg-tertiary uppercase tracking-wider mb-2">
              Areas of Exploration
            </h4>
            <p className="text-body text-fg-secondary max-w-lg mx-auto font-normal">
              The problems I'm curious about, and the systems I'm learning to build around them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {RESEARCH_DOMAINS.map((domain, idx) => (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-2xl bg-bg-secondary/70 border border-sep-standard/60 hover:border-sep-standard transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h5 className="text-[1.05rem] font-semibold text-fg-primary tracking-[-0.01em] mb-2">
                    {domain.title}
                  </h5>
                  <p className="text-small text-fg-secondary leading-relaxed mb-5">
                    {domain.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {domain.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-bg-primary text-fg-tertiary border border-sep-subtle"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Evolving Portfolio Note */}
          <div className="mt-14 text-center">
            <p className="text-[13px] font-mono text-fg-tertiary">
              More research is on the way · Papers · Experiments · New questions
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
