import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { LogoHorizontal } from "./Logo";
import Container from "./Container";
import { FOOTER_LEGAL, FOOTER_NAV, SITE } from "@/lib/constants";

const socialLinks = [
  {
    label: "X (Twitter)",
    href: "#",
    Icon: FaXTwitter,
    className: "bg-black text-white hover:bg-slate-800",
  },
  {
    label: "LinkedIn",
    href: "#",
    Icon: FaLinkedin,
    className: "bg-[#0A66C2] text-white hover:bg-[#004182]",
  },
  {
    label: "GitHub",
    href: "#",
    Icon: FaGithub,
    className: "bg-white text-[#24292f] hover:bg-slate-100",
  },
  {
    label: "Instagram",
    href: "#",
    Icon: FaInstagram,
    className:
      "bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white hover:opacity-90",
  },
  {
    label: "YouTube",
    href: "#",
    Icon: FaYoutube,
    className: "bg-[#FF0000] text-white hover:bg-[#cc0000]",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-chrome mt-auto w-full text-slate-300">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
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
          <div className="flex flex-wrap gap-3" aria-label="Social media">
            {socialLinks.map(({ label, href, Icon, className }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${className}`}
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500">{SITE.email}</p>
        </div>
      </Container>

      <div className="w-full border-t border-white/10">
        <Container>
          <p className="py-6 text-center text-sm text-slate-500">
            © {year} {SITE.name}. All rights reserved. Estimates only — not tax advice.
          </p>
        </Container>
      </div>
    </footer>
  );
}
