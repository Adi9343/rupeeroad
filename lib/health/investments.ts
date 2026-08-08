import {
  FinancialHealthInput,
  FinancialGrade,
} from "./types";

export type InvestmentHealthResult = {
  score: number;
  grade: FinancialGrade;
  investmentRate: number;
  recommendation: string;
};

export function calculateInvestmentHealth(
  input: FinancialHealthInput
): InvestmentHealthResult {
  const investmentRate =
    input.monthlyIncome === 0
      ? 0
      : (input.monthlySip / input.monthlyIncome) * 100;

  let score = 0;
  let grade: FinancialGrade = "D";
  let recommendation = "";

  if (investmentRate >= 20) {
    score = 20;
    grade = "A";
    recommendation =
      "Excellent investment discipline. Keep investing consistently.";
  } else if (investmentRate >= 15) {
    score = 16;
    grade = "B";
    recommendation =
      "Good investment habit. Aim for 20% of your income.";
  } else if (investmentRate >= 10) {
    score = 12;
    grade = "C";
    recommendation =
      "Increase your SIP gradually to build long-term wealth.";
  } else {
    score = 6;
    grade = "D";
    recommendation =
      "Your investment rate is low. Consider starting or increasing your SIP.";
  }

  return {
    score,
    grade,
    investmentRate,
    recommendation,
  };
}