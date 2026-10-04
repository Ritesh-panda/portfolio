import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import avatarImg from '../../assets/Stylized 3D Indian Professional Portrait.png'
import { GitHub3DIcon, LinkedIn3DIcon, Gmail3DIcon } from '../common/Social3DIcons'
import { AmazonLogo, CiscoLogo, BainLogo } from '../common/CompanyLogos'

/**
 * HeroSection — Centered Editorial Layout with Floating Right Navigation & 3D Socials
 * 1. 3D Avatar Image (~210-220px)
 * 2. Name in ONE line (56-64px): Ritesh Ranjan Panda
 * 3. Primary Role (24-26px): AI/ML Engineer
 * 4. Supporting Disciplines: Systems & Architecture · Research · Product & Program Thinking
 * 5. Philosophy Tagline (18-19px, One Line on Desktop): Research when the answer isn't known. Engineer when it is. Build when it matters.
 * 6. Achievement Row (Single Horizontal Line, wider pills with clear visible logos & bold accents)
 * 7. Right-Hand Stack: 3D Icons (GitHub, LinkedIn, Gmail) + Navigation Buttons
 */
export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen lg:h-screen lg:min-h-[660px] lg:max-h-[1080px] flex items-center justify-center select-none bg-bg-primary overflow-y-auto lg:overflow-hidden px-4 sm:px-8 lg:px-12 py-10 lg:py-0">
      <div className="w-full max-w-[1440px] mx-auto relative flex flex-col items-center justify-center lg:-translate-y-2">
        
        {/* ── CENTER EDITORIAL CONTENT (ZOOMED-IN, PRECISELY CENTERED) ── */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto px-2">
          {/* 1. 3D AVATAR (PROMINENT & CRISP) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-3 sm:mb-3.5 flex items-center justify-center"
          >
            <div className="w-[215px] h-[215px] sm:w-[245px] sm:h-[245px] md:w-[270px] md:h-[270px] rounded-full overflow-hidden flex items-center justify-center ring-1 ring-sep-subtle shadow-elev-2">
              <img
                src={avatarImg}
                alt="Ritesh Ranjan Panda"
                className="w-full h-full object-cover object-top select-none"
                loading="eager"
              />
            </div>
          </motion.div>

          {/* 2. NAME (REFINED & PROPORTIONATE: 72-76px ON DESKTOP) */}
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.7rem,4.8vw,4.5rem)] md:text-[70px] lg:text-[76px] font-bold tracking-[-0.035em] text-fg-primary leading-[1.06] whitespace-nowrap mb-2 sm:mb-2.5"
          >
            Ritesh Ranjan Panda
          </motion.h1>

          {/* 3. PRIMARY ROLE */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(1.45rem,2.4vw,2rem)] md:text-[30px] lg:text-[33px] font-semibold text-brand tracking-[-0.02em] mb-2 sm:mb-2.5"
          >
            AI/ML Engineer
          </motion.div>

          {/* 4. SUPPORTING DISCIPLINES IN ONE LINE */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(1.05rem,1.6vw,1.3rem)] md:text-[19px] lg:text-[21px] text-fg-secondary font-medium tracking-[-0.01em] mb-4 sm:mb-4.5"
          >
            AI Systems <span className="text-sep-standard mx-2">·</span> Research <span className="text-sep-standard mx-2">·</span> Product Thinking
          </motion.p>

          {/* 5. PHILOSOPHY TAGLINE */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(1.1rem,1.6vw,1.38rem)] md:text-[21px] lg:text-[22.5px] text-fg-secondary max-w-3xl leading-relaxed font-normal mb-6 sm:mb-7 px-4"
          >
            Research when the answer isn't known. Engineer when it is. Build when it matters.
          </motion.p>

          {/* 6. ACHIEVEMENT PILLS (ROW 1: AMAZON & CISCO SIDE-BY-SIDE, ROW 2: BAIN CENTERED) */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.46, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center gap-3 max-w-4xl px-2"
          >
            {/* Top Row: Amazon & Cisco SIDE-BY-SIDE on Tablet/Desktop, Responsive on Mobile */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 flex-wrap lg:flex-nowrap">
              {/* Amazon ML Summer School */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-bg-secondary/95 border border-sep-standard shadow-2xs hover:border-brand/40 hover:bg-bg-secondary transition-all shrink-0">
                <AmazonLogo className="w-6 h-6 sm:w-[26px] sm:h-[26px] shrink-0 rounded-[5px]" />
                <span className="text-[14px] sm:text-[15.5px] font-medium text-fg-secondary whitespace-nowrap">
                  Selected @ <strong className="text-fg-primary font-semibold">Amazon</strong> ML Summer School ’26
                </span>
              </div>

              {/* Cisco Champions League */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-bg-secondary/95 border border-sep-standard shadow-2xs hover:border-brand/40 hover:bg-bg-secondary transition-all shrink-0">
                <CiscoLogo className="w-6 h-6 sm:w-[26px] sm:h-[26px] shrink-0 rounded-[5px]" />
                <span className="text-[14px] sm:text-[15.5px] font-medium text-fg-secondary whitespace-nowrap">
                  Rank 8 Finalist @ <strong className="text-fg-primary font-semibold">Cisco</strong> Forecast League ’26
                </span>
              </div>
            </div>

            {/* Bottom Row: Bain & Company (1 pill centered) */}
            <div className="flex items-center justify-center">
              <div className="inline-flex items-center gap-3 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-bg-secondary/95 border border-sep-standard shadow-2xs hover:border-brand/40 hover:bg-bg-secondary transition-all shrink-0">
                <BainLogo className="h-6 sm:h-[30px] w-auto max-w-[105px] shrink-0" />
                <span className="text-[14px] sm:text-[15.5px] font-medium text-fg-secondary whitespace-nowrap">
                  Semifinalist @ <strong className="text-fg-primary font-semibold">Bain</strong> BrAINWARS ’26
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── 7. RESPONSIVE NAVIGATION & 3D SOCIALS ── */}
        {/* On Mobile/Tablet: Centered compact 2x2 grid below. On Desktop (lg+): Fixed right vertical stack */}
        <div className="mt-7 lg:mt-0 lg:fixed lg:right-2 xl:right-5 2xl:right-8 lg:top-[58%] lg:-translate-y-1/2 z-30 flex flex-col items-center lg:items-end w-full max-w-md lg:w-64 px-2">
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col gap-3.5 items-center lg:items-end"
          >
            {/* Centered 3D Brand Logos (GitHub, LinkedIn, Gmail) */}
            <div className="flex items-center justify-center lg:justify-between gap-6 lg:gap-0 w-full max-w-[200px] lg:max-w-none px-3 pb-1">
              <a
                href="https://github.com/Ritesh-panda"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                aria-label="GitHub Profile"
                className="group cursor-pointer flex items-center justify-center transform hover:scale-105 transition-transform"
              >
                <GitHub3DIcon size={42} />
              </a>
              <a
                href="https://linkedin.com/in/riteshpanda17"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
                className="group cursor-pointer flex items-center justify-center transform hover:scale-105 transition-transform"
              >
                <LinkedIn3DIcon size={42} />
              </a>
              <a
                href="mailto:riteshpanda.work@gmail.com"
                title="Email via Gmail"
                aria-label="Email via Gmail"
                className="group cursor-pointer flex items-center justify-center transform hover:scale-105 transition-transform"
              >
                <Gmail3DIcon size={42} />
              </a>
            </div>

            {/* Destination Navigation Buttons: 2x2 Grid on Mobile/Tablet, Vertical on Desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 w-full">
              <Link
                to="/about"
                className="inline-flex items-center justify-between gap-2 lg:gap-4 w-full px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-3.5 rounded-full bg-fg-primary text-bg-primary font-semibold text-[14.5px] sm:text-[15.5px] lg:text-[17px] hover:opacity-90 transition-all duration-200 shadow-sm group cursor-pointer"
              >
                <span>About</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center justify-between gap-2 lg:gap-4 w-full px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-3.5 rounded-full bg-bg-secondary text-fg-primary border border-sep-standard hover:border-brand hover:text-brand transition-all duration-200 shadow-xs group cursor-pointer text-[14.5px] sm:text-[15.5px] lg:text-[17px] font-semibold"
              >
                <span>Selected Work</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
              </Link>
              <Link
                to="/achievements"
                className="inline-flex items-center justify-between gap-2 lg:gap-4 w-full px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-3.5 rounded-full bg-bg-secondary text-fg-primary border border-sep-standard hover:border-brand hover:text-brand transition-all duration-200 shadow-xs group cursor-pointer text-[14.5px] sm:text-[15.5px] lg:text-[17px] font-semibold"
              >
                <span>Achievements</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
              </Link>
              <Link
                to="/research"
                className="inline-flex items-center justify-between gap-2 lg:gap-4 w-full px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-3.5 rounded-full bg-bg-secondary text-fg-secondary border border-sep-standard hover:border-brand hover:text-brand transition-all duration-200 shadow-xs group cursor-pointer text-[14.5px] sm:text-[15.5px] lg:text-[17px] font-semibold"
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
