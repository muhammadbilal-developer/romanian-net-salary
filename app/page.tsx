import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Calculator from "@/components/Calculator";
import HowItWorks from "@/components/HowItWorks";
import InfoCards from "@/components/InfoCards";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { faqSchema, HOME_FAQS } from "@/lib/schema";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Romanian Net Salary Calculator — Gross to Net Pay 2026",
  description:
    "Free Romanian net salary calculator. Convert gross monthly pay to net take-home with full CAS, CASS, and income tax breakdown for 2026.",
  alternates: { canonical: SITE.url },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQS)} />
      <Hero />
      <Calculator />
      <HowItWorks />
      <InfoCards />
      <Faq />
    </>
  );
}
