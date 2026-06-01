"use client";

import { useEffect, useState } from "react";
import { useSpring, motion, useMotionValue, useTransform } from "motion/react";
import { formatRON } from "@/lib/salaryEngine";

export default function AnimatedNumber({
  value,
  className = "",
}: {
  value: number;
  className?: string;
}) {
  const [reduced, setReduced] = useState(false);
  const motionValue = useMotionValue(value);
  const spring = useSpring(motionValue, { stiffness: 80, damping: 20 });
  const display = useTransform(spring, (v) => formatRON(v));

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);

  if (reduced) {
    return <span className={className}>{formatRON(value)}</span>;
  }

  return <motion.span className={className}>{display}</motion.span>;
}
