"use client";

import { motion } from "motion/react";
import {
  FiShield,
  FiHeart,
  FiLayers,
  FiPercent,
  FiTrendingUp,
  FiCheckCircle,
} from "react-icons/fi";
import Container from "./Container";
import { fadeInUp } from "@/lib/motion";

const topics = [
  {
    id: "overview",
    icon: FiLayers,
    tag: "Overview",
    title: "Romanian tax system",
    rate: null,
    accent: "from-primary to-blue-600",
    body: "Romanian employees pay social contributions and a flat income tax on earnings. As of 2026, the standard package is 25% CAS for pensions, 10% CASS for health, and 10% income tax on the taxable base after statutory deductions. Employers also pay separate payroll taxes not shown on your payslip — our calculator focuses on what you actually take home.",
    highlights: ["Flat 10% income tax", "Employee-side deductions", "2026 rules"],
    large: true,
  },
  {
    id: "cas",
    icon: FiShield,
    tag: "CAS",
    title: "Pension contribution",
    rate: "25%",
    accent: "from-primary to-indigo-600",
    body: "CAS (Contribuția de Asigurări Sociale) funds the public pension system. It is withheld from gross salary before you receive pay and is separate from employer contributions.",
    highlights: ["Mandatory for employees", "Calculated on gross"],
    large: false,
  },
  {
    id: "cass",
    icon: FiHeart,
    tag: "CASS",
    title: "Health insurance",
    rate: "10%",
    accent: "from-secondary to-emerald-600",
    body: "CASS covers mandatory health insurance and access to state healthcare. Together with CAS, these two contributions usually represent the largest share of paycheck deductions.",
    highlights: ["State healthcare access", "10% of gross"],
    large: false,
  },
];

export default function InfoCards() {
  const overview = topics.find((t) => t.large)!;
  const details = topics.filter((t) => !t.large);

  return (
    <section id="salary-info" className="bg-section-b section-pad section-divider scroll-mt-24">
      <Container>
        <header className="mx-auto max-w-2xl text-center">
          <div className="section-accent-bar" aria-hidden="true" />
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
            Salary & tax details
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Understand every line on your Romanian payslip — contributions, rates, and how
            they shape your net pay in 2026.
          </p>
        </header>

        {/* Summary strip */}
        <motion.div
          className="motion-reveal mt-10 flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-border bg-white px-6 py-5 shadow-sm"
          {...fadeInUp}
        >
          {[
            { label: "CAS", value: "25%", color: "text-primary" },
            { label: "CASS", value: "10%", color: "text-secondary" },
            { label: "Income tax", value: "10%", color: "text-accent" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 px-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
                {item.label}
              </span>
              <span className={`text-2xl font-bold ${item.color}`}>{item.value}</span>
            </div>
          ))}
          <div className="hidden h-8 w-px bg-border sm:block" aria-hidden="true" />
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <FiTrendingUp className="text-secondary" aria-hidden="true" />
            <span>Standard full-time employee rates</span>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Featured overview card */}
          <motion.article
            className="motion-reveal relative overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-lg lg:col-span-2 lg:p-10"
            {...fadeInUp}
          >
            <div
              className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${overview.accent} opacity-10 blur-2xl`}
              aria-hidden="true"
            />
            <div className="relative">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${overview.accent} text-white shadow-lg`}
                  >
                    <overview.icon size={26} aria-hidden="true" />
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      {overview.tag}
                    </span>
                    <h3 className="mt-1 text-2xl font-bold text-text-primary">{overview.title}</h3>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-base leading-relaxed text-text-secondary">{overview.body}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {overview.highlights.map((h) => (
                  <li
                    key={h}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary/5 px-3 py-1.5 text-xs font-medium text-text-primary ring-1 ring-primary/15"
                  >
                    <FiCheckCircle className="text-primary" size={14} aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>

          {/* CAS & CASS cards */}
          {details.map((card, i) => (
            <motion.article
              key={card.id}
              className="motion-reveal group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-lg transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.06 * (i + 1) }}
            >
              <div
                className={`absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r ${card.accent}`}
                aria-hidden="true"
              />
              <div className="flex items-start justify-between gap-4">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.accent} text-white shadow-md`}
                >
                  <card.icon size={22} aria-hidden="true" />
                </span>
                {card.rate && (
                  <div className="text-right">
                    <span className="flex items-center gap-1 text-xs font-medium text-text-secondary">
                      <FiPercent size={12} aria-hidden="true" />
                      Employee rate
                    </span>
                    <p className="text-3xl font-bold text-text-primary">{card.rate}</p>
                    <span className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
                      of gross
                    </span>
                  </div>
                )}
              </div>
              <span className="mt-5 inline-block text-xs font-bold uppercase tracking-wider text-text-secondary">
                {card.tag}
              </span>
              <h3 className="mt-1 text-xl font-bold text-text-primary">{card.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">{card.body}</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {card.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-2 text-sm text-text-secondary"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
