import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Work',     path: '/work'     },
  { label: 'Research', path: '/research' },
  { label: 'About',    path: '/about'    },
]

export default function NavHeader() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  /* ── Show hairline + glass only after 60px scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 ease-apple
          ${scrolled
            ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-sep-standard/60 shadow-xs'
            : 'bg-bg-primary/60 backdrop-blur-md'
          }
        `}
      >
        <div className="container-content">
          <nav
            className="flex items-center justify-between h-14"
            aria-label="Main navigation"
          >
            {/* ── Name / 'R' Logo ── */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl bg-fg-primary text-bg-primary font-bold flex items-center justify-center text-[15px] tracking-tight shadow-xs group-hover:scale-105 transition-transform duration-200">
                R
              </div>
              <span className="text-[15px] font-semibold text-fg-primary tracking-[-0.02em] group-hover:text-brand transition-colors duration-200">
                Ritesh Panda
              </span>
            </Link>

            {/* ── Desktop links ── */}
            <ul className="hidden md:flex items-center gap-8" role="list">
              {NAV_LINKS.map(({ label, path }) => (
                <li key={label}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `text-[14.5px] transition-colors duration-200 ease-apple ${
                        isActive
                          ? 'font-semibold text-brand'
                          : 'font-medium text-fg-secondary hover:text-fg-primary'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* ── Mobile menu toggle ── */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileOpen(v => !v)}
                className="flex items-center justify-center w-8 h-8 text-fg-secondary hover:text-fg-primary transition-colors duration-200 ease-apple"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-bg-primary pt-14 md:hidden"
          >
            <nav
              className="container-content flex flex-col gap-1 pt-6"
              aria-label="Mobile navigation"
            >
              <NavLink
                to="/"
                onClick={() => setMobileOpen(false)}
                className="py-4 text-[20px] font-semibold text-fg-primary border-b border-sep-subtle hover:text-brand transition-colors duration-200 ease-apple"
              >
                Home
              </NavLink>
              {NAV_LINKS.map(({ label, path }) => (
                <NavLink
                  key={label}
                  to={path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `py-4 text-[20px] border-b border-sep-subtle transition-colors duration-200 ease-apple ${
                      isActive ? 'font-semibold text-brand' : 'font-medium text-fg-primary hover:text-brand'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
