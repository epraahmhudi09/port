import { useId } from 'react'

export default function Logo({ className }) {
  const gradId = useId()
  const clipId = useId()

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="55%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
        <clipPath id={clipId}>
          <rect x="8" y="8" width="84" height="84" rx="22" />
        </clipPath>
      </defs>

      <rect x="8" y="8" width="84" height="84" rx="22" fill={`url(#${gradId})`} />

      <polygon points="8,8 58,8 8,58" fill="#FFFFFF" opacity="0.22" clipPath={`url(#${clipId})`} />

      <path
        d="M32 28 V72 M68 28 V72 M32 50 H68"
        stroke="#0A0A12"
        strokeWidth="12.5"
        strokeLinecap="round"
      />

      <circle cx="80" cy="80" r="17" fill="#0A0A12" stroke="#FFFFFF" strokeWidth="2.5" />
      <path
        d="M73 74 L67 80 L73 86 M87 74 L93 80 L87 86"
        stroke="#93C5FD"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
