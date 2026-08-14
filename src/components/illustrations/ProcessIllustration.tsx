/** Process workflow illustration — numbered steps connected by a path. */
export function ProcessIllustration() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="h-full w-full max-h-64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
    >
      <rect width="400" height="300" fill="#F8F3EC" rx="8" />
      <path
        d="M60 150 C120 80, 180 220, 240 150 S360 80, 340 150"
        stroke="#AA8867"
        strokeWidth="2"
        fill="none"
        strokeDasharray="6 4"
        opacity="0.6"
      />
      {[
        { cx: 60, cy: 150, n: '1' },
        { cx: 140, cy: 100, n: '2' },
        { cx: 240, cy: 180, n: '3' },
        { cx: 340, cy: 120, n: '4' },
      ].map(({ cx, cy, n }) => (
        <g key={n}>
          <circle cx={cx} cy={cy} r="24" fill="#E1937D" opacity="0.35" stroke="#E1937D" strokeWidth="2" />
          <text
            x={cx}
            y={cy + 6}
            textAnchor="middle"
            fill="#51301F"
            fontSize="18"
            fontWeight="bold"
            fontFamily="system-ui, sans-serif"
          >
            {n}
          </text>
        </g>
      ))}
      <rect x="100" y="220" width="200" height="40" fill="#FFFFFF" rx="10" stroke="#AA8867" strokeWidth="2" />
      <rect x="120" y="235" width="80" height="8" fill="#51301F" rx="3" opacity="0.7" />
      <rect x="210" y="235" width="60" height="8" fill="#E1937D" rx="4" />
    </svg>
  );
}
