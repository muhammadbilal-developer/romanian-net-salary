export function LogoHorizontal({
  className = "",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const textFill = variant === "dark" ? "#f8fafc" : "var(--color-text-primary)";

  return (
    <svg
      className={className}
      viewBox="0 0 220 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Romanian Net Salary Calculator"
      width={220}
      height={40}
    >
      <rect x="2" y="6" width="28" height="28" rx="6" fill="var(--color-primary)" opacity="0.12" />
      <rect x="6" y="10" width="20" height="16" rx="2" stroke="var(--color-primary)" strokeWidth="1.5" fill="none" />
      <rect x="9" y="14" width="5" height="2" rx="0.5" fill="var(--color-primary)" />
      <rect x="9" y="18" width="8" height="2" rx="0.5" fill="var(--color-primary)" />
      <rect x="9" y="22" width="6" height="2" rx="0.5" fill="var(--color-primary)" />
      <path
        d="M22 28 L28 18 L32 22 L36 14"
        stroke="var(--color-secondary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <text x="44" y="26" fill={textFill} fontFamily="var(--font-inter), Inter, sans-serif" fontSize="15" fontWeight="600">
        Net Salary
      </text>
      <text x="44" y="36" fill="var(--color-text-secondary)" fontFamily="var(--font-inter), Inter, sans-serif" fontSize="9" fontWeight="500">
        ROMANIA · 2026
      </text>
    </svg>
  );
}

export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Calculator logo"
      width={40}
      height={40}
    >
      <rect width="40" height="40" rx="10" fill="var(--color-primary)" />
      <rect x="10" y="10" width="20" height="14" rx="2" stroke="white" strokeWidth="1.5" fill="none" />
      <rect x="13" y="14" width="6" height="2" rx="0.5" fill="white" />
      <rect x="13" y="18" width="10" height="2" rx="0.5" fill="white" opacity="0.8" />
      <path
        d="M24 28 L30 20 L34 24"
        stroke="var(--color-secondary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
