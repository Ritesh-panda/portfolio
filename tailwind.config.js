/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {

      /* ─────────────────────────────────────────
         COLOR TOKENS  (wired to CSS variables)
      ─────────────────────────────────────────── */
      colors: {
        bg: {
          primary:   'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          tertiary:  'var(--bg-tertiary)',
        },
        fg: {
          primary:     'var(--fg-primary)',
          secondary:   'var(--fg-secondary)',
          tertiary:    'var(--fg-tertiary)',
          quaternary:  'var(--fg-quaternary)',
          placeholder: 'var(--fg-placeholder)',
        },
        sep: {
          subtle:   'var(--sep-subtle)',
          standard: 'var(--sep-standard)',
          opaque:   'var(--sep-opaque)',
        },
        brand: {
          DEFAULT: 'var(--brand)',
          hover:   'var(--brand-hover)',
          subtle:  'var(--brand-subtle)',
        },
        status: {
          success: 'var(--success)',
          warning: 'var(--warning)',
          error:   'var(--error)',
          info:    'var(--info)',
        },
      },

      /* ─────────────────────────────────────────
         TYPOGRAPHY
      ─────────────────────────────────────────── */
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },

      fontSize: {
        /* Display — Hero name, landmark statements */
        'display': ['clamp(3rem, 8vw, 6rem)', {     /* 48px → 96px */
          lineHeight: '1.0',
          letterSpacing: '-0.04em',
          fontWeight: '600',
        }],

        /* H1 — Page titles */
        'h1': ['clamp(2.25rem, 5vw, 4rem)', {       /* 36px → 64px */
          lineHeight: '1.05',
          letterSpacing: '-0.035em',
          fontWeight: '600',
        }],

        /* H2 — Section titles */
        'h2': ['clamp(1.75rem, 3.5vw, 2.75rem)', {  /* 28px → 44px */
          lineHeight: '1.1',
          letterSpacing: '-0.025em',
          fontWeight: '600',
        }],

        /* H3 — Card/subsection titles */
        'h3': ['clamp(1.25rem, 2vw, 1.75rem)', {    /* 20px → 28px */
          lineHeight: '1.2',
          letterSpacing: '-0.015em',
          fontWeight: '600',
        }],

        /* Body large — Intro paragraphs */
        'body-lg': ['1.25rem', {                     /* 20px */
          lineHeight: '1.5',
          letterSpacing: '-0.01em',
          fontWeight: '400',
        }],

        /* Body — Default paragraph text */
        'body': ['1.0625rem', {                      /* 17px */
          lineHeight: '1.55',
          letterSpacing: '-0.005em',
          fontWeight: '400',
        }],

        /* Small — Metadata, captions */
        'small': ['0.875rem', {                      /* 14px */
          lineHeight: '1.4',
          letterSpacing: '0',
          fontWeight: '400',
        }],

        /* Label — Uppercase tags, nav, chips */
        'label': ['0.8125rem', {                     /* 13px */
          lineHeight: '1.3',
          letterSpacing: '0.02em',
          fontWeight: '500',
        }],

        /* Button — CTA text */
        'btn': ['0.9375rem', {                       /* 15px */
          lineHeight: '1.2',
          letterSpacing: '0',
          fontWeight: '500',
        }],

        /* Code — Technical content, JetBrains Mono */
        'code': ['0.875rem', {                       /* 14px */
          lineHeight: '1.5',
          letterSpacing: '0',
          fontWeight: '400',
        }],
      },

      /* ─────────────────────────────────────────
         SPACING — 8px base system
         4px  micro  |  8px   tight
         16px small  |  24px  standard
         32px medium |  48px  large
         64px section|  80px  major
         96px hero   | 128px  landmark
         160px cinematic
      ─────────────────────────────────────────── */
      spacing: {
        'micro':      '4px',
        'tight':      '8px',
        'sm':         '16px',
        'std':        '24px',
        'md':         '32px',
        'lg':         '48px',
        'section':    '64px',
        'major':      '80px',
        'hero':       '96px',
        'landmark':   '128px',
        'cinematic':  '160px',
      },

      /* ─────────────────────────────────────────
         MAX WIDTH — 1280px content container
         with responsive padding via CSS
      ─────────────────────────────────────────── */
      maxWidth: {
        'content': '1280px',
      },

      /* ─────────────────────────────────────────
         BORDER RADIUS
         4px tiny | 8px controls | 12px small cards
         16px cards | 20px containers | 24px large
      ─────────────────────────────────────────── */
      borderRadius: {
        'xs':  '4px',
        'sm':  '8px',
        'md':  '12px',
        'lg':  '16px',
        'xl':  '20px',
        '2xl': '24px',
      },

      /* ─────────────────────────────────────────
         SHADOWS — extremely subtle
         No colored glow. No neon. No heavy black.
      ─────────────────────────────────────────── */
      boxShadow: {
        'elev-1': '0 1px 3px rgba(0,0,0,0.06)',
        'elev-2': '0 4px 20px rgba(0,0,0,0.06)',
        'elev-3': '0 12px 40px rgba(0,0,0,0.08)',
      },

      /* ─────────────────────────────────────────
         MOTION — restrained + purposeful
         Use Apple's ease-in-out curve.
         Fast enough to feel responsive.
         Not so fast it feels broken.
      ─────────────────────────────────────────── */
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      transitionDuration: {
        'fast':   '150ms',
        'base':   '200ms',
        'slow':   '300ms',
        'slower': '450ms',
      },
    },
  },
  plugins: [],
}
