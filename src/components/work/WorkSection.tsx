import { motion } from 'framer-motion'
import { ArrowUpRight, GitFork, MousePointerClick, Cpu, LineChart } from 'lucide-react'
import { SELECTED_PROJECTS } from '../../data/projects'
import type { Project } from '../../data/projects'

interface WorkSectionProps {
  onSelectProject?: (project: Project) => void
}

/**
 * WorkSection — Apple-Grade 2-Section Compact Editorial Layout
 * Responsive, compact, widescreen card banners for desktop, laptop, tablet, and mobile.
 */
export default function WorkSection({ onSelectProject }: WorkSectionProps) {
  const engineeringProjects = SELECTED_PROJECTS.filter(
    (p) => p.category === 'Engineering Systems' || !p.category
  )
  const caseStudyProjects = SELECTED_PROJECTS.filter(
    (p) => p.category === 'Case Studies & Analysis'
  )

  const renderProjectCard = (project: Project, index: number, isEngineering = false) => {
    const isBain = project.id === 'bain-brainwars'
    const isCisco = project.id === 'cisco-forecast-league'

    return (
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ delay: index * 0.06, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col h-full select-none"
      >
        {/* ── 1. COMPACT WIDESCREEN VISUAL BANNER CARD (16:9.5 Ratio) ── */}
        <div
          onClick={() => onSelectProject && onSelectProject(project)}
          className={`group relative w-full aspect-[16/9.5] max-h-[220px] rounded-2xl overflow-hidden border border-sep-standard/70 ${
            isBain ? 'bg-white' : isCisco ? 'bg-[#071929]' : 'bg-bg-secondary'
          } hover:border-brand hover:shadow-elev-2 transition-all duration-500 ease-apple cursor-pointer flex flex-col justify-between p-3.5 sm:p-4 mb-3.5 shrink-0`}
        >
          {/* Artwork Image Fully Covered */}
          <img
            src={project.image}
            alt={`${project.title} — ${project.subtitle}`}
            width={640}
            height={380}
            className="absolute inset-0 w-full h-full object-cover object-center select-none transition-transform duration-700 ease-apple group-hover:scale-105"
            loading="lazy"
          />

          {/* Tailored Subtle Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t ${
              isEngineering
                ? 'from-black/85 via-black/40 via-55% to-transparent'
                : project.gradientOverlay
            } pointer-events-none transition-opacity duration-500`}
          />

          {/* TOP BAR: Number Badge & Direct Indicator */}
          <div className="relative z-10 flex items-center justify-between w-full">
            <span
              className={`px-2 py-0.5 rounded-md text-[11px] font-mono font-bold shadow-xs tracking-wider ${
                isBain
                  ? 'bg-black/75 text-white border border-black/20'
                  : 'bg-black/65 backdrop-blur-md text-white border border-white/20'
              }`}
            >
              {project.number}
            </span>
            <div
              className={`w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full flex items-center justify-center transition-all duration-300 ease-apple shadow-xs ${
                isBain
                  ? 'bg-black/75 hover:bg-black/90 text-white border border-black/20 group-hover:bg-brand group-hover:text-white'
                  : 'bg-black/65 hover:bg-black/85 backdrop-blur-md text-white border border-white/20 group-hover:bg-white group-hover:text-black'
              }`}
            >
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 ease-apple group-hover:translate-x-[1.5px] group-hover:-translate-y-[1.5px]"
              />
            </div>
          </div>

          {/* BOTTOM OF BANNER */}
          {isEngineering ? (
            /* ── In-Photo Titles & Taglines for Engineering Projects ── */
            <div className="relative z-10 flex flex-col text-left">
              <h3 className="text-[1.12rem] sm:text-[1.22rem] font-semibold text-white tracking-[-0.02em] leading-tight mb-0.5 drop-shadow-md transition-transform duration-300 ease-apple group-hover:translate-x-1">
                {project.title}
              </h3>

              <p className="text-[11.5px] sm:text-[12px] font-normal text-white/90 leading-snug mb-1 drop-shadow-sm line-clamp-1">
                {project.subtitle}
              </p>

              <div className="inline-flex items-center gap-1.5 text-[10.5px] font-medium text-white/95 group-hover:text-white transition-colors duration-200">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                  <MousePointerClick size={10.5} className="text-white/90 group-hover:scale-110 transition-transform" />
                  <span>Explore</span>
                  <ArrowUpRight size={11} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          ) : (
            /* ── Clean bottom pill for Case Studies ── */
            <div className="relative z-10 self-start">
              <span
                className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-mono font-medium shadow-xs transition-all duration-300 ${
                  isBain
                    ? 'bg-black/75 hover:bg-black/90 text-white border border-black/20 group-hover:bg-brand'
                    : 'bg-black/65 hover:bg-black/85 backdrop-blur-md text-white border border-white/20 group-hover:border-white/40'
                }`}
              >
                <MousePointerClick size={10.5} className="text-white/90 group-hover:scale-110 transition-transform" />
                <span>Tap to know more</span>
              </span>
            </div>
          )}
        </div>

        {/* ── 2. EDITORIAL DETAILS UNDER CARD ── */}
        <div className="flex flex-col flex-1 px-0.5">
          {/* Title & Number */}
          <div className="flex items-baseline gap-2 mb-0.5">
            <span className="text-[11.5px] font-mono font-medium text-fg-tertiary">
              {project.number}
            </span>
            <h4
              onClick={() => onSelectProject && onSelectProject(project)}
              className="text-[1.12rem] sm:text-[1.18rem] font-semibold text-fg-primary tracking-[-0.02em] cursor-pointer hover:text-brand transition-colors duration-200"
            >
              {project.title}
            </h4>
          </div>

          {/* Subtitle */}
          <p className="text-[12px] sm:text-[12.5px] text-fg-secondary font-medium mb-1.5 min-h-[1.15rem]">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="text-[11.5px] sm:text-[12px] text-fg-secondary leading-relaxed mb-3 flex-1 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-bg-secondary text-fg-secondary border border-sep-standard/80 shadow-2xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Highlight Metric Row */}
          <div className="pt-2 border-t border-sep-standard/60 text-[10.5px] font-mono text-fg-tertiary">
            {project.highlight}
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="w-full select-none py-8 md:py-14 bg-bg-primary">
      <div className="container-content max-w-5xl mx-auto space-y-14 md:space-y-20 px-4 sm:px-6">
        
        {/* ── SECTION 1: ENGINEERING SYSTEMS (ABOVE) ── */}
        <section id="engineering-systems" className="space-y-6 sm:space-y-8">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center">
            <span className="text-[11.5px] font-mono font-medium text-brand uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Cpu size={13} />
              <span>01 / Systems & Infrastructure</span>
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(1.9rem,3.4vw,2.75rem)] font-semibold text-fg-primary tracking-[-0.03em] leading-tight mb-2"
            >
              Engineering Systems
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-[14px] sm:text-[15px] text-fg-secondary font-medium tracking-[-0.01em] max-w-xl"
            >
              Production architectures, full-stack operational platforms, and low-latency semantic search engines built from first principles.
            </motion.p>
          </div>

          {/* 3-Column / Responsive 2-Col Grid for Engineering Systems */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            {engineeringProjects.map((project, index) => renderProjectCard(project, index, true))}
          </div>
        </section>

        {/* ── SECTION 2: CASE STUDIES & QUANTITATIVE ANALYSIS (SCROLL DOWN) ── */}
        <section id="case-studies" className="space-y-6 sm:space-y-8 pt-7 border-t border-sep-standard/60">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center">
            <span className="text-[11.5px] font-mono font-medium text-brand uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <LineChart size={13} />
              <span>02 / Competitive & Quantitative Strategy</span>
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(1.9rem,3.4vw,2.75rem)] font-semibold text-fg-primary tracking-[-0.03em] leading-tight mb-2"
            >
              Case Studies & Quantitative Analysis
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-[14px] sm:text-[15px] text-fg-secondary font-medium tracking-[-0.01em] max-w-xl"
            >
              National finalist ML forecasting pipelines modeling enterprise hardware demand, and strategic wearable expansion blueprints.
            </motion.p>
          </div>

          {/* 2-Column Balanced Grid for Case Studies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 max-w-[660px] mx-auto items-stretch">
            {caseStudyProjects.map((project, index) => renderProjectCard(project, index, false))}
          </div>
        </section>

        {/* ── GITHUB DESTINATION ORBIT ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="pt-10 border-t border-sep-standard/60 flex flex-col items-center text-center"
        >
          <a
            href="https://github.com/Ritesh-panda"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center cursor-pointer"
          >
            {/* Minimal Orbit Icon with Hover Ring */}
            <div className="relative mb-3 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-brand/10 scale-100 group-hover:scale-125 transition-transform duration-500 ease-apple" />
              <div className="w-11 h-11 rounded-full flex items-center justify-center bg-bg-secondary border border-sep-standard text-fg-primary group-hover:border-brand group-hover:text-brand transition-colors duration-300 relative z-10 shadow-elev-1">
                <GitFork size={17} />
              </div>
            </div>

            <h4 className="text-[clamp(1.1rem,2vw,1.38rem)] font-semibold text-fg-primary tracking-[-0.02em] mb-1 group-hover:text-brand transition-colors duration-200">
              Explore my journey
            </h4>

            <p className="text-[12.5px] text-fg-secondary max-w-md mb-2.5 font-normal leading-relaxed">
              Experiments, open-source repositories, and code architectures I've built along the way.
            </p>

            <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-brand group-hover:text-brand-hover transition-colors duration-200">
              View GitHub <ArrowUpRight size={12.5} className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
            </span>
          </a>
        </motion.div>

      </div>
    </div>
  )
}
