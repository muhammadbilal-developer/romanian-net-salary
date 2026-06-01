import type { MouseEvent } from "react";

/** Smooth scroll for same-page hash links only (wheel scroll stays native). */
export function handleHashClick(
  e: MouseEvent<HTMLAnchorElement>,
  href: string,
  onAfter?: () => void
): void {
  if (!href.startsWith("#") || href.length < 2) return;

  const target = document.querySelector(href);
  if (!target) return;

  e.preventDefault();
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  onAfter?.();

  if (typeof history !== "undefined" && history.pushState) {
    history.pushState(null, "", href);
  }
}
