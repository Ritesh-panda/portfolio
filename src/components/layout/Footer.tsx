import { GitFork, Link, Mail } from 'lucide-react'

const SOCIALS = [
  {
    label: 'GitHub',
    href:  'https://github.com/Ritesh-panda',
    Icon:  GitFork,
  },
  {
    label: 'LinkedIn',
    href:  'https://linkedin.com/in/riteshpanda17',
    Icon:  Link,
  },
  {
    label: 'Email',
    href:  'mailto:riteshpanda.work@gmail.com',
    Icon:  Mail,
  },
]

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-sep-standard">
      <div className="container-content">
        <div className="py-std flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* ── Left — name + year ── */}
          <p className="text-small text-fg-tertiary">
            © {new Date().getFullYear()} Ritesh Ranjan Panda
          </p>

          {/* ── Right — social icons only ── */}
          <ul className="flex items-center gap-5" role="list" aria-label="Social links">
            {SOCIALS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-fg-quaternary hover:text-fg-primary
                             transition-colors duration-200 ease-apple"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </footer>
  )
}
