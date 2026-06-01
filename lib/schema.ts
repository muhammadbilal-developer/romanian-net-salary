import { SITE } from "./constants";

export const HOME_FAQS = [
  {
    question: "How is net salary calculated in Romania?",
    answer:
      "Net salary equals gross minus CAS (25% pension), CASS (10% health), and income tax (10% on the taxable base after deductions). Our calculator applies the 2026 formula in the correct statutory order.",
  },
  {
    question: "What are CAS and CASS?",
    answer:
      "CAS (Contribuția de Asigurări Sociale) is the employee pension contribution at 25% of gross salary. CASS (Contribuția de Asigurări Sociale de Sănătate) is the health insurance contribution at 10% of gross salary. Both are mandatory for employees.",
  },
  {
    question: "Did the IT sector tax exemption end?",
    answer:
      "Yes. Under GEO 156/2024, IT, construction, and agriculture income-tax exemptions were abolished from January 2025. IT employees now pay the same 25% CAS, 10% CASS, and 10% income tax as all other employees.",
  },
  {
    question: "What is the minimum wage in Romania for 2026?",
    answer:
      "For January–June 2026 (S1), the national minimum wage is RON 4,050. From July–December 2026 (S2), it rises to RON 4,325. Construction sector minimum wage is RON 4,582 throughout 2026.",
  },
  {
    question: "What is the personal deduction (deducerea personală)?",
    answer:
      "The personal deduction reduces your income tax base when gross salary is at or below approximately minimum wage plus RON 2,000. The amount depends on dependents and tapers as salary increases toward the cap.",
  },
  {
    question: "Is this calculator an exact payroll figure?",
    answer:
      "No. This tool provides estimates based on standard full-time employment at your primary workplace. Actual net pay may differ due to bonuses, meal tickets, union dues, or employer-specific policies. Consult a payroll specialist for exact figures.",
  },
] as const;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    description:
      "Free Romanian net salary calculator. Convert gross monthly pay to net take-home with full CAS, CASS, and income tax breakdown for 2026.",
  };
}

export function faqSchema(
  faqs: readonly { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
