import type { Transition, ViewportOptions } from "motion/react";

/** Smooth ease-out curve — avoids harsh "easeOut" defaults during scroll reveals */
export const EASE_SMOOTH: Transition["ease"] = [0.25, 0.46, 0.45, 0.94];

export const TRANSITION_SMOOTH: Transition = {
  duration: 0.45,
  ease: EASE_SMOOTH,
};

export const TRANSITION_FAST: Transition = {
  duration: 0.3,
  ease: EASE_SMOOTH,
};

/** Trigger slightly before fully in view; animate once to avoid scroll jank */
export const VIEWPORT_SCROLL: ViewportOptions = {
  once: true,
  amount: 0.12,
  margin: "0px 0px -8% 0px",
};

export const fadeInUp = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT_SCROLL,
  transition: TRANSITION_SMOOTH,
} as const;

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: VIEWPORT_SCROLL,
  transition: { duration: 0.4, ease: EASE_SMOOTH },
} as const;
