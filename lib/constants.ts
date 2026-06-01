export const RATES = {
  CAS: 0.25,
  CASS: 0.10,
  INCOME_TAX: 0.10,
} as const;

export const MIN_WAGE = { S1: 4050, S2: 4325, CONSTRUCTION: 4582 } as const;

export const RELIEF = { S1: 300, S2: 200 } as const;

export type Period = "S1" | "S2";
export type EmploymentType = "standard" | "it" | "construction";

export const EMPLOYMENT_TYPES: {
  id: EmploymentType;
  label: string;
  tooltip?: string;
}[] = [
  { id: "standard", label: "Standard Employee" },
  {
    id: "it",
    label: "IT Sector",
    tooltip: "IT tax exemption ended Jan 2025 — standard rates apply.",
  },
  { id: "construction", label: "Construction Sector" },
];

export const SITE = {
  name: "Romanian Net Salary Calculator",
  url: "https://romaniannetsalary.com",
  email: "contact@romaniannetsalary.com",
} as const;

export const NAV_LINKS = [
  { label: "Tool", href: "#calculator" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Salary Info", href: "#salary-info" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "/contact", isRoute: true },
] as const;

export const FOOTER_NAV = [
  { label: "Tool", href: "/#calculator" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Salary Info", href: "/#salary-info" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const FOOTER_LEGAL = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Contact", href: "/contact" },
] as const;
