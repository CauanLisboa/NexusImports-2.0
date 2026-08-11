import React from 'react'

interface NexusLogoProps {
  className?: string
  size?: number
}

export function NexusLogo({ className = 'h-8 w-8', size = 32 }: NexusLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`rounded-xl shadow-md ${className}`}
    >
      <defs>
        <linearGradient id="nexusBgGrad" x1="0" y1="0" x2="180" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#18181b" />
          <stop offset="50%" stopColor="#09090b" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
        <linearGradient id="nexusRedGrad" x1="0" y1="180" x2="180" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#991b1b" />
          <stop offset="50%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#f87171" />
        </linearGradient>
        <linearGradient id="nexusSilverGrad" x1="0" y1="0" x2="180" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#e4e4e7" />
          <stop offset="100%" stopColor="#a1a1aa" />
        </linearGradient>
      </defs>

      {/* Background squircle */}
      <rect width="180" height="180" rx="40" fill="url(#nexusBgGrad)" />
      <rect
        x="2"
        y="2"
        width="176"
        height="176"
        rx="38"
        fill="none"
        stroke="url(#nexusRedGrad)"
        strokeWidth="2"
        strokeOpacity="0.6"
      />

      {/* Metallic N */}
      <path
        d="M50 135V45H68L112 110V45H130V135H112L68 70V135H50Z"
        fill="url(#nexusSilverGrad)"
      />

      {/* Jet streak arc */}
      <path
        d="M30 145C55 150 105 140 145 70C152 58 155 46 146 40C136 34 126 50 114 68C92 102 58 128 30 145Z"
        fill="url(#nexusRedGrad)"
        opacity="0.9"
      />

      {/* Jet plane silhouette */}
      <path
        d="M152 38L128 54L136 60L148 50L144 62L154 64L160 46Z"
        fill="#ffffff"
      />
    </svg>
  )
}
