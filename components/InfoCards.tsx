"use client";

import { motion } from "motion/react";
import Container from "./Container";

const cards = [
  {
    title: "Romanian Tax System Overview",
    body: "Romanian employees pay social contributions and a flat income tax on earnings. As of 2026, the standard package is 25% CAS for pensions, 10% CASS for health, and 10% income tax calculated on a taxable base after statutory deductions. Employers also pay separate payroll taxes not shown in your payslip net figure. Our calculator focuses on employee-side deductions you see every month.",
  },
  {
    title: "CAS Explained",
    body: "CAS (Contribuția de Asigurări Sociale) funds the public pension system. Employees contribute 25% of gross salary. This is withheld before you receive pay and is distinct from employer contributions. CAS does not reduce your income tax base directly in the displayed formula — it is subtracted from gross when computing net pay alongside CASS and income tax.",
  },
  {
    title: "CASS Explained",
    body: "CASS (Contribuția de Asigurări Sociale de Sănătate) covers mandatory health insurance at 10% of gross salary. It grants access to state healthcare and is required for employees. Together with CAS, these contributions make up the largest share of paycheck deductions for most Romanian workers in 2026.",
  },
];

export default function InfoCards() {
  return (
    <section id="salary-info" className="bg-section-b section-pad section-divider scroll-mt-24">
      <Container>
        <h2 className="text-center text-3xl font-bold text-text-primary">Salary & tax details</h2>
        <p className="mx-auto mt-3 max-w-[680px] text-center text-text-secondary">
          Understand what is deducted from your Romanian paycheck each month.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.article
              key={card.title}
              className="glass-card glass-card-hover flex flex-col p-6 sm:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
            >
              <h3 className="text-lg font-semibold text-text-primary">{card.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">{card.body}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
