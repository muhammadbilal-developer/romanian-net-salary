/** Flat UI illustrations inspired by process-step marketing layouts */

export function Step1Illustration() {
  return (
    <svg viewBox="0 0 200 160" className="mx-auto h-36 w-full max-w-[200px] sm:h-40" aria-hidden="true">
      <rect x="20" y="20" width="160" height="120" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="2" />
      <rect x="20" y="20" width="160" height="28" rx="12" fill="#1E293B" />
      <rect x="20" y="36" width="160" height="12" fill="#1E293B" />
      <rect x="36" y="60" width="48" height="36" rx="6" fill="#10B981" opacity="0.35" />
      <rect x="92" y="64" width="72" height="8" rx="4" fill="#2563EB" opacity="0.5" />
      <rect x="92" y="80" width="56" height="8" rx="4" fill="#E2E8F0" />
      <rect x="92" y="96" width="64" height="8" rx="4" fill="#E2E8F0" />
      <rect x="36" y="108" width="24" height="8" rx="4" fill="#2563EB" />
      <text x="100" y="130" textAnchor="middle" fontSize="11" fontWeight="600" fill="#64748B">
        RON · Gross
      </text>
    </svg>
  );
}

export function Step2Illustration() {
  return (
    <svg viewBox="0 0 200 160" className="mx-auto h-36 w-full max-w-[200px] sm:h-40" aria-hidden="true">
      <rect x="40" y="24" width="120" height="32" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="2" />
      <rect x="48" y="32" width="20" height="16" rx="4" fill="#10B981" opacity="0.5" />
      <rect x="76" y="34" width="68" height="6" rx="3" fill="#2563EB" opacity="0.4" />
      <rect x="76" y="44" width="40" height="6" rx="3" fill="#E2E8F0" />
      <rect x="32" y="64" width="136" height="32" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="2" />
      <rect x="44" y="74" width="20" height="12" rx="3" fill="#10B981" opacity="0.5" />
      <rect x="72" y="76" width="80" height="6" rx="3" fill="#2563EB" opacity="0.35" />
      <rect x="48" y="108" width="104" height="28" rx="8" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1.5" />
      <rect x="60" y="118" width="80" height="8" rx="4" fill="#2563EB" opacity="0.3" />
    </svg>
  );
}

export function Step3Illustration() {
  return (
    <svg viewBox="0 0 200 160" className="mx-auto h-36 w-full max-w-[200px] sm:h-40" aria-hidden="true">
      <rect x="24" y="40" width="48" height="72" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="1.5" opacity="0.6" />
      <rect x="76" y="28" width="96" height="88" rx="10" fill="white" stroke="#2563EB" strokeWidth="2" />
      <rect x="88" y="44" width="24" height="40" rx="4" fill="#10B981" opacity="0.4" />
      <rect x="118" y="52" width="40" height="24" rx="4" fill="#2563EB" opacity="0.35" />
      <circle cx="156" cy="44" r="12" fill="#10B981" />
      <path d="M150 44 L154 48 L162 38" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="88" y="96" width="72" height="8" rx="4" fill="#E2E8F0" />
      <text x="100" y="132" textAnchor="middle" fontSize="12" fontWeight="700" fill="#2563EB">
        Net pay
      </text>
    </svg>
  );
}

export function StepsConnector() {
  return (
    <svg
      className="pointer-events-none absolute left-0 right-0 top-24 hidden h-32 w-full md:block lg:top-28"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M 120 80 Q 300 20, 480 70 T 840 65 T 1080 75"
        fill="none"
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeDasharray="10 8"
        strokeLinecap="round"
        opacity="0.45"
      />
      <polygon points="1070,70 1085,75 1070,80" fill="#2563EB" opacity="0.6" />
    </svg>
  );
}
