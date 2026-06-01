export function DisclaimerContent() {
  return (
    <>
      <h1 className="text-4xl font-bold text-text-primary">Disclaimer</h1>
      <p className="mt-4 text-sm text-text-secondary">Last updated: June 1, 2026</p>

      <p>
        <strong>Important:</strong> Romanian Net Salary Calculator provides <strong>estimates only</strong>. Results
        are not official payroll figures, tax filings, or legal advice. Always verify amounts with your employer,
        payslip, or a qualified payroll specialist before making financial decisions.
      </p>

      <h2>Estimates, Not Guarantees</h2>
      <p>
        Our tool applies publicly known 2026 employee contribution rates (25% CAS, 10% CASS, 10% income tax) and
        simplified rules for personal deductions and minimum-wage relief. Real net pay can differ due to bonuses,
        meal vouchers, voluntary pension pillars, garnishments, union dues, multiple employers, part-time
        schedules, medical leave, or company-specific benefits. We make no guarantee that calculator output matches
        your actual bank deposit.
      </p>

      <h3>Sector Exemptions Ended in 2025</h3>
      <p>
        Under GEO 156/2024, sector-specific income tax exemptions for IT, construction, and agriculture were
        abolished effective January 2025. Our employment-type selector exists for transparency and minimum-wage
        threshold differences (for example, construction&apos;s higher minimum wage of RON 4,582), not because IT
        or other sectors pay different contribution percentages in 2026. If you still see outdated exemption
        claims elsewhere online, treat them as obsolete unless confirmed by current legislation.
      </p>

      <h2>Consult a Payroll Specialist</h2>
      <p>
        For contract negotiations, tax planning, cross-border employment, PFA/SRL structures, or disputes with
        employers, consult a licensed accountant, payroll provider, or employment lawyer. Our team does not
        review individual payslips through the public calculator.
      </p>

      <h3>Regulatory Changes</h3>
      <p>
        Romanian tax and social contribution rules can change mid-year (for example, minimum wage adjustments
        between S1 and S2 2026). We update the tool in good faith but may not reflect same-day legislative
        changes. Check official ANAF and government publications for binding guidance.
      </p>

      <h2>Personal Deduction Approximation</h2>
      <p>
        Personal deduction (deducerea personală) calculations use a simplified taper model aligned with common
        competitor calculators. Actual entitlement depends on dependents, primary workplace status, and income
        proximity to statutory caps. Edge cases may not be modeled.
      </p>

      <h3>Minimum Wage Relief</h3>
      <p>
        When gross salary equals the applicable minimum wage, we apply period-specific relief amounts (RON 300
        in S1, RON 200 in S2) to the contribution base where implemented. Part-time or non-primary employment may
        not qualify.
      </p>

      <h2>No Professional Relationship</h2>
      <p>
        Using this website does not create an advisor-client, attorney-client, or fiduciary relationship. Content
        is general information for employees and job seekers in Romania.
      </p>

      <h2>External Content and Images</h2>
      <p>
        Stock photography and third-party references are illustrative. They do not imply endorsement by depicted
        brands or institutions.
      </p>

      <h3>Limitation of Reliance</h3>
      <p>
        You assume full responsibility for decisions made based on calculator output. We disclaim liability for
        losses arising from reliance on estimates, to the fullest extent permitted by law. See our Terms and
        Conditions for additional liability limitations.
      </p>

      <h2>Accuracy Feedback</h2>
      <p>
        If you believe a formula is outdated, contact us with sources (law references, payslip comparisons). We
        welcome corrections that improve educational accuracy for all users.
      </p>

      <h3>Historical Comparisons</h3>
      <p>
        Do not use this tool to reconstruct net pay for tax years before 2026 without verifying that rates and
        exemptions differed. Pre-2025 IT exemptions and other sector rules are not modeled in the current version.
      </p>

      <h2>Currency and Rounding</h2>
      <p>
        All amounts are shown in Romanian Lei (RON). Intermediate values may be rounded for display; small
        rounding differences versus payroll software are normal and do not indicate a fundamental formula error.
      </p>

      <h3>Health and Safety of Decisions</h3>
      <p>
        Financial stress affects wellbeing. If calculator results influence major life choices (relocating,
        resigning, taking debt), seek personalized advice from qualified professionals in addition to using this
        educational tool.
      </p>
    </>
  );
}
