export default function Logo({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <rect x="6" y="6" width="88" height="88" rx="24" fill="#0A0A12" stroke="#FFFFFF" strokeOpacity="0.13" strokeWidth="2" />
      <path
        d="M32 26C24 26 24 30 24 38V44C24 48 22 50 18 50C22 50 24 52 24 56V62C24 70 24 74 32 74M68 26C76 26 76 30 76 38V44C76 48 78 50 82 50C78 50 76 52 76 56V62C76 70 76 74 68 74"
        fill="none"
        stroke="#60A5FA"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M40 36V64M60 36V64M40 50H60" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
    </svg>
  )
}
