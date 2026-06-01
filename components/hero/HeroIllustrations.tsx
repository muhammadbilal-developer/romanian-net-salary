/** Inline mini-illustrations for hero left column */

export function MiniPayslipIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="200" height="120" rx="12" fill="white" stroke="var(--color-border)" strokeWidth="1.5" />
      <rect x="16" y="16" width="80" height="10" rx="4" fill="var(--color-primary)" opacity="0.2" />
      <rect x="16" y="36" width="168" height="8" rx="3" fill="#E2E8F0" />
      <rect x="16" y="52" width="120" height="8" rx="3" fill="#E2E8F0" />
      <rect x="16" y="68" width="140" height="8" rx="3" fill="#E2E8F0" />
      <rect x="16" y="88" width="60" height="16" rx="6" fill="var(--color-secondary)" opacity="0.25" />
      <text x="130" y="100" fontSize="14" fontWeight="700" fill="var(--color-primary)">
        Net
      </text>
    </svg>
  );
}

export function MiniChartIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="160" height="100" rx="12" fill="white" stroke="var(--color-border)" strokeWidth="1.5" />
      <rect x="24" y="60" width="20" height="28" rx="4" fill="var(--color-primary)" opacity="0.35" />
      <rect x="52" y="44" width="20" height="44" rx="4" fill="var(--color-primary)" />
      <rect x="80" y="32" width="20" height="56" rx="4" fill="var(--color-secondary)" />
      <rect x="108" y="48" width="20" height="40" rx="4" fill="var(--color-accent)" opacity="0.7" />
      <path d="M20 28 H140" stroke="#E2E8F0" strokeWidth="2" />
    </svg>
  );
}

export function MiniWalletIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 140 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="10" y="20" width="120" height="70" rx="14" fill="var(--color-primary)" opacity="0.12" />
      <rect x="20" y="30" width="100" height="50" rx="10" fill="white" stroke="var(--color-border)" strokeWidth="1.5" />
      <circle cx="90" cy="55" r="14" fill="var(--color-secondary)" opacity="0.3" />
      <rect x="30" y="48" width="40" height="6" rx="3" fill="#E2E8F0" />
      <rect x="30" y="62" width="28" height="6" rx="3" fill="#E2E8F0" />
    </svg>
  );
}
