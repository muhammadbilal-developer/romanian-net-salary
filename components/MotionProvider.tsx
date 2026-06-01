"use client";

import { MotionConfig } from "motion/react";
import { TRANSITION_SMOOTH } from "@/lib/motion";

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={TRANSITION_SMOOTH}>
      {children}
    </MotionConfig>
  );
}
