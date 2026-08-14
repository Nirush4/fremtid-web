/** Features / trust signals illustration — connected nodes and checkmarks. */
export function FeaturesIllustration() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="h-full w-full max-h-64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
    >
      <rect width="400" height="300" fill="#F8F3EC" rx="8" />
      <line x1="200" y1="80" x2="120" y2="140" stroke="#AA8867" strokeWidth="2" opacity="0.5" />
      <line x1="200" y1="80" x2="280" y2="140" stroke="#AA8867" strokeWidth="2" opacity="0.5" />
      <line x1="120" y1="140" x2="200" y2="220" stroke="#AA8867" strokeWidth="2" opacity="0.5" />
      <line x1="280" y1="140" x2="200" y2="220" stroke="#AA8867" strokeWidth="2" opacity="0.5" />
      <circle cx="200" cy="80" r="32" fill="#E1937D" opacity="0.35" stroke="#E1937D" strokeWidth="2" />
      <path d="M188 80 L196 88 L214 68" stroke="#51301F" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="120" cy="140" r="28" fill="#FFFFFF" stroke="#AA8867" strokeWidth="2" />
      <path d="M110 140 L116 146 L132 130" stroke="#51301F" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="280" cy="140" r="28" fill="#FFFFFF" stroke="#AA8867" strokeWidth="2" />
      <path d="M270 140 L276 146 L292 130" stroke="#51301F" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="200" cy="220" r="32" fill="#FFFFFF" stroke="#E1937D" strokeWidth="2" />
      <path d="M188 220 L196 228 L214 208" stroke="#51301F" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="60" cy="60" r="14" fill="#AA8867" opacity="0.25" />
      <circle cx="340" cy="260" r="18" fill="#E1937D" opacity="0.2" />
    </svg>
  );
}
