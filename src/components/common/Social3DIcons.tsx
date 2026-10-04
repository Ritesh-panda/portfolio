/**
 * Social3DIcons — High-Fidelity 3D-Styled Brand Icons
 * Pixel-perfect GitHub, LinkedIn, and official Google Gmail vector icons
 * with authentic 3D depth, specular highlights, and hover micro-animations.
 */

export function GitHub3DIcon({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-md transition-all duration-300 ease-apple group-hover:scale-110 group-hover:-translate-y-1"
    >
      <defs>
        <radialGradient id="ghSphere3D" cx="30%" cy="25%" r="75%">
          <stop offset="0%" stopColor="#4A4E57" />
          <stop offset="45%" stopColor="#22252A" />
          <stop offset="100%" stopColor="#0B0C0E" />
        </radialGradient>
        <linearGradient id="ghRimLight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      {/* 3D Curved Body */}
      <circle cx="24" cy="24" r="22" fill="url(#ghSphere3D)" />
      <circle cx="24" cy="24" r="21.5" stroke="url(#ghRimLight)" strokeWidth="1" />

      {/* GitHub Octocat Silhouette */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 10C16.27 10 10 16.27 10 24C10 30.19 14.02 35.43 19.59 37.28C20.29 37.41 20.55 36.98 20.55 36.61C20.55 36.28 20.54 35.19 20.53 33.81C16.63 34.66 15.81 32.12 15.81 32.12C15.17 30.5 14.25 30.07 14.25 30.07C12.98 29.2 14.35 29.22 14.35 29.22C15.75 29.32 16.49 30.66 16.49 30.66C17.74 32.8 19.77 32.18 20.57 31.82C20.7 30.91 21.06 30.29 21.46 29.94C18.35 29.59 15.08 28.39 15.08 23.03C15.08 21.5 15.63 20.25 16.53 19.27C16.38 18.92 15.9 17.49 16.67 15.55C16.67 15.55 17.85 15.17 20.54 16.99C21.66 16.68 22.86 16.52 24.05 16.52C25.24 16.52 26.44 16.68 27.56 16.99C30.25 15.17 31.43 15.55 31.43 15.55C32.2 17.49 31.72 18.92 31.57 19.27C32.47 20.25 33.02 21.5 33.02 23.03C33.02 28.4 29.74 29.58 26.62 29.93C27.12 30.36 27.57 31.22 27.57 32.53C27.57 34.41 27.55 35.92 27.55 36.61C27.55 36.98 27.81 37.42 28.52 37.28C34.08 35.43 38.1 30.18 38.1 24C38.1 16.27 31.73 10 24 10Z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

export function LinkedIn3DIcon({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-md transition-all duration-300 ease-apple group-hover:scale-110 group-hover:-translate-y-1"
    >
      <defs>
        <radialGradient id="liSphere3D" cx="28%" cy="22%" r="85%">
          <stop offset="0%" stopColor="#1A9CFF" />
          <stop offset="40%" stopColor="#0077B5" />
          <stop offset="100%" stopColor="#004770" />
        </radialGradient>
        <linearGradient id="liRimLight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* 3D Rounded Squircle */}
      <rect x="2" y="2" width="44" height="44" rx="11" fill="url(#liSphere3D)" />
      <rect x="2.5" y="2.5" width="43" height="43" rx="10.5" stroke="url(#liRimLight)" strokeWidth="1" />

      {/* LinkedIn "in" Typography */}
      <path
        d="M17.15 16.15C17.15 17.61 15.96 18.8 14.5 18.8C13.04 18.8 11.85 17.61 11.85 16.15C11.85 14.69 13.04 13.5 14.5 13.5C15.96 13.5 17.15 14.69 17.15 16.15ZM12.1 34.5H16.9V20.5H12.1V34.5ZM24.45 20.5H19.75V34.5H24.45V27.15C24.45 23.05 29.8 22.7 29.8 27.15V34.5H34.5V25.65C34.5 18.75 26.65 19 24.45 23.05V20.5Z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

export function Gmail3DIcon({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-md transition-all duration-300 ease-apple group-hover:scale-110 group-hover:-translate-y-1"
    >
      <defs>
        <radialGradient id="gmailBase3D" cx="30%" cy="25%" r="80%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="65%" stopColor="#F6F7F9" />
          <stop offset="100%" stopColor="#E2E4E9" />
        </radialGradient>
        <linearGradient id="gmailRimLight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.18" />
        </linearGradient>
      </defs>

      {/* 3D Clean White Pill/Squircle Base */}
      <rect x="2" y="2" width="44" height="44" rx="11" fill="url(#gmailBase3D)" />
      <rect x="2.5" y="2.5" width="43" height="43" rx="10.5" stroke="url(#gmailRimLight)" strokeWidth="1" />

      {/* Official Google Gmail Multi-Color "M" (Accurate Proportions) */}
      <g transform="translate(10, 11)">
        {/* Left blue vertical pillar */}
        <path
          d="M2 24.5V6.8C2 4.15 4.15 2 6.8 2L14 7.5L6 13.5V24.5H2Z"
          fill="#4285F4"
        />
        {/* Right green vertical pillar */}
        <path
          d="M26 24.5V6.8C26 4.15 23.85 2 21.2 2L14 7.5L22 13.5V24.5H26Z"
          fill="#34A853"
        />
        {/* Top red header chevron */}
        <path
          d="M6 13.5L14 7.5L22 13.5L14 19.5L6 13.5Z"
          fill="#EA4335"
        />
        {/* Left inner red fold */}
        <path
          d="M6 4.5L14 10.5L6 16.5V4.5Z"
          fill="#C5221F"
        />
        {/* Right inner dark green fold */}
        <path
          d="M22 4.5L14 10.5L22 16.5V4.5Z"
          fill="#188038"
        />
        {/* Top right yellow corner accent */}
        <path
          d="M21.2 2L26 5.6V2H21.2Z"
          fill="#FBBC04"
        />
        {/* Top left dark red corner accent */}
        <path
          d="M6.8 2L2 5.6V2H6.8Z"
          fill="#C5221F"
        />
      </g>
    </svg>
  )
}
