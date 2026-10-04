import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  Trophy,
  X,
  ArrowRight,
  MousePointerClick
} from 'lucide-react'
import { AmazonLogo, CiscoLogo, BainLogo } from '../components/common/CompanyLogos'
import bainImg from '../assets/bain.png'
import ciscoImg from '../assets/cisco.png'
import amzImg from '../assets/amz.png'

export default function AchievementsPage() {
  const [layer2Modal, setLayer2Modal] = useState<'bain' | 'cisco' | 'amazon' | null>(null)
  const [layer3Modal, setLayer3Modal] = useState<'bain' | 'cisco' | 'amazon' | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-full select-none pt-20 sm:pt-24 pb-20 md:pb-28 bg-bg-primary text-fg-primary"
    >
      <div className="container-content max-w-6xl mx-auto space-y-12 sm:space-y-14 px-4 sm:px-6">
        
        {/* ── 1. HEADER & IDENTITY ── */}
        <div className="flex flex-col items-center text-center">
          <span className="text-[12.5px] font-mono font-medium text-brand uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Trophy size={14} />
            <span>Competitive Milestones</span>
          </span>
          <h1 className="text-[clamp(2.4rem,4.5vw,3.6rem)] font-semibold text-fg-primary tracking-[-0.035em] leading-tight mb-3">
            Achievements & Case Studies
          </h1>
          <p className="text-[15.5px] sm:text-[17px] text-fg-secondary font-medium tracking-[-0.01em] max-w-2xl">
            National competitions, selective technical academies, and strategic case study breakthroughs. Tap any card to explore the full multi-layer breakdown.
          </p>
        </div>

        {/* ── 2. COMPACT 3-COLUMN EDITORIAL CARDS (AMAZON -> BAIN -> CISCO) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          
          {/* ── CARD 01: AMAZON ML SUMMER SCHOOL 2026 ── */}
          <div className="flex flex-col h-full select-none">
            <div
              onClick={() => setLayer2Modal('amazon')}
              className="group relative w-full aspect-[16/9.5] max-h-[220px] rounded-2xl overflow-hidden border border-sep-standard/70 bg-[#FF6100] hover:border-brand hover:shadow-elev-2 transition-all duration-500 ease-apple cursor-pointer flex flex-col justify-between p-3.5 sm:p-4 mb-3.5 shrink-0"
            >
              <img
                src={amzImg}
                alt="Amazon"
                className="absolute inset-0 w-full h-full object-cover object-center select-none transition-transform duration-700 ease-apple group-hover:scale-105"
                loading="lazy"
              />

              <div className="relative z-10 flex items-center justify-between w-full">
                <span className="px-2 py-0.5 rounded-md text-[11px] font-mono font-bold bg-black/60 backdrop-blur-md text-white border border-white/20 shadow-xs tracking-wider">
                  01
                </span>
                <div className="w-6.5 h-6.5 rounded-full flex items-center justify-center bg-black/60 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 transition-all duration-300 ease-apple group-hover:bg-white group-hover:text-black shadow-xs">
                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 ease-apple group-hover:translate-x-[1.5px] group-hover:-translate-y-[1.5px]"
                  />
                </div>
              </div>

              <div className="relative z-10 self-start">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-[10.5px] font-mono font-medium text-white border border-white/20 shadow-xs transition-all duration-300 group-hover:border-white/40">
                  <MousePointerClick size={10.5} className="text-white/90 group-hover:scale-110 transition-transform" />
                  <span>Tap to know more</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col flex-1 px-0.5">
              <div className="flex items-baseline gap-2 mb-0.5">
                <span className="text-[11.5px] font-mono font-medium text-fg-tertiary">01</span>
                <h4
                  onClick={() => setLayer2Modal('amazon')}
                  className="text-[1.12rem] sm:text-[1.18rem] font-semibold text-fg-primary tracking-[-0.02em] cursor-pointer hover:text-brand transition-colors"
                >
                  Amazon ML Summer School
                </h4>
              </div>
              <p className="text-[12px] sm:text-[12.5px] text-fg-secondary font-medium mb-1.5 min-h-[1.15rem]">
                Selected Among 3,000 from 134,000+ Applicants
              </p>
              <p className="text-[11.5px] sm:text-[12px] text-fg-secondary leading-relaxed mb-3 flex-1 line-clamp-3">
                Undergoing intensive technical training across Supervised/Unsupervised Learning, Deep Neural Networks, Sequential Learning, Reinforcement Learning, Generative AI, and Causal Inference.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {['Deep Learning', 'LLMs', 'Reinforcement Learning', 'Causal Inference'].map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-bg-secondary text-fg-secondary border border-sep-standard/80">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-2 border-t border-sep-standard/60 text-[10.5px] font-mono text-fg-tertiary">
                Jul 2026 – Sep 2026 · 134K+ Applicants
              </div>
            </div>
          </div>


          {/* ── CARD 02: BAIN BrAINWARS 2026 ── */}
          <div className="flex flex-col h-full select-none">
            <div
              onClick={() => setLayer2Modal('bain')}
              className="group relative w-full aspect-[16/9.5] max-h-[220px] rounded-2xl overflow-hidden border border-sep-standard/70 bg-white hover:border-brand hover:shadow-elev-2 transition-all duration-500 ease-apple cursor-pointer flex flex-col justify-between p-3.5 sm:p-4 mb-3.5 shrink-0"
            >
              <img
                src={bainImg}
                alt="Bain & Company"
                className="absolute inset-0 w-full h-full object-cover object-center select-none transition-transform duration-700 ease-apple group-hover:scale-105"
                loading="lazy"
              />

              <div className="relative z-10 flex items-center justify-between w-full">
                <span className="px-2 py-0.5 rounded-md text-[11px] font-mono font-bold bg-black/75 backdrop-blur-md text-white border border-black/20 shadow-xs tracking-wider">
                  02
                </span>
                <div className="w-6.5 h-6.5 rounded-full flex items-center justify-center bg-black/75 hover:bg-black/90 backdrop-blur-md text-white border border-black/20 transition-all duration-300 ease-apple group-hover:bg-brand group-hover:text-white shadow-xs">
                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 ease-apple group-hover:translate-x-[1.5px] group-hover:-translate-y-[1.5px]"
                  />
                </div>
              </div>

              <div className="relative z-10 self-start">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/75 hover:bg-black/90 backdrop-blur-md text-[10.5px] font-mono font-medium text-white border border-black/20 shadow-xs transition-all duration-300 group-hover:bg-brand">
                  <MousePointerClick size={10.5} className="text-white/90 group-hover:scale-110 transition-transform" />
                  <span>Tap to know more</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col flex-1 px-0.5">
              <div className="flex items-baseline gap-2 mb-0.5">
                <span className="text-[11.5px] font-mono font-medium text-fg-tertiary">02</span>
                <h4
                  onClick={() => setLayer2Modal('bain')}
                  className="text-[1.12rem] sm:text-[1.18rem] font-semibold text-fg-primary tracking-[-0.02em] cursor-pointer hover:text-brand transition-colors"
                >
                  Bain BrAINWARS 2026
                </h4>
              </div>
              <p className="text-[12px] sm:text-[12.5px] text-fg-secondary font-medium mb-1.5 min-h-[1.15rem]">
                National Semifinalist · Ranked #3 in VIT
              </p>
              <p className="text-[11.5px] sm:text-[12px] text-fg-secondary leading-relaxed mb-3 flex-1 line-clamp-3">
                Developed an India-first expansion, hybrid D2C/gym go-to-market model, and $12M capital allocation for PulseX with 4.5× projected ROI and AI defensibility.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {['Market Strategy', 'GTM', 'Financial ROI', 'PulseAI'].map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-bg-secondary text-fg-secondary border border-sep-standard/80">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-2 border-t border-sep-standard/60 text-[10.5px] font-mono text-fg-tertiary">
                ~$12M Budget · ~4.5× ROI · 8 Teams Selected
              </div>
            </div>
          </div>


          {/* ── CARD 03: CISCO FORECAST LEAGUE 2026 ── */}
          <div className="flex flex-col h-full select-none">
            <div
              onClick={() => setLayer2Modal('cisco')}
              className="group relative w-full aspect-[16/9.5] max-h-[220px] rounded-2xl overflow-hidden border border-sep-standard/70 bg-[#0D274D] hover:border-brand hover:shadow-elev-2 transition-all duration-500 ease-apple cursor-pointer flex flex-col justify-between p-3.5 sm:p-4 mb-3.5 shrink-0"
            >
              <img
                src={ciscoImg}
                alt="Cisco"
                className="absolute inset-0 w-full h-full object-cover object-center select-none transition-transform duration-700 ease-apple group-hover:scale-105"
                loading="lazy"
              />

              <div className="relative z-10 flex items-center justify-between w-full">
                <span className="px-2 py-0.5 rounded-md text-[11px] font-mono font-bold bg-black/60 backdrop-blur-md text-white border border-white/20 shadow-xs tracking-wider">
                  03
                </span>
                <div className="w-6.5 h-6.5 rounded-full flex items-center justify-center bg-black/60 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 transition-all duration-300 ease-apple group-hover:bg-white group-hover:text-black shadow-xs">
                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 ease-apple group-hover:translate-x-[1.5px] group-hover:-translate-y-[1.5px]"
                  />
                </div>
              </div>

              <div className="relative z-10 self-start">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-[10.5px] font-mono font-medium text-white border border-white/20 shadow-xs transition-all duration-300 group-hover:border-white/40">
                  <MousePointerClick size={10.5} className="text-white/90 group-hover:scale-110 transition-transform" />
                  <span>Tap to know more</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col flex-1 px-0.5">
              <div className="flex items-baseline gap-2 mb-0.5">
                <span className="text-[11.5px] font-mono font-medium text-fg-tertiary">03</span>
                <h4
                  onClick={() => setLayer2Modal('cisco')}
                  className="text-[1.12rem] sm:text-[1.18rem] font-semibold text-fg-primary tracking-[-0.02em] cursor-pointer hover:text-brand transition-colors"
                >
                  Cisco Forecast League ’26
                </h4>
              </div>
              <p className="text-[12px] sm:text-[12.5px] text-fg-secondary font-medium mb-1.5 min-h-[1.15rem]">
                National Finalist · Top 3 Across VIT Campuses
              </p>
              <p className="text-[11.5px] sm:text-[12px] text-fg-secondary leading-relaxed mb-3 flex-1 line-clamp-3">
                Engineered a hybrid enterprise demand forecasting architecture combining wide-to-long temporal feature pipelines, ratio modeling, and XGBoost/Random Forest blending.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {['Time Series', 'XGBoost', 'Random Forest', 'WMAPE: 7.5%'].map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-bg-secondary text-fg-secondary border border-sep-standard/80">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-2 border-t border-sep-standard/60 text-[10.5px] font-mono text-fg-tertiary">
                91.47% Accuracy · 7.50% WMAPE · 0.9895 R²
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* ── 3. INTERACTIVE LAYER 2 SCROLL MODAL ── */}
      <AnimatePresence>
        {layer2Modal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/75 backdrop-blur-md overflow-hidden">
            <div
              className="fixed inset-0 -z-10"
              onClick={() => setLayer2Modal(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-5xl xl:max-w-6xl max-h-[90vh] bg-bg-secondary rounded-3xl border border-sep-standard shadow-2xl overflow-hidden flex flex-col relative my-auto select-none"
            >
              {/* Header */}
              <div className="p-6 sm:p-7 border-b border-sep-standard/80 bg-bg-primary/95 backdrop-blur flex items-center justify-between sticky top-0 z-20 shrink-0">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-bg-secondary border border-sep-standard shrink-0 shadow-2xs">
                    {layer2Modal === 'bain' && <BainLogo className="h-6 sm:h-7 w-auto max-w-[90px]" />}
                    {layer2Modal === 'cisco' && <CiscoLogo className="w-7 h-7" />}
                    {layer2Modal === 'amazon' && <AmazonLogo className="w-7 h-7" />}
                  </div>
                  <div>
                    <span className="text-[12px] sm:text-[13px] font-mono font-bold text-brand uppercase tracking-wider block mb-0.5">
                      Case Study Stream · Layer 2
                    </span>
                    <h3 className="text-[1.45rem] sm:text-[1.75rem] font-bold text-fg-primary leading-tight">
                      {layer2Modal === 'bain' && 'Bain BrAINWARS 2026'}
                      {layer2Modal === 'cisco' && 'Cisco Forecast League ’26'}
                      {layer2Modal === 'amazon' && 'Amazon ML Summer School ’26'}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setLayer2Modal(null)}
                  className="p-2.5 rounded-full bg-bg-secondary hover:bg-sep-standard text-fg-secondary hover:text-fg-primary transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 md:p-10 space-y-8 overflow-y-auto flex-1 text-fg-primary">
                
                {/* ── BAIN LAYER 2 ── */}
                {layer2Modal === 'bain' && (
                  <div className="space-y-7">
                    <div className="p-6 sm:p-7 rounded-2xl bg-bg-primary/90 border border-sep-standard/80 border-l-4 border-l-brand flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <span className="text-[12px] font-mono text-brand uppercase font-bold tracking-wider block mb-1.5">
                          Executive Summary
                        </span>
                        <p className="text-[16px] sm:text-[18px] text-fg-primary font-semibold italic leading-relaxed">
                          "Turning an ambiguous growth problem into a defensible AI-led strategy."
                        </p>
                      </div>
                      <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
                        <span className="px-3.5 py-1 rounded-full text-[13px] font-mono font-semibold bg-brand/10 text-brand border border-brand/20">
                          B_TOWN · Team Lead
                        </span>
                        <span className="px-3.5 py-1 rounded-full text-[13px] font-mono font-semibold bg-bg-primary text-fg-primary border border-sep-standard shadow-2xs">
                          Semifinalist
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                      <div className="p-6 rounded-2xl bg-bg-primary/90 border border-sep-standard/80 flex flex-col justify-between hover:border-brand/40 transition-colors space-y-3 shadow-2xs">
                        <div className="space-y-2.5">
                          <div className="flex items-center gap-2.5">
                            <span className="px-3 py-0.5 rounded-md text-[12px] font-mono font-bold bg-brand/10 text-brand border border-brand/20">
                              01
                            </span>
                            <h4 className="text-[16px] sm:text-[17px] font-bold text-fg-primary">The Challenge</h4>
                          </div>
                          <p className="text-[14.5px] sm:text-[15px] text-fg-secondary leading-relaxed">
                            PulseX needed to determine its next growth market, product prioritization, and $12M investment plan with sustainable AI defensibility.
                          </p>
                        </div>
                      </div>

                      <div className="p-6 rounded-2xl bg-bg-primary/90 border border-sep-standard/80 flex flex-col justify-between hover:border-brand/40 transition-colors space-y-3 shadow-2xs">
                        <div className="space-y-2.5">
                          <div className="flex items-center gap-2.5">
                            <span className="px-3 py-0.5 rounded-md text-[12px] font-mono font-bold bg-brand/10 text-brand border border-brand/20">
                              02
                            </span>
                            <h4 className="text-[16px] sm:text-[17px] font-bold text-fg-primary">Market Selection</h4>
                          </div>
                          <p className="text-[14.5px] sm:text-[15px] text-fg-secondary leading-relaxed">
                            Prioritized India over US/UK due to a 28% CAGR wearable surge, low ring penetration, and higher addressable fitness density.
                          </p>
                        </div>
                      </div>

                      <div className="p-6 rounded-2xl bg-bg-primary/90 border border-sep-standard/80 flex flex-col justify-between hover:border-brand/40 transition-colors space-y-3 shadow-2xs">
                        <div className="space-y-2.5">
                          <div className="flex items-center gap-2.5">
                            <span className="px-3 py-0.5 rounded-md text-[12px] font-mono font-bold bg-brand/10 text-brand border border-brand/20">
                              03
                            </span>
                            <h4 className="text-[16px] sm:text-[17px] font-bold text-fg-primary">GTM Model</h4>
                          </div>
                          <p className="text-[14.5px] sm:text-[15px] text-fg-secondary leading-relaxed">
                            Built a hybrid D2C + premium gym partnership distribution model to drive adoption through high-trust fitness communities.
                          </p>
                        </div>
                      </div>

                      <div className="p-6 rounded-2xl bg-bg-primary/90 border border-sep-standard/80 flex flex-col justify-between hover:border-brand/40 transition-colors space-y-3 shadow-2xs">
                        <div className="space-y-2.5">
                          <div className="flex items-center gap-2.5">
                            <span className="px-3 py-0.5 rounded-md text-[12px] font-mono font-bold bg-brand/10 text-brand border border-brand/20">
                              04
                            </span>
                            <h4 className="text-[16px] sm:text-[17px] font-bold text-fg-primary">Financial ROI</h4>
                          </div>
                          <p className="text-[14.5px] sm:text-[15px] text-fg-secondary leading-relaxed">
                            Structured a $12M capital allocation across R&D, GTM, and hardware lines to yield a projected 4.5× ROI.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── CISCO LAYER 2 ── */}
                {layer2Modal === 'cisco' && (
                  <div className="space-y-7">
                    <div className="p-6 sm:p-7 rounded-2xl bg-bg-primary/90 border border-sep-standard/80 border-l-4 border-l-brand flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <span className="text-[12px] font-mono text-brand uppercase font-bold tracking-wider block mb-1.5">
                          Executive Summary
                        </span>
                        <p className="text-[16px] sm:text-[18px] text-fg-primary font-semibold italic leading-relaxed">
                          "National Finalist ML Pipeline & Supply-Chain Time-Series Intelligence."
                        </p>
                      </div>
                      <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
                        <span className="px-3.5 py-1 rounded-full text-[13px] font-mono font-semibold bg-brand/10 text-brand border border-brand/20">
                          Rank #8 Nationally
                        </span>
                        <span className="px-3.5 py-1 rounded-full text-[13px] font-mono font-semibold bg-bg-primary text-fg-primary border border-sep-standard shadow-2xs">
                          500+ Teams
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                      <div className="p-6 rounded-2xl bg-bg-primary/90 border border-sep-standard/80 flex flex-col justify-between hover:border-brand/40 transition-colors space-y-3 shadow-2xs">
                        <div className="space-y-2.5">
                          <div className="flex items-center gap-2.5">
                            <span className="px-3 py-0.5 rounded-md text-[12px] font-mono font-bold bg-brand/10 text-brand border border-brand/20">01</span>
                            <h4 className="text-[16px] sm:text-[17px] font-bold text-fg-primary">The Dataset</h4>
                          </div>
                          <p className="text-[14.5px] sm:text-[15px] text-fg-secondary leading-relaxed">
                            Multi-site hardware logistics demand records with non-linear seasonality and enterprise procurement volatility.
                          </p>
                        </div>
                      </div>

                      <div className="p-6 rounded-2xl bg-bg-primary/90 border border-sep-standard/80 flex flex-col justify-between hover:border-brand/40 transition-colors space-y-3 shadow-2xs">
                        <div className="space-y-2.5">
                          <div className="flex items-center gap-2.5">
                            <span className="px-3 py-0.5 rounded-md text-[12px] font-mono font-bold bg-brand/10 text-brand border border-brand/20">02</span>
                            <h4 className="text-[16px] sm:text-[17px] font-bold text-fg-primary">Feature Pipeline</h4>
                          </div>
                          <p className="text-[14.5px] sm:text-[15px] text-fg-secondary leading-relaxed">
                            Constructed 150+ rolling lag features, exponentially weighted moving statistics, and seasonal Fourier harmonics.
                          </p>
                        </div>
                      </div>

                      <div className="p-6 rounded-2xl bg-bg-primary/90 border border-sep-standard/80 flex flex-col justify-between hover:border-brand/40 transition-colors space-y-3 shadow-2xs">
                        <div className="space-y-2.5">
                          <div className="flex items-center gap-2.5">
                            <span className="px-3 py-0.5 rounded-md text-[12px] font-mono font-bold bg-brand/10 text-brand border border-brand/20">03</span>
                            <h4 className="text-[16px] sm:text-[17px] font-bold text-fg-primary">Model Ensembling</h4>
                          </div>
                          <p className="text-[14.5px] sm:text-[15px] text-fg-secondary leading-relaxed">
                            Weighted blending of tuned XGBoost, LightGBM, CatBoost, and multi-layer Random Forest regressors.
                          </p>
                        </div>
                      </div>

                      <div className="p-6 rounded-2xl bg-bg-primary/90 border border-sep-standard/80 flex flex-col justify-between hover:border-brand/40 transition-colors space-y-3 shadow-2xs">
                        <div className="space-y-2.5">
                          <div className="flex items-center gap-2.5">
                            <span className="px-3 py-0.5 rounded-md text-[12px] font-mono font-bold bg-brand/10 text-brand border border-brand/20">04</span>
                            <h4 className="text-[16px] sm:text-[17px] font-bold text-fg-primary">Results & Metrics</h4>
                          </div>
                          <p className="text-[14.5px] sm:text-[15px] text-fg-secondary leading-relaxed">
                            Achieved 91.47% accuracy, 7.50% WMAPE, and 0.9895 R² score, ranking Top 8 nationwide out of 500+ teams.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── AMAZON LAYER 2 ── */}
                {layer2Modal === 'amazon' && (
                  <div className="space-y-7">
                    <div className="p-6 sm:p-7 rounded-2xl bg-bg-primary/90 border border-sep-standard/80 border-l-4 border-l-brand flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <span className="text-[12px] font-mono text-brand uppercase font-bold tracking-wider block mb-1.5">
                          Executive Summary
                        </span>
                        <p className="text-[16px] sm:text-[18px] text-fg-primary font-semibold italic leading-relaxed">
                          "Top 2% Nationwide Selection for Advanced Machine Learning."
                        </p>
                      </div>
                      <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
                        <span className="px-3.5 py-1 rounded-full text-[13px] font-mono font-semibold bg-brand/10 text-brand border border-brand/20">
                          Selected ~3,000 / 134,000+
                        </span>
                        <span className="px-3.5 py-1 rounded-full text-[13px] font-mono font-semibold bg-bg-primary text-fg-primary border border-sep-standard shadow-2xs">
                          Amazon Scientists
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                      <div className="p-6 rounded-2xl bg-bg-primary/90 border border-sep-standard/80 flex flex-col justify-between hover:border-brand/40 transition-colors space-y-3 shadow-2xs">
                        <div className="space-y-2.5">
                          <div className="flex items-center gap-2.5">
                            <span className="px-3 py-0.5 rounded-md text-[12px] font-mono font-bold bg-brand/10 text-brand border border-brand/20">01</span>
                            <h4 className="text-[16px] sm:text-[17px] font-bold text-fg-primary">Supervised & Unsupervised</h4>
                          </div>
                          <p className="text-[14.5px] sm:text-[15px] text-fg-secondary leading-relaxed">
                            In-depth mathematical foundations across loss landscape optimizations and probabilistic clustering algorithms.
                          </p>
                        </div>
                      </div>

                      <div className="p-6 rounded-2xl bg-bg-primary/90 border border-sep-standard/80 flex flex-col justify-between hover:border-brand/40 transition-colors space-y-3 shadow-2xs">
                        <div className="space-y-2.5">
                          <div className="flex items-center gap-2.5">
                            <span className="px-3 py-0.5 rounded-md text-[12px] font-mono font-bold bg-brand/10 text-brand border border-brand/20">02</span>
                            <h4 className="text-[16px] sm:text-[17px] font-bold text-fg-primary">Deep Neural Nets</h4>
                          </div>
                          <p className="text-[14.5px] sm:text-[15px] text-fg-secondary leading-relaxed">
                            Transformer architectures, attention mechanisms, dimensionality reduction, and sequential learning paradigms.
                          </p>
                        </div>
                      </div>

                      <div className="p-6 rounded-2xl bg-bg-primary/90 border border-sep-standard/80 flex flex-col justify-between hover:border-brand/40 transition-colors space-y-3 shadow-2xs">
                        <div className="space-y-2.5">
                          <div className="flex items-center gap-2.5">
                            <span className="px-3 py-0.5 rounded-md text-[12px] font-mono font-bold bg-brand/10 text-brand border border-brand/20">03</span>
                            <h4 className="text-[16px] sm:text-[17px] font-bold text-fg-primary">Reinforcement & LLMs</h4>
                          </div>
                          <p className="text-[14.5px] sm:text-[15px] text-fg-secondary leading-relaxed">
                            Markov decision processes, reward modeling, policy gradient methods, and generative language model alignment.
                          </p>
                        </div>
                      </div>

                      <div className="p-6 rounded-2xl bg-bg-primary/90 border border-sep-standard/80 flex flex-col justify-between hover:border-brand/40 transition-colors space-y-3 shadow-2xs">
                        <div className="space-y-2.5">
                          <div className="flex items-center gap-2.5">
                            <span className="px-3 py-0.5 rounded-md text-[12px] font-mono font-bold bg-brand/10 text-brand border border-brand/20">04</span>
                            <h4 className="text-[16px] sm:text-[17px] font-bold text-fg-primary">Causal Inference</h4>
                          </div>
                          <p className="text-[14.5px] sm:text-[15px] text-fg-secondary leading-relaxed">
                            Observational data analysis, do-calculus, confounder adjustment, and real-world counterfactual modeling.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom Stable Action Bar */}
              <div className="p-6 sm:p-7 border-t border-sep-standard/80 bg-bg-primary/95 backdrop-blur flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky bottom-0 z-20 shrink-0">
                <div className="flex items-center gap-2 text-fg-secondary text-[13.5px] font-mono">
                  <span>Explore complete comprehensive breakdown</span>
                </div>
                <button
                  onClick={() => {
                    setLayer3Modal(layer2Modal)
                    setLayer2Modal(null)
                  }}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-fg-primary text-bg-primary font-bold text-[15.5px] hover:opacity-90 transition-all shadow-md cursor-pointer group"
                >
                  <span>Read Full Tech Breakdown</span>
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── 4. INTERACTIVE LAYER 3 COMPREHENSIVE CASE STUDY BREAKDOWN MODAL ── */}
      <AnimatePresence>
        {layer3Modal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/80 backdrop-blur-md overflow-hidden">
            <div
              className="fixed inset-0 -z-10"
              onClick={() => setLayer3Modal(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-5xl xl:max-w-6xl max-h-[92vh] bg-bg-primary rounded-3xl border border-sep-standard shadow-2xl overflow-hidden flex flex-col relative my-auto select-none"
            >
              <div className="p-6 sm:p-7 border-b border-sep-standard/80 bg-bg-secondary/95 backdrop-blur flex items-center justify-between sticky top-0 z-20 shrink-0">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-bg-primary border border-sep-standard shrink-0 shadow-2xs">
                    {layer3Modal === 'bain' && <BainLogo className="h-6 sm:h-7 w-auto max-w-[90px]" />}
                    {layer3Modal === 'cisco' && <CiscoLogo className="w-7 h-7" />}
                    {layer3Modal === 'amazon' && <AmazonLogo className="w-7 h-7" />}
                  </div>
                  <div>
                    <span className="text-[12px] sm:text-[13px] font-mono font-bold text-brand uppercase tracking-wider block mb-0.5">
                      Technical Deep Dive · Layer 3 Case Study
                    </span>
                    <h3 className="text-[1.45rem] sm:text-[1.75rem] font-bold text-fg-primary leading-tight">
                      {layer3Modal === 'bain' && 'Bain BrAINWARS 2026 — Comprehensive Strategic Breakdown'}
                      {layer3Modal === 'cisco' && 'Cisco Forecast League ’26 — Architecture & Model Breakdown'}
                      {layer3Modal === 'amazon' && 'Amazon ML Summer School ’26 — Curriculum & Advanced Topics'}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setLayer3Modal(null)}
                  className="p-2.5 rounded-full bg-bg-primary hover:bg-sep-standard text-fg-secondary hover:text-fg-primary transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 sm:p-8 md:p-10 space-y-8 overflow-y-auto flex-1 text-fg-primary text-[15px] sm:text-[16px] leading-relaxed">
                {layer3Modal === 'bain' && (
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <h4 className="text-[1.25rem] font-bold text-fg-primary">1. The Strategic Problem Statement</h4>
                      <p className="text-fg-secondary">
                        For Bain & Company’s BrAINWARS 2026, we were tasked with evaluating PulseX — a high-growth fitness-wearables company with a smart ring, watch, and chest band powered by PulseAI. The challenge was to identify where PulseX should expand next, allocate a limited $12M growth budget, and build defensible AI moats against incumbent giants.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-[1.25rem] font-bold text-fg-primary">2. Market Expansion & Geographic Prioritization</h4>
                      <p className="text-fg-secondary">
                        Through multi-criteria market evaluation (TAM, CAC/LTV, smart ring penetration, fitness ecosystem growth), we prioritized an India-first expansion strategy over Western markets. India offered 28% annual wearable segment growth, high smartphone density, and untapped premium fitness club partnerships.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-[1.25rem] font-bold text-fg-primary">3. Capital Allocation & Financial ROI</h4>
                      <div className="p-5 rounded-2xl bg-bg-secondary/80 border border-sep-standard/80 space-y-2">
                        <p className="font-semibold text-fg-primary">Total Investment: $12.0 Million</p>
                        <ul className="list-disc list-inside space-y-1 text-fg-secondary text-[14.5px]">
                          <li><strong>R&D & PulseAI Engine:</strong> $4.2M (Predictive injury recovery algorithms & federated privacy)</li>
                          <li><strong>Go-To-Market & Partnerships:</strong> $4.8M (Hybrid D2C + top 500 premium gym integrations)</li>
                          <li><strong>Supply Chain & Local Assembly:</strong> $3.0M (Optimized duty structure and unit margins)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {layer3Modal === 'cisco' && (
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <h4 className="text-[1.25rem] font-bold text-fg-primary">1. Problem Formulation & Data Engineering</h4>
                      <p className="text-fg-secondary">
                        The challenge required modeling enterprise multi-site inventory demand across volatile procurement cycles. We transformed sparse, wide temporal demand logs into unified rolling time-series datasets.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-[1.25rem] font-bold text-fg-primary">2. Engineered Feature Architecture (150+ Signals)</h4>
                      <div className="p-5 rounded-2xl bg-bg-secondary/80 border border-sep-standard/80 space-y-2">
                        <ul className="list-disc list-inside space-y-1 text-fg-secondary text-[14.5px]">
                          <li><strong>Rolling Lag Windows:</strong> 7, 14, 28, 60, and 90-day mean, median, skew, and standard deviations.</li>
                          <li><strong>Seasonal Decompositions:</strong> Fourier cyclical embeddings for annual and quarterly contract renewals.</li>
                          <li><strong>Site-Category Interaction Ratios:</strong> Cross-site supply velocity and replenishment ratios.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-[1.25rem] font-bold text-fg-primary">3. Ensemble Architecture & Evaluation</h4>
                      <p className="text-fg-secondary">
                        We developed a multi-stage stacking pipeline blending tuned XGBoost, LightGBM, CatBoost, and multi-layer Random Forests. The system attained a 91.47% test accuracy and 7.50% WMAPE, finishing Rank 8 nationally.
                      </p>
                    </div>
                  </div>
                )}

                {layer3Modal === 'amazon' && (
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <h4 className="text-[1.25rem] font-bold text-fg-primary">1. Selection & Curriculum Overview</h4>
                      <p className="text-fg-secondary">
                        Selected among 3,000 from over 134,000 applicants (~Top 2% nationwide). The program delivers rigorous, industry-grade training led directly by Amazon Principal Scientists.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-[1.25rem] font-bold text-fg-primary">2. Core Technical Modules</h4>
                      <div className="p-5 rounded-2xl bg-bg-secondary/80 border border-sep-standard/80 space-y-2">
                        <ul className="list-disc list-inside space-y-1 text-fg-secondary text-[14.5px]">
                          <li><strong>Deep Learning & Transformers:</strong> Self-attention mechanisms, multi-head representations, and optimization landscapes.</li>
                          <li><strong>Reinforcement Learning:</strong> Policy iterations, Q-learning, deep Q-networks, and reward modeling.</li>
                          <li><strong>Generative AI & LLMs:</strong> Pre-training, fine-tuning, retrieval-grounded generation, and causal inference.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-7 border-t border-sep-standard/80 bg-bg-secondary/95 backdrop-blur flex justify-end sticky bottom-0 z-20 shrink-0">
                <button
                  onClick={() => setLayer3Modal(null)}
                  className="px-6 py-2.5 rounded-full bg-fg-primary text-bg-primary font-semibold text-[15px] hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Close Breakdown
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </motion.div>
  )
}
