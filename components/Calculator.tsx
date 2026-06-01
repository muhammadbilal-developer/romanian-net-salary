"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { FiInfo, FiPercent, FiUser, FiCalendar } from "react-icons/fi";
import AnimatedNumber from "./AnimatedNumber";
import Container from "./Container";
import {
  calculateSalary,
  formatRON,
  validateGross,
} from "@/lib/salaryEngine";
import { EMPLOYMENT_TYPES, type EmploymentType, type Period } from "@/lib/constants";

function useDebounce<T>(value: T, delay = 150): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

export default function Calculator() {
  const [grossInput, setGrossInput] = useState("8000");
  const [dependents, setDependents] = useState(0);
  const [period, setPeriod] = useState<Period>("S1");
  const [employmentType, setEmploymentType] = useState<EmploymentType>("standard");
  const [calculating, setCalculating] = useState(false);

  const debouncedGross = useDebounce(grossInput, 150);
  const error = validateGross(debouncedGross);

  const result = useMemo(() => {
    if (error) return null;
    return calculateSalary({
      gross: Number(debouncedGross),
      dependents,
      period,
      employmentType,
    });
  }, [debouncedGross, dependents, period, employmentType, error]);

  useEffect(() => {
    if (grossInput !== debouncedGross) {
      setCalculating(true);
      const t = setTimeout(() => setCalculating(false), 400);
      return () => clearTimeout(t);
    }
    setCalculating(false);
  }, [grossInput, debouncedGross]);

  const selectedEmployment = EMPLOYMENT_TYPES.find((e) => e.id === employmentType);
  const maxBar = result ? Math.max(result.cas, result.cass, result.incomeTax, 1) : 1;

  return (
    <section
      id="calculator"
      className="bg-section-b scroll-mt-24 section-divider py-20 lg:py-28"
    >
      <Container>
        <header className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <div className="section-accent-bar" aria-hidden="true" />
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl lg:text-[2.75rem]">
            Salary calculator
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Enter your gross monthly salary for a detailed net pay estimate — CAS, CASS, and
            income tax updated for 2026.
          </p>
        </header>

        <div className="calc-shell mx-auto max-w-6xl">
          <div className="border-b border-border bg-gradient-to-r from-primary/5 via-white to-secondary/5 px-6 py-5 sm:px-10 sm:py-6">
            <p className="text-sm font-medium text-text-secondary">Live estimate</p>
            <p className="text-lg font-semibold text-text-primary">
              Romanian employee · Full-time · Primary workplace
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.05fr] lg:gap-0">
            {/* Inputs */}
            <div className="border-b border-border p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10 xl:p-12">
              <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-text-primary">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  1
                </span>
                Your details
              </h3>

              <div className="space-y-7">
                <div>
                  <label
                    htmlFor="gross"
                    className="mb-3 block text-sm font-semibold uppercase tracking-wide text-text-secondary"
                  >
                    Gross monthly salary (RON)
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-lg font-semibold text-text-secondary">
                      RON
                    </span>
                    <input
                      id="gross"
                      type="number"
                      inputMode="decimal"
                      min={1}
                      value={grossInput}
                      onChange={(e) => setGrossInput(e.target.value)}
                      className="calc-input-lg pl-16"
                      aria-invalid={!!error}
                      aria-describedby={error ? "gross-error" : undefined}
                    />
                  </div>
                  <div aria-live="polite" className="min-h-[1.25rem]">
                    {error && (
                      <p id="gross-error" className="mt-2 text-sm font-medium text-error">
                        {error}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="employment"
                    className="mb-3 flex items-center gap-2 text-sm font-semibold text-text-primary"
                  >
                    <FiUser className="text-primary" aria-hidden="true" />
                    Employment type
                  </label>
                  <select
                    id="employment"
                    value={employmentType}
                    onChange={(e) => setEmploymentType(e.target.value as EmploymentType)}
                    className="input-field py-4 text-base"
                  >
                    {EMPLOYMENT_TYPES.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                  {selectedEmployment?.tooltip && (
                    <p className="mt-3 flex items-start gap-2 rounded-xl bg-primary/5 px-4 py-3 text-xs leading-relaxed text-text-secondary">
                      <FiInfo className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                      {selectedEmployment.tooltip}
                    </p>
                  )}
                </div>

                <div>
                  <span className="mb-3 flex items-center gap-2 text-sm font-semibold text-text-primary">
                    <FiCalendar className="text-primary" aria-hidden="true" />
                    Period (2026)
                  </span>
                  <div className="flex gap-3" role="group" aria-label="Salary period">
                    {(["S1", "S2"] as const).map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setPeriod(p)}
                        className={`flex-1 rounded-2xl border-2 px-4 py-3.5 text-sm font-semibold transition-all ${
                          period === p
                            ? "border-primary bg-primary text-white shadow-md shadow-primary/25"
                            : "border-border bg-slate-50 text-text-secondary hover:border-primary/40"
                        }`}
                        aria-pressed={period === p}
                      >
                        {p === "S1" ? "Jan – Jun" : "Jul – Dec"}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="dependents"
                    className="mb-3 flex items-center gap-2 text-sm font-semibold text-text-primary"
                  >
                    <FiPercent className="text-primary" aria-hidden="true" />
                    Dependents (0–4+)
                  </label>
                  <input
                    id="dependents"
                    type="range"
                    min={0}
                    max={4}
                    value={dependents}
                    onChange={(e) => setDependents(Number(e.target.value))}
                    className="h-2 w-full accent-primary"
                    aria-valuemin={0}
                    aria-valuemax={4}
                    aria-valuenow={dependents}
                  />
                  <div className="mt-2 flex justify-between text-sm">
                    <span className="font-medium text-text-primary">
                      {dependents} dependent{dependents !== 1 ? "s" : ""}
                    </span>
                    <span className="text-text-secondary">Affects personal deduction</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="calc-panel relative m-4 rounded-2xl lg:m-6 lg:rounded-2xl">
              {calculating && (
                <div
                  className="absolute inset-0 z-10 animate-pulse rounded-2xl bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  aria-hidden="true"
                />
              )}

              <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-text-primary">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/15 text-secondary">
                  2
                </span>
                Your estimate
              </h3>

              {result ? (
                <motion.div
                  key={`${result.net}-${result.totalTax}`}
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="text-sm font-semibold uppercase tracking-wide text-text-secondary">
                    Estimated net salary
                  </p>
                  <AnimatedNumber
                    value={result.net}
                    className="mt-2 block text-5xl font-bold tracking-tight text-text-primary sm:text-6xl"
                  />

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                      <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">
                        Total tax deducted
                      </p>
                      <p className="mt-1 text-2xl font-bold text-text-primary">
                        {formatRON(result.totalTax)}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                      <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">
                        Effective tax rate
                      </p>
                      <p className="mt-1 text-2xl font-bold text-primary">
                        {result.effectiveTaxRate}%
                      </p>
                    </div>
                  </div>

                  <ul className="mt-8 space-y-5" aria-label="Tax breakdown">
                    {[
                      { label: "CAS (Pension 25%)", value: result.cas, color: "bg-primary" },
                      { label: "CASS (Health 10%)", value: result.cass, color: "bg-secondary" },
                      { label: "Income tax (10%)", value: result.incomeTax, color: "bg-accent" },
                    ].map((row) => (
                      <li key={row.label}>
                        <div className="mb-2 flex justify-between text-sm">
                          <span className="font-medium text-text-secondary">{row.label}</span>
                          <span className="font-bold text-text-primary">
                            {formatRON(row.value)}
                          </span>
                        </div>
                        <div className="h-3 overflow-hidden rounded-full bg-slate-200/80">
                          <motion.div
                            className={`h-full rounded-full ${row.color}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${(row.value / maxBar) * 100}%` }}
                            transition={{ duration: 0.55, ease: "easeOut" }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>

                  {(result.personalDeduction > 0 || result.minWageRelief > 0) && (
                    <div className="mt-6 space-y-2 rounded-xl bg-white/80 p-4 text-sm ring-1 ring-border">
                      {result.personalDeduction > 0 && (
                        <p className="text-text-secondary">
                          Personal deduction:{" "}
                          <strong className="text-text-primary">
                            {formatRON(result.personalDeduction)}
                          </strong>
                        </p>
                      )}
                      {result.minWageRelief > 0 && (
                        <p className="text-success">
                          Minimum wage relief: {formatRON(result.minWageRelief)}
                        </p>
                      )}
                    </div>
                  )}
                </motion.div>
              ) : (
                <div className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-white/50 px-6 text-center">
                  <p className="text-lg font-medium text-text-primary">
                    Enter a valid gross salary
                  </p>
                  <p className="mt-2 text-sm text-text-secondary">
                    Your net pay breakdown will appear here instantly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-text-secondary">
          Estimates for full-time employees at their primary workplace. Not a substitute for
          official payroll or tax advice.
        </p>
      </Container>
    </section>
  );
}
