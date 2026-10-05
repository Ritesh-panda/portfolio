import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import PageLayout from './components/layout/PageLayout'
import Footer from './components/layout/Footer'
import IntroSequence from './components/intro/IntroSequence'
import ScrollToTop from './components/common/ScrollToTop'
import HomePage from './pages/HomePage'
import WorkPage from './pages/WorkPage'
import ResearchPage from './pages/ResearchPage'
import AboutPage from './pages/AboutPage'
import AchievementsPage from './pages/AchievementsPage'
import ProjectDetailModal from './components/work/ProjectDetailModal'
import ResearchDetailModal from './components/research/ResearchDetailModal'
import type { Project } from './data/projects'
import type { ResearchItem } from './data/research'

import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ContentRoutesProps {
  onSelectProject: (project: Project) => void
  onSelectResearch: (item: ResearchItem) => void
}

function ContentRoutes({ onSelectProject, onSelectResearch }: ContentRoutesProps) {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <PageLayout>
      {/* ── Stationary Fixed Back to Home Navigation on all subpages ── */}
      {!isHomePage && (
        <div className="fixed top-3 left-3 sm:top-5 sm:left-6 z-50 pointer-events-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-[12.5px] sm:text-[13.5px] font-medium text-fg-secondary hover:text-fg-primary bg-bg-secondary/90 hover:bg-bg-secondary border border-sep-standard hover:border-brand/50 backdrop-blur-md shadow-elev-1 hover:shadow-elev-2 transition-all duration-200 py-1.5 sm:py-2 px-3 sm:px-4 rounded-full group"
          >
            <ArrowLeft size={13} className="transition-transform duration-200 group-hover:-translate-x-0.5 text-fg-tertiary group-hover:text-brand" />
            <span>Back to Home</span>
          </Link>
        </div>
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/work"
          element={<WorkPage onSelectProject={onSelectProject} />}
        />
        <Route
          path="/research"
          element={<ResearchPage onSelectResearch={onSelectResearch} />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
      </Routes>

      {/* Footer rendered ONLY on non-home pages */}
      {!isHomePage && <Footer />}
    </PageLayout>
  )
}

/**
 * App — Multi-Page Apple-Grade Developer Portfolio
 * Routes:
 * - '/' -> Home (Centered Hero with 3D Avatar, 3D Social Icons & Navigation Stack, Zero Scroll)
 * - '/work' -> Selected Work (3-Column Editorial Cards + Metrics + Orbit)
 * - '/research' -> Research (Featured Publication + Areas of Exploration)
 * - '/about' -> About (Education, Amazon ML Summer School, Experience, Connect)
 */
export default function App() {
  const [introFinished, setIntroFinished] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedResearch, setSelectedResearch] = useState<ResearchItem | null>(null)

  const handleIntroComplete = () => {
    setIntroFinished(true)
  }

  return (
    <BrowserRouter>
      <ScrollToTop />

      {!introFinished && (
        <IntroSequence onComplete={handleIntroComplete} />
      )}

      {/* Global Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Global Research Paper Detail Modal */}
      <ResearchDetailModal
        item={selectedResearch}
        onClose={() => setSelectedResearch(null)}
      />

      <div
        className={`transition-opacity duration-1000 ease-apple ${
          introFinished ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ContentRoutes
          onSelectProject={(project) => setSelectedProject(project)}
          onSelectResearch={(item) => setSelectedResearch(item)}
        />
      </div>
    </BrowserRouter>
  )
}
