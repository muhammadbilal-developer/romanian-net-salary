import { MIN_WAGE, RATES, RELIEF, type EmploymentType, type Period } from "./constants";

export interface SalaryInput {
  gross: number;
  dependents?: number;
  period?: Period;
  employmentType?: EmploymentType;
}

export interface SalaryResult {
  gross: number;
  net: number;
  cas: number;
  cass: number;
  incomeTax: number;
  personalDeduction: number;
  totalTax: number;
  effectiveTaxRate: number;
  taxableBase: number;
  minWageRelief: number;
}

export function getPersonalDeduction(
  gross: number,
  dependents: number,
  period: Period,
  employmentType: EmploymentType = "standard"
): number {
  const minWage =
    employmentType === "construction"
      ? MIN_WAGE.CONSTRUCTION
      : period === "S2"
        ? MIN_WAGE.S2
        : MIN_WAGE.S1;

  if (gross > minWage + 2000) return 0;

  const base: Record<number, number> = { 0: 550, 1: 700, 2: 900, 3: 1150, 4: 1550 };
  const d = Math.min(Math.max(0, dependents), 4);
  const ratio = Math.max(0, 1 - (gross - minWage) / 2000);
  return Math.round(base[d] * ratio);
}

function getMinWage(period: Period, employmentType: EmploymentType): number {
  if (employmentType === "construction") return MIN_WAGE.CONSTRUCTION;
  return period === "S2" ? MIN_WAGE.S2 : MIN_WAGE.S1;
}

function applyMinWageRelief(
  gross: number,
  period: Period,
  employmentType: EmploymentType
): number {
  const minWage = getMinWage(period, employmentType);
  if (gross !== minWage) return 0;
  return RELIEF[period];
}

export function calculateSalary({
  gross,
  dependents = 0,
  period = "S1",
  employmentType = "standard",
}: SalaryInput): SalaryResult {
  const relief = applyMinWageRelief(gross, period, employmentType);
  const taxableGross = Math.max(0, gross - relief);

  const cas = taxableGross * RATES.CAS;
  const cass = taxableGross * RATES.CASS;

  const personalDeduction = getPersonalDeduction(
    gross,
    dependents,
    period,
    employmentType
  );
  const taxableBase = Math.max(0, gross - cas - cass - personalDeduction);
  const incomeTax = taxableBase * RATES.INCOME_TAX;

  const net = gross - cas - cass - incomeTax;
  const totalTax = cas + cass + incomeTax;
  const effectiveTaxRate = gross > 0 ? ((gross - net) / gross) * 100 : 0;

  return {
    gross,
    net: Math.round(net * 100) / 100,
    cas: Math.round(cas * 100) / 100,
    cass: Math.round(cass * 100) / 100,
    incomeTax: Math.round(incomeTax * 100) / 100,
    personalDeduction,
    totalTax: Math.round(totalTax * 100) / 100,
    effectiveTaxRate: Math.round(effectiveTaxRate * 10) / 10,
    taxableBase: Math.round(taxableBase * 100) / 100,
    minWageRelief: relief,
  };
}

export function formatRON(value: number): string {
  return new Intl.NumberFormat("ro-RO", {
    style: "currency",
    currency: "RON",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
}

export function validateGross(value: string): string | null {
  if (value === "" || value === null || value === undefined) {
    return "Gross salary is required.";
  }
  const num = Number(value);
  if (Number.isNaN(num)) return "Please enter a valid number.";
  if (num <= 0) return "Gross salary must be greater than zero.";
  return null;
}
