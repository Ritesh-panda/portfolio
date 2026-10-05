import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import avatarImg from '../../assets/Stylized 3D Indian Professional Portrait.png'
import { GitHub3DIcon, LinkedIn3DIcon, Gmail3DIcon } from '../common/Social3DIcons'
import { AmazonLogo, CiscoLogo, BainLogo } from '../common/CompanyLogos'

/**
 * HeroSection — Centered Editorial Layout with Adaptive Navigation & 3D Socials
 * Perfectly adapts across all laptops (100%/125%/150% zoom, 1366px to 4K), tablets, and mobiles with zero overlap.
 */
export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center select-none bg-transparent overflow-x-hidden px-4 sm:px-6 md:px-10 lg:px-12 py-10 sm:py-12 xl:py-16">
      <div className="w-full max-w-6xl mx-auto flex flex-col xl:flex-row items-center justify-center xl:justify-between gap-8 sm:gap-10 xl:gap-14 relative">
        
        {/* ── 1. CENTER / PRIMARY EDITORIAL CONTENT ── */}
        <div className="flex flex-col items-center text-center w-full max-w-2xl xl:max-w-3xl mx-auto">
          {/* 3D AVATAR (RESPONSIVE SCALING & SEO ALT) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-3 sm:mb-4 flex items-center justify-center"
          >
            <div className="w-[140px] h-[140px] sm:w-[190px] sm:h-[190px] md:w-[230px] md:h-[230px] rounded-full overflow-hidden flex items-center justify-center ring-1 ring-sep-subtle shadow-elev-2">
              <img
                src={avatarImg}
                alt="Ritesh Ranjan Panda — AI/ML Engineer & Product-Minded Builder"
                width={230}
                height={230}
                className="w-full h-full object-cover object-top select-none"
                loading="eager"
              />
            </div>
          </motion.div>

          {/* NAME (H1 CANONICAL IDENTIFIER) */}
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(1.75rem,6.5vw,2.5rem)] sm:text-[clamp(2.4rem,4.2vw,3.8rem)] md:text-[54px] lg:text-[62px] font-bold tracking-[-0.035em] text-fg-primary leading-[1.1] mb-1.5 sm:mb-2 px-1 break-words"
          >
            Ritesh Ranjan Panda
          </motion.h1>

          {/* PRIMARY IDENTITY */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(1.15rem,4.2vw,1.45rem)] sm:text-[clamp(1.35rem,2.2vw,1.85rem)] md:text-[26px] lg:text-[29px] font-semibold text-brand tracking-[-0.02em] mb-1.5 sm:mb-2"
          >
            AI/ML Engineer & Product-Minded Builder
          </motion.div>

          {/* SUPPORTING DISCIPLINES */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12.5px] sm:text-[clamp(0.95rem,1.4vw,1.18rem)] md:text-[17px] text-fg-secondary font-medium tracking-[-0.01em] mb-2 sm:mb-3 px-2"
          >
            AI Systems <span className="text-sep-standard mx-1.5 sm:mx-2">·</span> Research <span className="text-sep-standard mx-1.5 sm:mx-2">·</span> Product Thinking
          </motion.p>

          {/* NATURAL CONTEXT & PHILOSOPHY TAGLINE */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-1.5 mb-5 sm:mb-6 max-w-2xl px-3"
          >
            <p className="text-[13px] sm:text-[15px] md:text-[16.5px] text-fg-secondary leading-relaxed font-normal">
              Computer Science & Business Systems at VIT. Turning ambiguous problems into reliable, high-performance technology.
            </p>
            <p className="text-[12.5px] sm:text-[14px] md:text-[15px] text-fg-tertiary italic font-normal">
              "Research when the answer isn't known. Engineer when it is. Build when it matters."
            </p>
          </motion.div>

          {/* ACHIEVEMENT PILLS (RESPONSIVE NO-OVERFLOW WRAP) */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.46, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center gap-2 sm:gap-2.5 w-full max-w-md sm:max-w-2xl px-1"
          >
            {/* Top Row: Amazon & Cisco */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 w-full">
              {/* Amazon ML Summer School */}
              <div className="inline-flex items-center justify-center gap-2.5 px-3.5 py-2 sm:px-4.5 sm:py-2.5 rounded-full bg-bg-secondary/95 border border-sep-standard shadow-2xs hover:border-brand/40 hover:bg-bg-secondary transition-all w-full sm:w-auto">
                <AmazonLogo className="w-5 h-5 sm:w-[22px] sm:h-[22px] shrink-0 rounded-[4px]" />
                <span className="text-[12px] sm:text-[13.5px] font-medium text-fg-secondary whitespace-normal sm:whitespace-nowrap text-center">
                  Selected @ <strong className="text-fg-primary font-semibold">Amazon</strong> ML Summer School ’26
                </span>
              </div>

              {/* Cisco Champions League */}
              <div className="inline-flex items-center justify-center gap-2.5 px-3.5 py-2 sm:px-4.5 sm:py-2.5 rounded-full bg-bg-secondary/95 border border-sep-standard shadow-2xs hover:border-brand/40 hover:bg-bg-secondary transition-all w-full sm:w-auto">
                <CiscoLogo className="w-5 h-5 sm:w-[22px] sm:h-[22px] shrink-0 rounded-[4px]" />
                <span className="text-[12px] sm:text-[13.5px] font-medium text-fg-secondary whitespace-normal sm:whitespace-nowrap text-center">
                  Rank 8 Finalist @ <strong className="text-fg-primary font-semibold">Cisco</strong> Forecast League ’26
                </span>
              </div>
            </div>

            {/* Bottom Row: Bain & Company */}
            <div className="flex items-center justify-center w-full">
              <div className="inline-flex items-center justify-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-bg-secondary/95 border border-sep-standard shadow-2xs hover:border-brand/40 hover:bg-bg-secondary transition-all w-full sm:w-auto">
                <BainLogo className="h-5 sm:h-[24px] w-auto max-w-[85px] sm:max-w-[95px] shrink-0" />
                <span className="text-[12px] sm:text-[13.5px] font-medium text-fg-secondary whitespace-normal sm:whitespace-nowrap text-center">
                  Semifinalist @ <strong className="text-fg-primary font-semibold">Bain</strong> BrAINWARS ’26
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── 2. ADAPTIVE NAVIGATION & 3D SOCIALS ── */}
        {/* On Mobile/Tablet: Centered 2x2 grid below content. On Desktop (xl+): Sleek right column */}
        <div className="w-full max-w-xs sm:max-w-sm xl:w-60 flex flex-col items-center xl:items-end shrink-0 mt-4 xl:mt-0 px-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col gap-3 items-center xl:items-end"
          >
            {/* Centered 3D Brand Logos (GitHub, LinkedIn, Gmail) */}
            <div className="flex items-center justify-center xl:justify-between gap-5 sm:gap-6 xl:gap-0 w-full max-w-[190px] xl:max-w-none px-3 pb-0.5">
              <a
                href="https://github.com/Ritesh-panda"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                aria-label="GitHub Profile"
                className="group cursor-pointer flex items-center justify-center transform hover:scale-105 transition-transform"
              >
                <GitHub3DIcon size={36} />
              </a>
              <a
                href="https://linkedin.com/in/riteshpanda17"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
                className="group cursor-pointer flex items-center justify-center transform hover:scale-105 transition-transform"
              >
                <LinkedIn3DIcon size={36} />
              </a>
              <a
                href="mailto:riteshpanda.work@gmail.com"
                title="Email via Gmail"
                aria-label="Email via Gmail"
                className="group cursor-pointer flex items-center justify-center transform hover:scale-105 transition-transform"
              >
                <Gmail3DIcon size={36} />
              </a>
            </div>

            {/* Destination Navigation Buttons: 2x2 Grid on Mobile/Tablet, Vertical Stack on xl+ */}
            <div className="grid grid-cols-2 xl:grid-cols-1 gap-2 sm:gap-2.5 w-full">
              <Link
                to="/about"
                className="inline-flex items-center justify-between gap-1.5 xl:gap-3 w-full px-3.5 sm:px-4.5 py-2.5 sm:py-3 rounded-full bg-fg-primary text-bg-primary font-semibold text-[13.5px] sm:text-[14.5px] hover:opacity-90 transition-all duration-200 shadow-sm group cursor-pointer"
              >
                <span>About</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center justify-between gap-1.5 xl:gap-3 w-full px-3.5 sm:px-4.5 py-2.5 sm:py-3 rounded-full bg-bg-secondary text-fg-primary border border-sep-standard hover:border-brand hover:text-brand transition-all duration-200 shadow-xs group cursor-pointer text-[13.5px] sm:text-[14.5px] font-semibold"
              >
                <span>Selected Work</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
              </Link>
              <Link
                to="/achievements"
                className="inline-flex items-center justify-between gap-1.5 xl:gap-3 w-full px-3.5 sm:px-4.5 py-2.5 sm:py-3 rounded-full bg-bg-secondary text-fg-primary border border-sep-standard hover:border-brand hover:text-brand transition-all duration-200 shadow-xs group cursor-pointer text-[13.5px] sm:text-[14.5px] font-semibold"
              >
                <span>Achievements</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
              </Link>
              <Link
                to="/research"
                className="inline-flex items-center justify-between gap-1.5 xl:gap-3 w-full px-3.5 sm:px-4.5 py-2.5 sm:py-3 rounded-full bg-bg-secondary text-fg-secondary border border-sep-standard hover:border-brand hover:text-brand transition-all duration-200 shadow-xs group cursor-pointer text-[13.5px] sm:text-[14.5px] font-semibold"
              >
                <span>Research</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  )
}

