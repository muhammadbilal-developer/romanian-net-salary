"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";
import Container from "./Container";
import { HOME_FAQS } from "@/lib/schema";
import { SITE_IMAGES } from "@/lib/site-images";
import { fadeInUp } from "@/lib/motion";

const faqImage = SITE_IMAGES.faq;

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-section-a section-pad scroll-mt-24">
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

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="lg:sticky lg:top-28">
            <motion.div className="motion-reveal relative" {...fadeInUp}>
              <div className="relative min-h-[20rem] overflow-hidden rounded-2xl border border-border shadow-xl sm:min-h-[24rem] lg:min-h-[32rem]">
                <Image
                  src={faqImage.src}
                  alt={faqImage.alt}
                  fill
                  loading="lazy"
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 672px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/20 bg-white/95 p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <FiHelpCircle size={22} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-text-primary">Need clarity?</p>
                      <p className="text-xs text-text-secondary">
                        Answers based on 2026 employee tax rules in Romania.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div className="motion-reveal space-y-3" {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.08 }}>
            {HOME_FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary sm:px-6 sm:py-5 sm:text-base"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span className="pr-2">{faq.question}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <FiChevronDown size={18} />
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${i}`}
                    className="accordion-panel"
                    data-open={isOpen ? "true" : "false"}
                    aria-hidden={!isOpen}
                  >
                    <div className="accordion-panel-inner">
                      <p className="border-t border-border bg-slate-50/80 px-5 pb-5 pt-3 text-sm leading-relaxed text-text-secondary sm:px-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
