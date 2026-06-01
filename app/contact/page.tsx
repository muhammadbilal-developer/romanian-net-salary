import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Romanian Net Salary Calculator — questions, feedback, and correction requests.",
};

export default function ContactPage() {
  return <ContactSection />;
}
