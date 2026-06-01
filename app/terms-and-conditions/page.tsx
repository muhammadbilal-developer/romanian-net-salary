import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { TermsContent } from "@/lib/legal/terms-content";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions for using Romanian Net Salary Calculator and related services.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms and Conditions" path="/terms-and-conditions">
      <TermsContent />
    </LegalPage>
  );
}
