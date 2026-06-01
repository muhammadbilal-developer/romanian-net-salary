import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { PrivacyPolicyContent } from "@/lib/legal/privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Romanian Net Salary Calculator — how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy-policy">
      <PrivacyPolicyContent />
    </LegalPage>
  );
}
