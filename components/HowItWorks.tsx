"use client";

import { motion } from "motion/react";
import Container from "./Container";
import {
  Step1Illustration,
  Step2Illustration,
  Step3Illustration,
  StepsConnector,
} from "./how-it-works/StepIllustrations";

const steps = [
  {
    number: "01",
    title: "Enter gross salary",
    description:
      "Type your monthly gross pay in RON, pick Jan–Jun or Jul–Dec 2026, and set dependents for personal deduction.",
    Illustration: Step1Illustration,
  },
  {
    number: "02",
    title: "Select employment type",
    description:
      "Choose standard, IT, or construction. Rates are identical in 2026 — only minimum-wage thresholds differ.",
    Illustration: Step2Illustration,
  },
  {
    number: "03",
    title: "View net salary instantly",
    description:
      "See take-home pay with animated totals plus CAS, CASS, and income tax broken down with progress bars.",
    Illustration: Step3Illustration,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-section-a section-pad section-divider scroll-mt-24">
      <Container>
        <motion.header
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="section-accent-bar" aria-hidden="true" />
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">How it works</h2>
          <p className="mt-4 text-text-secondary">
            Three straightforward steps to understand your Romanian paycheck — from gross offer to
            estimated net, with no account required.
          </p>
        </motion.header>

        <div className="relative mt-16 md:mt-20">
          <StepsConnector />

          <ol className="grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <motion.li
                key={step.title}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              >
                <div className="relative mb-6 w-full max-w-[220px] rounded-2xl bg-white p-4 shadow-lg ring-1 ring-border sm:max-w-none sm:p-5">
                  <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-md">
                    {step.number}
                  </span>
                  <step.Illustration />
                </div>
                <h3 className="text-lg font-bold text-text-primary sm:text-xl">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>

        <motion.p
          className="mx-auto mt-14 max-w-xl text-center text-sm text-text-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Ready to try it?{" "}
          <a href="#calculator" className="font-semibold text-primary hover:underline">
            Jump to the calculator
          </a>{" "}
          and enter your gross salary now.
        </motion.p>
      </Container>
    </section>
  );
}
