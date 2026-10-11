import { useId } from 'react'

export default function Logo({ className }) {
  const gradId = useId()

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
      </defs>

      <circle
        cx="50"
        cy="50"
        r="39"
        fill="none"
        stroke="#60A5FA"
        strokeWidth="10"
        strokeDasharray="15.315 15.315"
        strokeDashoffset="7.66"
      />
      <circle cx="50" cy="50" r="34" fill={`url(#${gradId})`} />
      <circle cx="50" cy="50" r="24" fill="#0A0A12" />
      <path
        d="M42 41L34 50L42 59M58 41L66 50L58 59M53 38L47 62"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
