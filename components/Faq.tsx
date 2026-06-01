"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiChevronDown } from "react-icons/fi";
import Container from "./Container";
import FaqGallery from "./FaqGallery";
import { HOME_FAQS } from "@/lib/schema";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-section-a section-pad w-full scroll-mt-24">
      <Container>
        <header className="mx-auto max-w-2xl text-center">
          <div className="section-accent-bar" aria-hidden="true" />
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-text-secondary">
            Common questions about Romanian net salary, CAS, CASS, and 2026 tax rules.
          </p>
        </header>
      </Container>

      <Container className="mt-10 sm:mt-12">
        <FaqGallery />
      </Container>

      <Container className="mt-12 sm:mt-14">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-3">
            {HOME_FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={faq.question} className="glass-card overflow-hidden">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    {faq.question}
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 text-primary"
                      aria-hidden="true"
                    >
                      <FiChevronDown size={20} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <p className="border-t border-border px-5 pb-4 pt-2 text-sm leading-relaxed text-text-secondary">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
