import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  Users,
  Mail,
  GitFork,
  Link2,
  Sparkles,
  ExternalLink,
  BookOpen
} from 'lucide-react'

type AboutTab = 'know-me' | 'education' | 'experience' | 'certifications' | 'leadership'

const TABS: { id: AboutTab; label: string; icon: React.ComponentType<{ size?: number; className?: string }> }[] = [
  { id: 'know-me', label: 'Know Me Better', icon: BookOpen },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'certifications', label: 'Certifications', icon: ShieldCheck },
  { id: 'leadership', label: 'Leadership', icon: Users },
]

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<AboutTab>('know-me')

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-full select-none pt-16 sm:pt-20 pb-20 md:pb-28 bg-bg-primary text-fg-primary"
    >
      <div className="container-content max-w-6xl mx-auto space-y-10 sm:space-y-12 px-4 sm:px-6">
        
        {/* ── 1. HEADER & IDENTITY ── */}
        <div className="flex flex-col items-center text-center">
          <span className="text-[12.5px] font-mono font-medium text-brand uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Sparkles size={14} />
            <span>Profile & Background</span>
          </span>
          <h1 className="text-[clamp(2.4rem,4.5vw,3.6rem)] font-semibold text-fg-primary tracking-[-0.035em] leading-tight mb-2">
            About Me
          </h1>
          <p className="text-[15px] sm:text-[16.5px] text-fg-secondary font-medium tracking-[-0.01em]">
            Ritesh Ranjan Panda — AI/ML Engineer · Systems & Architecture · Product & Program Thinking
          </p>
        </div>

        {/* ── 2. APPLE-STYLE SEGMENTED TAB SWITCHER (STICKY BELOW BACK-TO-HOME) ── */}
        <div className="sticky top-14 sm:top-20 z-40 flex items-center justify-center py-2 pointer-events-auto max-w-full px-1">
          <div className="p-1 sm:p-1.5 rounded-full bg-bg-secondary/95 backdrop-blur-md border border-sep-standard shadow-sm flex items-center gap-1 max-w-full overflow-x-auto scrollbar-none px-1.5 sm:px-2">
            {TABS.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[12px] sm:text-[13.5px] font-medium whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-fg-primary text-bg-primary shadow-xs'
                      : 'text-fg-secondary hover:text-fg-primary hover:bg-bg-primary/60'
                  }`}
                >
                  <Icon size={13.5} className={isActive ? 'text-bg-primary' : 'text-fg-tertiary'} />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* ── 3. TAB CONTENT (UP-TO-DOWN NATURAL SCROLL) ── */}
        <div className="min-h-[420px]">
          <AnimatePresence mode="wait">
            
            {/* TAB: KNOW ME BETTER */}
            {activeTab === 'know-me' && (
              <motion.div
                key="know-me"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="flex items-center gap-2 pb-3 border-b border-sep-standard/60">
                  <BookOpen size={19} className="text-brand" />
                  <h2 className="text-h3 font-semibold text-fg-primary tracking-[-0.02em]">
                    Know Me Better
                  </h2>
                </div>

                <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-bg-secondary/70 border border-sep-standard/80 space-y-6 text-fg-secondary text-[15.5px] sm:text-[16.5px] leading-relaxed">
                  <p>
                    I’m <strong className="text-fg-primary font-semibold">Ritesh Ranjan Panda</strong> — an AI/ML engineer and product-minded builder who enjoys turning ambiguous problems into useful technology.
                  </p>
                  <p>
                    I’m interested in the space where <strong className="text-fg-primary font-semibold">AI, product thinking, and systems engineering</strong> come together. I like starting with the problem rather than the technology — understanding who it is for, what actually needs to be solved, exploring what is technically possible, and then turning that understanding into a reliable, high-performance product.
                  </p>
                  <p>
                    As a <strong className="text-fg-primary font-semibold">Computer Science and Business Systems (CSBS)</strong> student at VIT, my education naturally sits between two worlds: building technology and understanding the distributed systems, user dynamics, and business problems around it. That has shaped the way I approach engineering. I don’t see engineering as simply writing code; I see it as understanding a problem deeply enough to make the right technical, algorithmic, and architectural decisions.
                  </p>
                  <p>
                    My work spans <strong className="text-fg-primary font-semibold">AI/ML engineering, retrieval architectures, intelligent agents, applied research, and end-to-end technical execution</strong>. I enjoy working through ambiguity, learning new domains quickly, experimenting with ideas, and taking ownership from initial concept through implementation and production refinement.
                  </p>
                  <p>
                    I’ve had the opportunity to test this mindset in competitive national environments — being selected for <strong className="text-fg-primary font-semibold">Amazon ML Summer School 2026</strong> (~Top 2% nationwide), reaching the national finals / Top 10 of <strong className="text-fg-primary font-semibold">Cisco Forecast League 2026</strong> (Rank 8), and becoming a national semifinalist at <strong className="text-fg-primary font-semibold">Bain BrAINWARS 2026</strong>. I’ve also pursued applied AI research and continue to explore how intelligent systems can solve meaningful real-world problems.
                  </p>
                  <div className="pt-4 border-t border-sep-standard/60 text-fg-primary font-medium italic text-[16px] sm:text-[17px]">
                    "What I bring is the combination of technical curiosity, product thinking, ownership, and execution — asking why before how, working across different perspectives, and moving an idea through the journey from 'could this work?' → 'should we build it?' → 'how do we make it useful?'"
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB: EDUCATION */}
            {activeTab === 'education' && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="flex items-center gap-2 pb-3 border-b border-sep-standard/60">
                  <GraduationCap size={19} className="text-brand" />
                  <h2 className="text-h3 font-semibold text-fg-primary tracking-[-0.02em]">
                    Education
                  </h2>
                </div>

                <div className="p-6 md:p-8 rounded-2xl bg-bg-secondary/70 border border-sep-standard/75 hover:border-sep-standard transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-[1.25rem] font-semibold text-fg-primary mb-1">
                        Vellore Institute of Technology (VIT)
                      </h3>
                      <p className="text-[14.5px] font-medium text-brand font-mono">
                        Bachelor of Technology · Computer Science and Business Systems (CSBS)
                      </p>
                      <p className="text-[13px] text-fg-secondary mt-1">
                        Grade: <strong className="text-fg-primary font-semibold">8.84 CGPA</strong>
                      </p>
                    </div>
                    <span className="px-3.5 py-1 rounded-md text-[13px] font-mono font-semibold bg-bg-secondary text-fg-primary border border-sep-standard shrink-0 shadow-2xs">
                      Sep 2023 – Sep 2027
                    </span>
                  </div>

                  <p className="text-small text-fg-secondary leading-relaxed mt-4 pt-4 border-t border-sep-standard/50">
                    An interdisciplinary program combining computer science, software engineering, data and AI, algorithms, and business systems — giving me a foundation across both technology and business-oriented problem solving.
                  </p>
                </div>
              </motion.div>
            )}

            {/* TAB: EXPERIENCE */}
            {activeTab === 'experience' && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="flex items-center gap-2 pb-3 border-b border-sep-standard/60">
                  <Briefcase size={19} className="text-brand" />
                  <h2 className="text-h3 font-semibold text-fg-primary tracking-[-0.02em]">
                    Experience & Selective Programs
                  </h2>
                </div>

                <div className="space-y-4">
                  {/* Amazon ML Summer School */}
                  <div className="p-6 md:p-8 rounded-2xl bg-bg-secondary/70 border border-sep-standard/75 hover:border-sep-standard transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="text-[1.18rem] font-semibold text-fg-primary">
                            Amazon ML Summer School
                          </h3>
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-brand/10 text-brand border border-brand/20">
                            Trainee · Apprenticeship
                          </span>
                        </div>
                        <p className="text-[13px] font-medium text-fg-secondary mt-0.5">
                          Selected among 3,000 from 134,000+ applicants (Top ~2% nationwide)
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-md text-[12.5px] font-mono font-semibold bg-bg-secondary text-fg-primary border border-sep-standard shrink-0 shadow-2xs">
                        Jul 2026 – Sep 2026 · 3 mos (Remote)
                      </span>
                    </div>
                    <ul className="space-y-2 text-small text-fg-secondary leading-relaxed list-disc list-inside">
                      <li>Undergoing intensive training across Supervised & Unsupervised Learning, Deep Neural Networks, Dimensionality Reduction, Sequential Learning, and Reinforcement Learning.</li>
                      <li>Exploring Generative AI, Large Language Models (LLMs), and Causal Inference through expert-led sessions by Amazon Scientists.</li>
                      <li>Strengthening foundations in mathematical reasoning, algorithmic optimization, and scalable industry-relevant AI systems.</li>
                    </ul>
                  </div>

                  {/* Decibel India */}
                  <div className="p-6 md:p-8 rounded-2xl bg-bg-secondary/70 border border-sep-standard/75 hover:border-sep-standard transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="text-[1.18rem] font-semibold text-fg-primary">
                            Decibel India
                          </h3>
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-sep-standard text-fg-primary">
                            SDE Intern (AI)
                          </span>
                        </div>
                        <p className="text-[13px] font-medium text-fg-secondary mt-0.5">
                          Logistics AI & Intelligent Document Retrieval
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-md text-[12.5px] font-mono font-semibold bg-bg-secondary text-fg-primary border border-sep-standard shrink-0 shadow-2xs">
                        May 2026 – Aug 2026 · 4 mos (Kolkata)
                      </span>
                    </div>
                    <ul className="space-y-2 text-small text-fg-secondary leading-relaxed list-disc list-inside">
                      <li>Developed an internal Retrieval-Augmented Generation (RAG) assistant for complex shipment and logistics documentation queries.</li>
                      <li>Processed operational SOPs into vector embeddings using LangChain and FAISS for semantic similarity retrieval.</li>
                      <li>Integrated FastAPI backend with LLMs to generate context-grounded, verifiable responses, significantly cutting manual search overhead.</li>
                    </ul>
                  </div>

                  {/* BRB Supply Chain */}
                  <div className="p-6 md:p-8 rounded-2xl bg-bg-secondary/70 border border-sep-standard/75 hover:border-sep-standard transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="text-[1.18rem] font-semibold text-fg-primary">
                            BRB Supply Chain
                          </h3>
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-sep-standard text-fg-primary">
                            Technical Program Management Intern
                          </span>
                        </div>
                        <p className="text-[13px] font-medium text-fg-secondary mt-0.5">
                          Logistics Web Platform Delivery
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-md text-[12.5px] font-mono font-semibold bg-bg-secondary text-fg-primary border border-sep-standard shrink-0 shadow-2xs">
                        Aug 2025 – Feb 2026 · 7 mos (Hybrid)
                      </span>
                    </div>
                    <ul className="space-y-2 text-small text-fg-secondary leading-relaxed list-disc list-inside">
                      <li>Owned end-to-end delivery of the company’s logistics web platform — scoping requirements, defining milestones, and executing through production launch.</li>
                      <li>Served as single point of coordination between business leadership and external software vendor teams, translating business logic into actionable engineering specs.</li>
                    </ul>
                  </div>

                  {/* McKinsey Forward Program */}
                  <div className="p-6 md:p-8 rounded-2xl bg-bg-secondary/70 border border-sep-standard/75 hover:border-sep-standard transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="text-[1.18rem] font-semibold text-fg-primary">
                          McKinsey & Company — Forward Program
                        </h3>
                        <p className="text-small text-brand font-mono">
                          Selected Participant · McKinsey.org
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-md text-[12.5px] font-mono font-semibold bg-bg-secondary text-fg-primary border border-sep-standard shrink-0 shadow-2xs">
                        Sep 2025 – Dec 2025 · 4 mos
                      </span>
                    </div>
                    <p className="text-small text-fg-secondary leading-relaxed">
                      Selected for the 10-week intensive learning journey covering digital strategy, structured problem solving, enterprise execution, and business resilience.
                    </p>
                  </div>

                  {/* SIT Bhubaneswar */}
                  <div className="p-6 md:p-8 rounded-2xl bg-bg-secondary/70 border border-sep-standard/75 hover:border-sep-standard transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="text-[1.18rem] font-semibold text-fg-primary">
                          Silicon Institute of Technology (SIT), Bhubaneswar
                        </h3>
                        <p className="text-small text-fg-secondary font-medium">
                          AI/ML Intern
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-md text-[12.5px] font-mono font-semibold bg-bg-secondary text-fg-primary border border-sep-standard shrink-0 shadow-2xs">
                        Jun 2024 – Jul 2024 · 2 mos (Hybrid)
                      </span>
                    </div>
                    <p className="text-small text-fg-secondary leading-relaxed">
                      Engineered foundational deep learning models, explored loss landscapes and training optimizations in Python, PyTorch, and NumPy.
                    </p>
                  </div>

                  {/* Additional Roles Grid (CodeBeat & GirlScript) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-xl bg-bg-secondary/60 border border-sep-standard/70 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h4 className="text-[1.05rem] font-semibold text-fg-primary">CodeBeat</h4>
                          <span className="text-[12px] font-mono font-semibold text-fg-primary px-2 py-0.5 rounded bg-bg-primary border border-sep-standard">Jun 2025 – Jul 2025</span>
                        </div>
                        <p className="text-[12.5px] font-mono text-brand mb-2">Cyber Security Analyst Intern</p>
                        <p className="text-[12.5px] text-fg-secondary">Vulnerability assessment, security analysis, and threat detection mechanisms.</p>
                      </div>
                    </div>
                    <div className="p-5 rounded-xl bg-bg-secondary/60 border border-sep-standard/70 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h4 className="text-[1.05rem] font-semibold text-fg-primary">GirlScript Summer of Code</h4>
                          <span className="text-[12px] font-mono font-semibold text-fg-primary px-2 py-0.5 rounded bg-bg-primary border border-sep-standard">Aug 2025 – Nov 2025</span>
                        </div>
                        <p className="text-[12.5px] font-mono text-brand mb-2">Open Source Contributor</p>
                        <p className="text-[12.5px] text-fg-secondary">Contributed to open source tooling, bug triage, and community developer infrastructure.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB: CERTIFICATIONS */}
            {activeTab === 'certifications' && (
              <motion.div
                key="certifications"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="flex items-center gap-2 pb-3 border-b border-sep-standard/60">
                  <ShieldCheck size={19} className="text-brand" />
                  <h2 className="text-h3 font-semibold text-fg-primary tracking-[-0.02em]">
                    Licenses & Industry Certifications
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Microsoft MLOps */}
                  <div className="p-5 rounded-2xl bg-bg-secondary/70 border border-sep-standard/75 flex flex-col justify-between hover:border-brand/40 transition-colors">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded text-[11.5px] font-mono font-medium bg-[#00A4EF]/10 text-[#00A4EF] border border-[#00A4EF]/20">
                          Microsoft Certified
                        </span>
                        <span className="text-[12.5px] font-mono font-semibold text-fg-primary px-2 py-0.5 rounded bg-bg-primary border border-sep-standard">
                          Jul 2026
                        </span>
                      </div>
                      <h3 className="text-[1.08rem] font-semibold text-fg-primary mb-1">
                        Machine Learning Operations (MLOps) Engineer Associate
                      </h3>
                      <p className="text-[12px] text-fg-secondary font-mono mb-3">
                        Credential ID: 8BD61E47EA2ED7D6
                      </p>
                    </div>
                    <a
                      href="https://learn.microsoft.com/api/credentials/share/en-in/RiteshPanda1707/8BD61E47EA2ED7D6?sharingId"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-brand hover:underline w-fit pt-2 border-t border-sep-standard/50"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>

                  {/* Microsoft Azure AI Apps & Agents */}
                  <div className="p-5 rounded-2xl bg-bg-secondary/70 border border-sep-standard/75 flex flex-col justify-between hover:border-brand/40 transition-colors">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded text-[11.5px] font-mono font-medium bg-[#00A4EF]/10 text-[#00A4EF] border border-[#00A4EF]/20">
                          Microsoft Certified
                        </span>
                        <span className="text-[12.5px] font-mono font-semibold text-fg-primary px-2 py-0.5 rounded bg-bg-primary border border-sep-standard">
                          Jul 2026
                        </span>
                      </div>
                      <h3 className="text-[1.08rem] font-semibold text-fg-primary mb-1">
                        Azure AI Apps and Agents Developer Associate
                      </h3>
                      <p className="text-[12px] text-fg-secondary font-mono mb-3">
                        Credential ID: B2BB1811160158CF
                      </p>
                    </div>
                    <a
                      href="https://learn.microsoft.com/api/credentials/share/en-in/RiteshPanda1707/B2BB1811160158CF?sharingId"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-brand hover:underline w-fit pt-2 border-t border-sep-standard/50"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>

                  {/* Oracle Fusion AI Agent Studio */}
                  <div className="p-5 rounded-2xl bg-bg-secondary/70 border border-sep-standard/75 flex flex-col justify-between hover:border-brand/40 transition-colors">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded text-[11.5px] font-mono font-medium bg-[#F80000]/10 text-[#F80000] border border-[#F80000]/20">
                          Oracle Certified
                        </span>
                        <span className="text-[12.5px] font-mono font-semibold text-fg-primary px-2 py-0.5 rounded bg-bg-primary border border-sep-standard">
                          Feb 2026
                        </span>
                      </div>
                      <h3 className="text-[1.08rem] font-semibold text-fg-primary mb-1">
                        Fusion AI Agent Studio Certified Foundations Associate
                      </h3>
                      <p className="text-[12px] text-fg-secondary font-mono mb-3">
                        Credential ID: 102232710OFAASOFA
                      </p>
                    </div>
                    <a
                      href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=5C8D73580184B10285CC48F34FC5549DDEE3408B138250145B740B78593B94E8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-brand hover:underline w-fit pt-2 border-t border-sep-standard/50"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>

                  {/* Oracle OCI AI Foundations */}
                  <div className="p-5 rounded-2xl bg-bg-secondary/70 border border-sep-standard/75 flex flex-col justify-between hover:border-brand/40 transition-colors">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded text-[11.5px] font-mono font-medium bg-[#F80000]/10 text-[#F80000] border border-[#F80000]/20">
                          Oracle Certified
                        </span>
                        <span className="text-[12.5px] font-mono font-semibold text-fg-primary px-2 py-0.5 rounded bg-bg-primary border border-sep-standard">
                          Aug 2025
                        </span>
                      </div>
                      <h3 className="text-[1.08rem] font-semibold text-fg-primary mb-1">
                        OCI AI Foundations Associate
                      </h3>
                      <p className="text-[12px] text-fg-secondary font-mono mb-3">
                        Credential ID: 102232710OCI25AICFA
                      </p>
                    </div>
                    <a
                      href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=7F9E63B58DDA9959E2362D4A30BA35C26CD5F42ECC6925C17C8B0D77A257B291"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-brand hover:underline w-fit pt-2 border-t border-sep-standard/50"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>

                  {/* McKinsey Forward Program */}
                  <div className="p-5 rounded-2xl bg-bg-secondary/70 border border-sep-standard/75 flex flex-col justify-between hover:border-brand/40 transition-colors">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded text-[11.5px] font-mono font-medium bg-brand/10 text-brand border border-brand/20">
                          McKinsey & Company
                        </span>
                        <span className="text-[12.5px] font-mono font-semibold text-fg-primary px-2 py-0.5 rounded bg-bg-primary border border-sep-standard">
                          Dec 2025
                        </span>
                      </div>
                      <h3 className="text-[1.08rem] font-semibold text-fg-primary mb-1">
                        Forward Learning Program
                      </h3>
                      <p className="text-[12.5px] text-fg-secondary">
                        Leadership, Business Resilience & Digital Problem Solving
                      </p>
                    </div>
                  </div>

                  {/* Google Solution Challenge */}
                  <div className="p-5 rounded-2xl bg-bg-secondary/70 border border-sep-standard/75 flex flex-col justify-between hover:border-brand/40 transition-colors">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded text-[11.5px] font-mono font-medium bg-[#EA4335]/10 text-[#EA4335] border border-[#EA4335]/20">
                          Google GDG
                        </span>
                        <span className="text-[12.5px] font-mono font-semibold text-fg-primary px-2 py-0.5 rounded bg-bg-primary border border-sep-standard">
                          2025
                        </span>
                      </div>
                      <h3 className="text-[1.08rem] font-semibold text-fg-primary mb-1">
                        Solution Challenge by GDG
                      </h3>
                      <p className="text-[12px] text-fg-secondary font-mono mb-3">
                        Credential ID: 2025H2S01GSC-P04760
                      </p>
                    </div>
                    <a
                      href="https://certificate.hack2skill.com/user/gdgscparticipation/2025H2S01GSC-P04760"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-brand hover:underline w-fit pt-2 border-t border-sep-standard/50"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB: LEADERSHIP */}
            {activeTab === 'leadership' && (
              <motion.div
                key="leadership"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <div className="flex items-center gap-2 pb-3 border-b border-sep-standard/60">
                  <Users size={19} className="text-brand" />
                  <h2 className="text-h3 font-semibold text-fg-primary tracking-[-0.02em]">
                    Leadership & Community Timeline
                  </h2>
                </div>

                {/* Connected Vertical Timeline Track */}
                <div className="relative pl-6 sm:pl-8 border-l-2 border-sep-standard/80 space-y-10 sm:space-y-12 ml-2 sm:ml-3">
                  
                  {/* 1. Utkala Samiti */}
                  <div className="relative group">
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-bg-primary border-2 border-brand shadow-xs group-hover:scale-110 transition-transform" />
                    
                    <div className="p-6 md:p-8 rounded-2xl bg-bg-secondary/70 border border-sep-standard/75 hover:border-sep-standard transition-all space-y-5">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-3 border-b border-sep-standard/50">
                        <div>
                          <h3 className="text-[1.2rem] font-semibold text-fg-primary">
                            Utkala Samiti
                          </h3>
                          <p className="text-small text-brand font-mono font-medium">
                            Student Cultural & Executive Governance · VIT-AP
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-md text-[12.5px] font-mono font-semibold bg-bg-secondary text-fg-primary border border-sep-standard shadow-2xs">
                            Sep 2023 – Mar 2026 · 2 yrs 7 mos
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3.5 pl-3 border-l border-sep-standard/60 ml-1">
                        <div className="space-y-1">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <h4 className="text-[14.5px] font-semibold text-fg-primary">Vice President</h4>
                            <span className="text-[12px] font-mono font-semibold text-brand">Jul 2025 – Mar 2026 · 9 mos</span>
                          </div>
                          <p className="text-[13px] text-fg-secondary">Steered student governance, cultural diplomacy, organizational budgets, and large-scale convention operations.</p>
                        </div>

                        <div className="space-y-1">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <h4 className="text-[14px] font-medium text-fg-primary">Event Management Co-Lead</h4>
                            <span className="text-[12px] font-mono text-fg-secondary">Jul 2024 – Jul 2025 · 1 yr 1 mo</span>
                          </div>
                          <p className="text-[13px] text-fg-secondary">Led 50+ member organizing committees, stage logistics, and VIP guest management.</p>
                        </div>

                        <div className="space-y-1">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <h4 className="text-[14px] font-medium text-fg-primary">Event Management Team Member</h4>
                            <span className="text-[12px] font-mono text-fg-secondary">Sep 2023 – Jul 2024 · 11 mos</span>
                          </div>
                          <p className="text-[13px] text-fg-secondary">Core operations, stage setup, and student engagement coordination.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2. VITOPIA — International Cultural Festival */}
                  <div className="relative group">
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-bg-primary border-2 border-brand shadow-xs group-hover:scale-110 transition-transform" />
                    
                    <div className="p-6 md:p-8 rounded-2xl bg-bg-secondary/70 border border-sep-standard/75 hover:border-sep-standard transition-all space-y-5">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-3 border-b border-sep-standard/50">
                        <div>
                          <h3 className="text-[1.2rem] font-semibold text-fg-primary">
                            VITOPIA — International Cultural Festival
                          </h3>
                          <p className="text-small text-brand font-mono font-medium">
                            University Flagship Festival · State Representation & Core Event Operations
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-md text-[12.5px] font-mono font-semibold bg-bg-secondary text-fg-primary border border-sep-standard shadow-2xs">
                            Feb 2024 – Feb 2026
                          </span>
                        </div>
                      </div>

                      <div className="space-y-4 pl-3 border-l border-sep-standard/60 ml-1">
                        {/* 2026 - State Rally Coordinator */}
                        <div className="space-y-1.5">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="text-[14.5px] font-semibold text-fg-primary">State Rally Coordinator — Odisha Representation</h4>
                              <span className="px-2 py-0.2 rounded text-[11px] font-mono font-medium bg-brand/10 text-brand border border-brand/20">Lead Representative</span>
                            </div>
                            <span className="text-[12px] font-mono font-semibold text-brand shrink-0">Jan 2026 – Feb 2026</span>
                          </div>
                          <p className="text-[13px] text-fg-secondary leading-relaxed">
                            Spearheaded Odisha’s state representation across the international festival, orchestrating multi-stakeholder operations and cross-functional teams:
                          </p>
                          <ul className="text-[12.5px] text-fg-secondary leading-relaxed list-disc list-inside space-y-1 pl-1">
                            <li><strong>State Representation:</strong> Owned the vision, thematic coherence, and full contingent staging representing Odisha's heritage.</li>
                            <li><strong>Faculty Governance & Approvals:</strong> Liaised directly with university faculty committees and the VITOPIA core team for approvals, compliance, and collection verifications.</li>
                            <li><strong>Procurement & Transportation Logistics:</strong> Solved on-ground procurement constraints, specialized prop fabrication, and secure multi-stage transportation.</li>
                            <li><strong>Performance & Rally Coordination:</strong> Supervised rehearsal cadences, cultural performance arrangements, and synchronized the rally execution seamlessly with the central festival core team.</li>
                          </ul>
                        </div>

                        {/* 2024 - Core Event Operations & Disciplinary Committee */}
                        <div className="space-y-1.5 pt-3 border-t border-sep-standard/40">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="text-[14px] font-medium text-fg-primary">V-Rythm Lead Coordinator & Disciplinary Committee Member</h4>
                            </div>
                            <span className="text-[12px] font-mono text-fg-secondary shrink-0">Feb 2024 – Mar 2024</span>
                          </div>
                          <p className="text-[13px] text-fg-secondary leading-relaxed">
                            Directed on-ground execution for V-Rythm activities within a large festival structure while ensuring participant safety and campus discipline.
                          </p>
                          <ul className="text-[12.5px] text-fg-secondary leading-relaxed list-disc list-inside space-y-1 pl-1">
                            <li><strong>Core Event Operations:</strong> Managed team workflows, stage timelines, participant handling, and live event troubleshooting.</li>
                            <li><strong>Discipline & Operations:</strong> Contributed to the university Disciplinary Committee to maintain order, safety standards, and conflict resolution across large student crowds.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3. IIEC VIT-AP & Campus Innovation */}
                  <div className="relative group">
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-bg-primary border-2 border-brand shadow-xs group-hover:scale-110 transition-transform" />
                    
                    <div className="p-6 md:p-8 rounded-2xl bg-bg-secondary/70 border border-sep-standard/75 hover:border-sep-standard transition-all space-y-5">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-3 border-b border-sep-standard/50">
                        <div>
                          <h3 className="text-[1.2rem] font-semibold text-fg-primary">
                            IIEC VIT-AP & Campus Innovation
                          </h3>
                          <p className="text-small text-brand font-mono font-medium">
                            Student Entrepreneurship & Incubation Cell
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-md text-[12.5px] font-mono font-semibold bg-bg-secondary text-fg-primary border border-sep-standard shadow-2xs">
                            Feb 2024 – Jul 2025 · 1 yr 6 mos
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3.5 pl-3 border-l border-sep-standard/60 ml-1">
                        <div className="space-y-1">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <h4 className="text-[14.5px] font-semibold text-fg-primary">Student Coordinator · IIEC</h4>
                            <span className="text-[12px] font-mono font-semibold text-brand">Jan 2025 – Jul 2025 · 7 mos</span>
                          </div>
                          <p className="text-[13px] text-fg-secondary">Led campus innovation initiatives, hackathons, incubator pipeline reviews, and technical workshops.</p>
                        </div>

                        <div className="space-y-1">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <h4 className="text-[14px] font-medium text-fg-primary">Student Organiser · V-LaunchPad & V.I.K.A.S</h4>
                            <span className="text-[12px] font-mono text-fg-secondary">Oct 2024 – Apr 2025 · 4 mos</span>
                          </div>
                          <p className="text-[13px] text-fg-secondary">Organized startup launchpads and entrepreneurial development programs for student founders.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 4. National Cadet Corps (NCC) */}
                  <div className="relative group">
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-bg-primary border-2 border-brand shadow-xs group-hover:scale-110 transition-transform" />
                    
                    <div className="p-6 md:p-8 rounded-2xl bg-bg-secondary/70 border border-sep-standard/75 hover:border-sep-standard transition-all space-y-5">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-3 border-b border-sep-standard/50">
                        <div>
                          <h3 className="text-[1.2rem] font-semibold text-fg-primary">
                            National Cadet Corps (NCC) — India
                          </h3>
                          <p className="text-small text-brand font-mono font-medium">
                            Bhubaneswar, Odisha · Ministry of Defence
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-md text-[12.5px] font-mono font-semibold bg-bg-secondary text-fg-primary border border-sep-standard shadow-2xs">
                            Mar 2018 – Dec 2020 · 2 yrs 10 mos
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3.5 pl-3 border-l border-sep-standard/60 ml-1">
                        <div className="space-y-1">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <h4 className="text-[14.5px] font-semibold text-fg-primary">Sergeant</h4>
                            <span className="text-[12px] font-mono font-semibold text-brand">Mar 2019 – Dec 2020 · 1 yr 10 mos</span>
                          </div>
                          <p className="text-[13px] text-fg-secondary">Trained in squad drill command, crisis management, tactical discipline, and operational field leadership.</p>
                        </div>

                        <div className="space-y-1">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <h4 className="text-[14px] font-medium text-fg-primary">Cadet-Army</h4>
                            <span className="text-[12px] font-mono text-fg-secondary">Mar 2018 – Mar 2019 · 1 yr 1 mo</span>
                          </div>
                          <p className="text-[13px] text-fg-secondary">Basic military discipline, field operations, endurance training, and community disaster response readiness.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* ── 4. CONNECT FOOTER ── */}
        <div className="pt-10 border-t border-sep-standard/70 flex flex-col items-center text-center">
          <h3 className="text-h3 font-semibold text-fg-primary mb-2">
            Let's Connect
          </h3>
          <p className="text-body text-fg-secondary max-w-md mb-6">
            Open to AI/ML engineering opportunities, systems research collaborations, and ambitious technical programs.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:riteshpanda.work@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-fg-primary text-bg-primary font-medium text-btn hover:opacity-90 transition-opacity shadow-sm"
            >
              <Mail size={16} />
              <span>Get in Touch</span>
            </a>
            <a
              href="https://github.com/Ritesh-panda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-bg-secondary text-fg-primary border border-sep-standard hover:border-brand transition-colors text-btn font-medium shadow-2xs"
            >
              <GitFork size={16} />
              <span>GitHub</span>
              <ArrowUpRight size={14} />
            </a>
            <a
              href="https://linkedin.com/in/riteshpanda17"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-bg-secondary text-fg-primary border border-sep-standard hover:border-brand transition-colors text-btn font-medium shadow-2xs"
            >
              <Link2 size={16} />
              <span>LinkedIn</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </motion.div>
  )
}