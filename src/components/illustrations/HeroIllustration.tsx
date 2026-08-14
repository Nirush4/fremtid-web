/** Hero landing illustration — browser window with warm geometric shapes. */
export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="h-full w-full max-h-64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
    >
      <rect width="400" height="300" fill="#F8F3EC" rx="8" />
      <rect x="40" y="30" width="320" height="200" fill="#FFFFFF" rx="12" stroke="#AA8867" strokeWidth="2" />
      <rect x="40" y="30" width="320" height="28" fill="#AA8867" rx="12" />
      <rect x="40" y="46" width="320" height="12" fill="#AA8867" />
      <circle cx="58" cy="44" r="5" fill="#F8F3EC" />
      <circle cx="74" cy="44" r="5" fill="#F8F3EC" />
      <circle cx="90" cy="44" r="5" fill="#F8F3EC" />
      <rect x="60" y="80" width="140" height="12" fill="#51301F" rx="4" opacity="0.85" />
      <rect x="60" y="102" width="200" height="8" fill="#AA8867" rx="3" opacity="0.6" />
      <rect x="60" y="118" width="180" height="8" fill="#AA8867" rx="3" opacity="0.4" />
      <rect x="60" y="150" width="90" height="32" fill="#E1937D" rx="8" />
      <rect x="220" y="70" width="120" height="120" fill="#E1937D" rx="60" opacity="0.25" />
      <rect x="240" y="90" width="80" height="80" fill="#E1937D" rx="12" opacity="0.5" />
      <path d="M260 130 L280 150 L320 110" stroke="#51301F" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="100" cy="250" r="20" fill="#E1937D" opacity="0.3" />
      <circle cx="320" cy="260" r="14" fill="#AA8867" opacity="0.4" />
    </svg>
  );
}
