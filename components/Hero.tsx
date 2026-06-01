"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FiArrowRight, FiCheckCircle, FiTrendingUp } from "react-icons/fi";
import Container from "./Container";
import { SITE_IMAGES } from "@/lib/site-images";
import { EASE_SMOOTH, TRANSITION_SMOOTH } from "@/lib/motion";
import {
  MiniChartIllustration,
  MiniPayslipIllustration,
  MiniWalletIllustration,
} from "./hero/HeroIllustrations";

const heroImage = SITE_IMAGES.hero;

const highlights = [
  "2026 tax rules",
  "CAS · CASS · Income tax",
  "Instant gross → net",
];

const quickFacts = [
  { term: "CAS", desc: "Pension contribution", rate: "25%" },
  { term: "CASS", desc: "Health insurance", rate: "10%" },
  { term: "Tax", desc: "On taxable base", rate: "10%" },
];

const stats = [
  { label: "CAS (pension)", value: "25%" },
  { label: "CASS (health)", value: "10%" },
  { label: "Income tax", value: "10%" },
];

export default function Hero() {
  return (
    <section className="bg-section-a section-divider section-pad scroll-mt-24 relative overflow-hidden">
      <div
        className="pointer-events-none absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-primary/8 blur-3xl"
        aria-hidden="true"
      />

      <Container className="lg:min-h-[calc(100svh-var(--header-height)-7rem)]">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 lg:min-h-[calc(100svh-var(--header-height)-7rem)]">
          <motion.div
            className="motion-reveal"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={TRANSITION_SMOOTH}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/90 px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
              <FiTrendingUp className="shrink-0" aria-hidden="true" />
              Updated for Romania · 2026
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl xl:text-[3.35rem] xl:leading-[1.08]">
              <span className="gradient-text">Romanian Net Salary</span>
              <br />
              Calculator
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-text-secondary">
              Use our{" "}
              <strong className="font-semibold text-text-primary">
                Romanian net salary calculator
              </strong>{" "}
              to convert gross monthly pay into net take-home — with CAS, CASS, and income tax
              explained line by line.
            </p>

            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Features">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-text-secondary shadow-sm ring-1 ring-border"
                >
                  <FiCheckCircle className="text-secondary" size={14} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4" aria-hidden="true">
              <div className="rounded-xl bg-white p-2 shadow-md ring-1 ring-border sm:p-3">
                <MiniPayslipIllustration className="h-auto w-full" />
              </div>
              <div className="rounded-xl bg-white p-2 shadow-md ring-1 ring-border sm:p-3">
                <MiniChartIllustration className="h-auto w-full" />
              </div>
              <div className="rounded-xl bg-white p-2 shadow-md ring-1 ring-border sm:p-3">
                <MiniWalletIllustration className="h-auto w-full" />
              </div>
            </div>

            <div className="mt-6 grid gap-2 sm:grid-cols-3">
              {quickFacts.map((f) => (
                <div
                  key={f.term}
                  className="rounded-xl border border-border bg-white/90 px-3 py-3 shadow-sm"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-sm font-bold text-primary">{f.term}</span>
                    <span className="text-sm font-bold text-text-primary">{f.rate}</span>
                  </div>
                  <p className="mt-0.5 text-xs text-text-secondary">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#calculator" className="btn-primary px-8 py-3.5 text-base">
                Calculate net salary
                <FiArrowRight aria-hidden="true" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-3.5 text-sm font-semibold text-text-primary shadow-sm transition-colors hover:border-primary/40"
              >
                See how it works
              </a>
            </div>
          </motion.div>

          <motion.div
            className="motion-reveal relative min-h-[22rem] overflow-hidden rounded-2xl border border-border shadow-xl sm:min-h-[26rem] lg:min-h-[32rem]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...TRANSITION_SMOOTH, delay: 0.08 }}
          >
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 672px"
            />

            <motion.div
              className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: EASE_SMOOTH }}
            >
              <div className="rounded-2xl border border-border bg-white/95 p-5 shadow-2xl">
                <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
                  Example estimate
                </p>
                <p className="mt-1 text-2xl font-bold text-text-primary">RON 8,000 gross</p>
                <dl className="mt-4 grid grid-cols-3 gap-3 border-t border-border pt-4">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <dt className="text-[10px] font-medium uppercase tracking-wide text-text-secondary">
                        {s.label}
                      </dt>
                      <dd className="mt-0.5 text-sm font-bold text-primary">{s.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-secondary">
                  <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
                  ~ RON 4,680 net take-home
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
