"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FiArrowRight, FiCheckCircle, FiTrendingUp } from "react-icons/fi";
import Container from "./Container";
import { SITE_IMAGES } from "@/lib/site-images";
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
    <section className="bg-section-a section-divider scroll-mt-24 relative overflow-hidden">
      <div
        className="pointer-events-none absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-primary/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="grid lg:grid-cols-2 lg:min-h-[calc(100svh-var(--header-height))]">
        {/* Left — contained content */}
        <div className="flex items-center">
          <Container className="w-full py-12 sm:py-14 lg:py-10">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="max-w-xl lg:max-w-none"
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

              <div
                className="mt-8 grid grid-cols-3 gap-3 sm:gap-4"
                aria-hidden="true"
              >
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
          </Container>
        </div>

        {/* Right — full-width image column (edge to edge) */}
        <motion.div
          className="relative min-h-[22rem] sm:min-h-[26rem] lg:min-h-[calc(100svh-var(--header-height))]"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          <motion.div
            className="absolute bottom-6 left-4 right-4 sm:left-6 lg:bottom-10 lg:left-8 lg:right-8 lg:max-w-sm"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="rounded-2xl border border-border bg-white/95 p-5 shadow-2xl backdrop-blur-sm">
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
    </section>
  );
}
