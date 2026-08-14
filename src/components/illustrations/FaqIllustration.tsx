/** FAQ illustration — speech bubbles and question marks. */
export function FaqIllustration() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="h-full w-full max-h-64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
    >
      <rect width="400" height="300" fill="#F8F3EC" rx="8" />
      <rect x="50" y="50" width="200" height="80" fill="#FFFFFF" rx="16" stroke="#AA8867" strokeWidth="2" />
      <polygon points="70,130 90,130 80,150" fill="#FFFFFF" stroke="#AA8867" strokeWidth="2" />
      <rect x="70" y="70" width="120" height="10" fill="#51301F" rx="4" opacity="0.8" />
      <rect x="70" y="90" width="160" height="7" fill="#AA8867" rx="3" opacity="0.5" />
      <rect x="70" y="104" width="140" height="7" fill="#AA8867" rx="3" opacity="0.35" />
      <rect x="150" y="140" width="200" height="80" fill="#FFFFFF" rx="16" stroke="#E1937D" strokeWidth="2" />
      <polygon points="320,220 340,220 330,240" fill="#FFFFFF" stroke="#E1937D" strokeWidth="2" />
      <rect x="170" y="160" width="100" height="10" fill="#51301F" rx="4" opacity="0.8" />
      <rect x="170" y="180" width="160" height="7" fill="#AA8867" rx="3" opacity="0.5" />
      <rect x="170" y="194" width="130" height="7" fill="#AA8867" rx="3" opacity="0.35" />
      <circle cx="320" cy="80" r="36" fill="#E1937D" opacity="0.25" />
      <text x="320" y="92" textAnchor="middle" fill="#51301F" fontSize="36" fontWeight="bold" fontFamily="system-ui, sans-serif">?</text>
      <circle cx="80" cy="220" r="28" fill="#AA8867" opacity="0.2" />
      <text x="80" y="230" textAnchor="middle" fill="#51301F" fontSize="28" fontWeight="bold" fontFamily="system-ui, sans-serif">?</text>
    </svg>
  );
}
