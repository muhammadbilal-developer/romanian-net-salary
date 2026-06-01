import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { DisclaimerContent } from "@/lib/legal/disclaimer-content";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Disclaimer: Romanian Net Salary Calculator provides estimates only. Sector exemptions ended in 2025.",
};

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer" path="/disclaimer">
      <DisclaimerContent />
    </LegalPage>
  );
}
