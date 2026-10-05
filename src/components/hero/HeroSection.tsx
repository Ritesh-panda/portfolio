import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import avatarImg from '../../assets/Stylized 3D Indian Professional Portrait.png'
import { GitHub3DIcon, LinkedIn3DIcon, Gmail3DIcon } from '../common/Social3DIcons'
import { AmazonLogo, CiscoLogo, BainLogo } from '../common/CompanyLogos'

/**
 * HeroSection — Split Editorial Layout with R-Symbol Header, Left-Aligned Bio & Right Portrait Navigation Stack
 */
export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between select-none bg-transparent overflow-x-hidden px-4 sm:px-6 md:px-10 lg:px-14 py-6 sm:py-8">
      
      {/* ── TOP HEADER WITH 'R' SYMBOL & RIGHT SOCIALS ── */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-6xl mx-auto flex items-center justify-between z-20 pt-2"
      >
        {/* Top Left: Stylized 'R' Monogram Symbol */}
        <Link
          to="/"
          className="group flex items-center gap-3 cursor-pointer"
          title="Ritesh Panda — Home"
          aria-label="Ritesh Panda Home"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-fg-primary text-bg-primary font-bold flex items-center justify-center text-[18px] sm:text-[20px] tracking-tight shadow-md border border-sep-standard/30 group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
            R
          </div>
          <span className="font-bold text-[15px] sm:text-[16px] text-fg-primary tracking-tight hidden sm:inline-block group-hover:text-brand transition-colors duration-200">
            Ritesh Panda
          </span>
        </Link>

        {/* Top Right: 3D Social Icons (GitHub, LinkedIn, Gmail) */}
        <div className="flex items-center gap-3.5 sm:gap-4.5 bg-bg-secondary/70 backdrop-blur-md px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full border border-sep-standard shadow-2xs">
          <a
            href="https://github.com/Ritesh-panda"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            aria-label="GitHub Profile"
            className="group cursor-pointer flex items-center justify-center transform hover:scale-110 transition-transform"
          >
            <GitHub3DIcon size={30} />
          </a>
          <a
            href="https://linkedin.com/in/riteshpanda17"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
            className="group cursor-pointer flex items-center justify-center transform hover:scale-110 transition-transform"
          >
            <LinkedIn3DIcon size={30} />
          </a>
          <a
            href="mailto:riteshpanda.work@gmail.com"
            title="Email via Gmail"
            aria-label="Email via Gmail"
            className="group cursor-pointer flex items-center justify-center transform hover:scale-110 transition-transform"
          >
            <Gmail3DIcon size={30} />
          </a>
        </div>
      </motion.header>

      {/* ── MAIN HERO BODY (SPLIT LEFT TEXT & RIGHT PORTRAIT + NAV) ── */}
      <div className="w-full max-w-6xl mx-auto my-auto py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
        
        {/* ── LEFT COLUMN: NAME, TEXT & ACHIEVEMENTS ── */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* NAME (H1 CANONICAL IDENTIFIER) */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.2rem,5.5vw,3.6rem)] sm:text-[clamp(2.7rem,4.5vw,4.2rem)] font-bold tracking-[-0.035em] text-fg-primary leading-[1.08] mb-2 sm:mb-3 break-words"
          >
            Ritesh Ranjan Panda
          </motion.h1>

          {/* PRIMARY IDENTITY */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(1.2rem,2.8vw,1.75rem)] font-semibold text-brand tracking-[-0.02em] mb-2 sm:mb-3"
          >
            AI/ML Engineer & Product-Minded Builder
          </motion.div>

          {/* SUPPORTING DISCIPLINES */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-[13px] sm:text-[15.5px] text-fg-secondary font-medium tracking-[-0.01em] mb-3 sm:mb-4"
          >
            AI Systems <span className="text-sep-standard mx-1.5">·</span> Research <span className="text-sep-standard mx-1.5">·</span> Product Thinking
          </motion.p>

          {/* CONTEXT & PHILOSOPHY */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2 mb-6 sm:mb-8 max-w-xl"
          >
            <p className="text-[13.5px] sm:text-[15.5px] text-fg-secondary leading-relaxed font-normal">
              Computer Science & Business Systems at VIT. Turning ambiguous problems into reliable, high-performance technology.
            </p>
            <p className="text-[13px] sm:text-[14.5px] text-fg-tertiary italic font-normal">
              "Research when the answer isn't known. Engineer when it is. Build when it matters."
            </p>
          </motion.div>

          {/* ACHIEVEMENT BADGES */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row flex-wrap items-center lg:items-start justify-center lg:justify-start gap-2.5 sm:gap-3 w-full"
          >
            {/* Amazon ML Summer School */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-bg-secondary/95 border border-sep-standard shadow-2xs hover:border-brand/40 hover:bg-bg-secondary transition-all">
              <AmazonLogo className="w-5 h-5 shrink-0 rounded-[4px]" />
              <span className="text-[12px] sm:text-[13px] font-medium text-fg-secondary whitespace-nowrap">
                Selected @ <strong className="text-fg-primary font-semibold">Amazon</strong> ML Summer School ’26
              </span>
            </div>

            {/* Cisco Forecast League */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-bg-secondary/95 border border-sep-standard shadow-2xs hover:border-brand/40 hover:bg-bg-secondary transition-all">
              <CiscoLogo className="w-5 h-5 shrink-0 rounded-[4px]" />
              <span className="text-[12px] sm:text-[13px] font-medium text-fg-secondary whitespace-nowrap">
                Rank 8 Finalist @ <strong className="text-fg-primary font-semibold">Cisco</strong> Forecast League ’26
              </span>
            </div>

            {/* Bain BrAINWARS */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-bg-secondary/95 border border-sep-standard shadow-2xs hover:border-brand/40 hover:bg-bg-secondary transition-all">
              <BainLogo className="h-5 w-auto max-w-[80px] shrink-0" />
              <span className="text-[12px] sm:text-[13px] font-medium text-fg-secondary whitespace-nowrap">
                Semifinalist @ <strong className="text-fg-primary font-semibold">Bain</strong> BrAINWARS ’26
              </span>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN: 3D PORTRAIT & NAVIGATION BARS BELOW IT ── */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center w-full max-w-sm mx-auto">
          {/* 3D PORTRAIT AVATAR (SEAMLESS INVISIBLE ROUNDED SQUARE) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-5 sm:mb-6 flex items-center justify-center"
          >
            <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[240px] md:h-[240px] rounded-[32px] sm:rounded-[38px] overflow-hidden flex items-center justify-center bg-transparent select-none">
              <img
                src={avatarImg}
                alt="Ritesh Ranjan Panda — AI/ML Engineer & Product-Minded Builder"
                width={240}
                height={240}
                className="w-full h-full object-cover object-top select-none rounded-[32px] sm:rounded-[38px] hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
            </div>
          </motion.div>

          {/* NAVIGATION BARS BELOW PORTRAIT */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-2.5 w-full px-2"
          >
            <Link
              to="/about"
              className="inline-flex items-center justify-between w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-fg-primary text-bg-primary font-semibold text-[13.5px] sm:text-[14.5px] hover:opacity-90 transition-all duration-200 shadow-sm group cursor-pointer"
            >
              <span>About</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center justify-between w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-bg-secondary text-fg-primary border border-sep-standard hover:border-brand hover:text-brand transition-all duration-200 shadow-xs group cursor-pointer text-[13.5px] sm:text-[14.5px] font-semibold"
            >
              <span>Selected Work</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
            </Link>
            <Link
              to="/achievements"
              className="inline-flex items-center justify-between w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-bg-secondary text-fg-primary border border-sep-standard hover:border-brand hover:text-brand transition-all duration-200 shadow-xs group cursor-pointer text-[13.5px] sm:text-[14.5px] font-semibold"
            >
              <span>Achievements</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
            </Link>
            <Link
              to="/research"
              className="inline-flex items-center justify-between w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-bg-secondary text-fg-secondary border border-sep-standard hover:border-brand hover:text-brand transition-all duration-200 shadow-xs group cursor-pointer text-[13.5px] sm:text-[14.5px] font-semibold"
            >
              <span>Research</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
            </Link>
          </motion.div>
        </div>

      </div>

      {/* ── BOTTOM SUBTLE FOOTER NOTE / COPYRIGHT ── */}
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between text-[11px] sm:text-[12px] text-fg-tertiary pt-4 border-t border-sep-subtle/50 z-20">
        <span>© {new Date().getFullYear()} Ritesh Ranjan Panda</span>
        <span className="font-mono text-[11px]">AI Systems · Research · Engineering</span>
      </div>

    </div>
  )
}

