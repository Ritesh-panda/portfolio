import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import avatarImg from '../../assets/Stylized 3D Indian Professional Portrait.png'
import { GitHub3DIcon, LinkedIn3DIcon, Gmail3DIcon } from '../common/Social3DIcons'
import { AmazonLogo, CiscoLogo, BainLogo } from '../common/CompanyLogos'

/**
 * HeroSection — Centered Editorial Layout with Floating Right Navigation & 3D Socials
 * Fully responsive on mobile, tablet, laptop, and desktop without horizontal overflow or text clipping.
 */
export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen lg:h-screen lg:min-h-[660px] lg:max-h-[1080px] flex items-center justify-center select-none bg-bg-primary overflow-x-hidden overflow-y-auto lg:overflow-hidden px-3 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-0">
      <div className="w-full max-w-[1440px] mx-auto relative flex flex-col items-center justify-center lg:-translate-y-2">
        
        {/* ── CENTER EDITORIAL CONTENT ── */}
        <div className="flex flex-col items-center text-center w-full max-w-5xl mx-auto px-1 sm:px-2">
          {/* 1. 3D AVATAR (RESPONSIVE SCALING) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-2.5 sm:mb-3.5 flex items-center justify-center"
          >
            <div className="w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden flex items-center justify-center ring-1 ring-sep-subtle shadow-elev-2">
              <img
                src={avatarImg}
                alt="Ritesh Ranjan Panda"
                className="w-full h-full object-cover object-top select-none"
                loading="eager"
              />
            </div>
          </motion.div>

          {/* 2. NAME (FLUID AND ADAPTIVE: FITS ALL MOBILES) */}
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(1.85rem,7.5vw,2.75rem)] sm:text-[clamp(2.7rem,4.8vw,4.5rem)] md:text-[70px] lg:text-[76px] font-bold tracking-[-0.035em] text-fg-primary leading-[1.08] sm:whitespace-nowrap mb-1.5 sm:mb-2.5 px-1"
          >
            Ritesh Ranjan Panda
          </motion.h1>

          {/* 3. PRIMARY ROLE */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(1.15rem,4.5vw,1.65rem)] sm:text-[clamp(1.45rem,2.4vw,2rem)] md:text-[30px] lg:text-[33px] font-semibold text-brand tracking-[-0.02em] mb-1.5 sm:mb-2.5"
          >
            AI/ML Engineer
          </motion.div>

          {/* 4. SUPPORTING DISCIPLINES */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12.5px] sm:text-[clamp(1.05rem,1.6vw,1.3rem)] md:text-[19px] lg:text-[21px] text-fg-secondary font-medium tracking-[-0.01em] mb-3 sm:mb-4.5 px-2"
          >
            AI Systems <span className="text-sep-standard mx-1.5 sm:mx-2">·</span> Research <span className="text-sep-standard mx-1.5 sm:mx-2">·</span> Product Thinking
          </motion.p>

          {/* 5. PHILOSOPHY TAGLINE */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-[13px] sm:text-[17px] md:text-[21px] lg:text-[22.5px] text-fg-secondary max-w-3xl leading-relaxed font-normal mb-5 sm:mb-7 px-3 sm:px-4"
          >
            Research when the answer isn't known. Engineer when it is. Build when it matters.
          </motion.p>

          {/* 6. ACHIEVEMENT PILLS (RESPONSIVE NO-OVERFLOW WRAP) */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.46, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center gap-2 sm:gap-3 w-full max-w-sm sm:max-w-4xl px-2"
          >
            {/* Top Row: Amazon & Cisco */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 w-full">
              {/* Amazon ML Summer School */}
              <div className="inline-flex items-center justify-center gap-2.5 sm:gap-3 px-3.5 py-2 sm:px-6 sm:py-3 rounded-full bg-bg-secondary/95 border border-sep-standard shadow-2xs hover:border-brand/40 hover:bg-bg-secondary transition-all w-full sm:w-auto">
                <AmazonLogo className="w-5 h-5 sm:w-[26px] sm:h-[26px] shrink-0 rounded-[4px]" />
                <span className="text-[12px] sm:text-[14.5px] md:text-[15.5px] font-medium text-fg-secondary whitespace-normal sm:whitespace-nowrap text-center">
                  Selected @ <strong className="text-fg-primary font-semibold">Amazon</strong> ML Summer School ’26
                </span>
              </div>

              {/* Cisco Champions League */}
              <div className="inline-flex items-center justify-center gap-2.5 sm:gap-3 px-3.5 py-2 sm:px-6 sm:py-3 rounded-full bg-bg-secondary/95 border border-sep-standard shadow-2xs hover:border-brand/40 hover:bg-bg-secondary transition-all w-full sm:w-auto">
                <CiscoLogo className="w-5 h-5 sm:w-[26px] sm:h-[26px] shrink-0 rounded-[4px]" />
                <span className="text-[12px] sm:text-[14.5px] md:text-[15.5px] font-medium text-fg-secondary whitespace-normal sm:whitespace-nowrap text-center">
                  Rank 8 Finalist @ <strong className="text-fg-primary font-semibold">Cisco</strong> Forecast League ’26
                </span>
              </div>
            </div>

            {/* Bottom Row: Bain & Company */}
            <div className="flex items-center justify-center w-full">
              <div className="inline-flex items-center justify-center gap-2.5 sm:gap-3 px-4 py-2 sm:px-7 sm:py-3 rounded-full bg-bg-secondary/95 border border-sep-standard shadow-2xs hover:border-brand/40 hover:bg-bg-secondary transition-all w-full sm:w-auto">
                <BainLogo className="h-5 sm:h-[30px] w-auto max-w-[90px] sm:max-w-[105px] shrink-0" />
                <span className="text-[12px] sm:text-[14.5px] md:text-[15.5px] font-medium text-fg-secondary whitespace-normal sm:whitespace-nowrap text-center">
                  Semifinalist @ <strong className="text-fg-primary font-semibold">Bain</strong> BrAINWARS ’26
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── 7. RESPONSIVE NAVIGATION & 3D SOCIALS ── */}
        {/* Mobile/Tablet: Centered 2x2 grid. Desktop (lg+): Fixed right vertical stack */}
        <div className="mt-6 lg:mt-0 lg:fixed lg:right-2 xl:right-5 2xl:right-8 lg:top-[58%] lg:-translate-y-1/2 z-30 flex flex-col items-center lg:items-end w-full max-w-xs sm:max-w-sm lg:w-64 px-2">
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col gap-3 items-center lg:items-end"
          >
            {/* Centered 3D Brand Logos (GitHub, LinkedIn, Gmail) */}
            <div className="flex items-center justify-center lg:justify-between gap-5 sm:gap-6 lg:gap-0 w-full max-w-[190px] lg:max-w-none px-3 pb-0.5">
              <a
                href="https://github.com/Ritesh-panda"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                aria-label="GitHub Profile"
                className="group cursor-pointer flex items-center justify-center transform hover:scale-105 transition-transform"
              >
                <GitHub3DIcon size={38} />
              </a>
              <a
                href="https://linkedin.com/in/riteshpanda17"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
                className="group cursor-pointer flex items-center justify-center transform hover:scale-105 transition-transform"
              >
                <LinkedIn3DIcon size={38} />
              </a>
              <a
                href="mailto:riteshpanda.work@gmail.com"
                title="Email via Gmail"
                aria-label="Email via Gmail"
                className="group cursor-pointer flex items-center justify-center transform hover:scale-105 transition-transform"
              >
                <Gmail3DIcon size={38} />
              </a>
            </div>

            {/* Destination Navigation Buttons: 2x2 Grid on Mobile/Tablet, Vertical Stack on Desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-2.5 w-full">
              <Link
                to="/about"
                className="inline-flex items-center justify-between gap-1.5 lg:gap-4 w-full px-3.5 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-3.5 rounded-full bg-fg-primary text-bg-primary font-semibold text-[13.5px] sm:text-[15px] lg:text-[17px] hover:opacity-90 transition-all duration-200 shadow-sm group cursor-pointer"
              >
                <span>About</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center justify-between gap-1.5 lg:gap-4 w-full px-3.5 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-3.5 rounded-full bg-bg-secondary text-fg-primary border border-sep-standard hover:border-brand hover:text-brand transition-all duration-200 shadow-xs group cursor-pointer text-[13.5px] sm:text-[15px] lg:text-[17px] font-semibold"
              >
                <span>Selected Work</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
              </Link>
              <Link
                to="/achievements"
                className="inline-flex items-center justify-between gap-1.5 lg:gap-4 w-full px-3.5 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-3.5 rounded-full bg-bg-secondary text-fg-primary border border-sep-standard hover:border-brand hover:text-brand transition-all duration-200 shadow-xs group cursor-pointer text-[13.5px] sm:text-[15px] lg:text-[17px] font-semibold"
              >
                <span>Achievements</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
              </Link>
              <Link
                to="/research"
                className="inline-flex items-center justify-between gap-1.5 lg:gap-4 w-full px-3.5 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-3.5 rounded-full bg-bg-secondary text-fg-secondary border border-sep-standard hover:border-brand hover:text-brand transition-all duration-200 shadow-xs group cursor-pointer text-[13.5px] sm:text-[15px] lg:text-[17px] font-semibold"
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
