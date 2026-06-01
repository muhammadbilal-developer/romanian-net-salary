"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { FiMenu, FiX } from "react-icons/fi";
import { LogoHorizontal } from "./Logo";
import Container from "./Container";
import { NAV_LINKS } from "@/lib/constants";

const calculatorHref = (isHome: boolean) => (isHome ? "#calculator" : "/#calculator");

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-chrome sticky top-0 z-50 w-full border-b border-white/10 shadow-sm">
      <Container>
        <div className="flex min-h-[72px] items-center justify-between gap-4 py-4 lg:min-h-[80px] lg:py-5">
          <Link href="/" className="shrink-0" aria-label="Home">
            <LogoHorizontal variant="dark" className="h-11 w-auto lg:h-12" />
          </Link>

          <nav
            className="hidden flex-1 items-center justify-center gap-2 md:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) =>
              "isRoute" in link && link.isRoute ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                    pathname === link.href
                      ? "text-white underline decoration-2 underline-offset-4"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={isHome ? link.href : `/${link.href}`}
                  className="rounded-lg px-3 py-2 text-base font-medium text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={calculatorHref(isHome)}
              className="btn-primary hidden px-5 py-2.5 text-sm md:inline-flex"
            >
              Calculate net salary
            </a>

            <button
              type="button"
              className="rounded-lg p-2 text-white md:hidden focus-visible:ring-2 focus-visible:ring-white"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="site-chrome w-full overflow-hidden border-t border-white/10 md:hidden"
            aria-label="Mobile navigation"
          >
            <Container className="flex flex-col gap-1 py-4">
              <a
                href={calculatorHref(isHome)}
                onClick={closeMenu}
                className="btn-primary mb-2 w-full justify-center py-3 text-base"
              >
                Calculate net salary
              </a>
              {NAV_LINKS.map((link) =>
                "isRoute" in link && link.isRoute ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-lg px-3 py-3 text-base font-medium text-white hover:bg-white/10"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={isHome ? link.href : `/${link.href}`}
                    onClick={closeMenu}
                    className="rounded-lg px-3 py-3 text-base font-medium text-white hover:bg-white/10"
                  >
                    {link.label}
                  </a>
                )
              )}
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
