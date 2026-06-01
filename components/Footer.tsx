import Link from "next/link";
import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";
import { LogoHorizontal } from "./Logo";
import ChromeContainer from "./ChromeContainer";
import { FOOTER_LEGAL, FOOTER_NAV, SITE } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-chrome mt-auto w-full text-slate-300">
      <ChromeContainer className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <LogoHorizontal variant="dark" className="mb-4 h-11 w-auto lg:h-12" />
          <p className="max-w-xs text-sm leading-relaxed text-slate-400">
            Estimate your Romanian take-home pay with a transparent breakdown of CAS, CASS, and income tax — updated for 2026.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Navigate
          </h2>
          <ul className="space-y-2">
            {FOOTER_NAV.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Legal
          </h2>
          <ul className="space-y-2">
            {FOOTER_LEGAL.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Connect
          </h2>
          <div className="flex gap-3" aria-label="Social links (placeholder)">
            {[FiTwitter, FiLinkedin, FiGithub].map((Icon, i) => (
              <span
                key={i}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-slate-400"
                aria-hidden="true"
              >
                <Icon size={18} />
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500">{SITE.email}</p>
        </div>
      </ChromeContainer>

      <div className="w-full border-t border-white/10">
        <ChromeContainer>
          <p className="py-6 text-center text-sm text-slate-500">
            © {year} {SITE.name}. All rights reserved. Estimates only — not tax advice.
          </p>
        </ChromeContainer>
      </div>
    </footer>
  );
}
