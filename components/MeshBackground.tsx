"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const blobs = [
  { color: "var(--color-primary)", size: 480, top: "-10%", left: "-5%", duration: 28 },
  { color: "var(--color-secondary)", size: 400, top: "40%", right: "-8%", duration: 32 },
  { color: "var(--color-accent)", size: 320, bottom: "5%", left: "30%", duration: 24 },
];

export default function MeshBackground() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div className="mesh-bg" aria-hidden="true">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="mesh-blob"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            right: b.right,
            bottom: b.bottom,
            background: b.color,
          }}
          animate={
            reduced
              ? undefined
              : { x: [0, 30, -20, 0], y: [0, -25, 15, 0] }
          }
          transition={
            reduced
              ? undefined
              : { duration: b.duration, repeat: Infinity, ease: "easeInOut" }
          }
        />
      ))}
    </div>
  );
}
