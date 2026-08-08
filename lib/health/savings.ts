import {
  FinancialHealthInput,
  FinancialGrade,
} from "./types";

export type SavingsHealthResult = {
  score: number;
  grade: FinancialGrade;
  savingsRate: number;
  recommendation: string;
};

export function calculateSavingsHealth(
  input: FinancialHealthInput
): SavingsHealthResult {
  const savingsRate =
    input.monthlyIncome === 0
      ? 0
      : (input.monthlySavings / input.monthlyIncome) * 100;

  let score = 0;
  let grade: FinancialGrade = "D";
  let recommendation = "";

  if (savingsRate >= 30) {
    score = 20;
    grade = "A";
    recommendation = "Excellent savings habit. Keep it up.";
  } else if (savingsRate >= 20) {
    score = 16;
    grade = "B";
    recommendation = "Good savings rate. Try to reach 30%.";
  } else if (savingsRate >= 10) {
    score = 12;
    grade = "C";
    recommendation =
      "Increase your monthly savings gradually.";
  } else {
    score = 6;
    grade = "D";
    recommendation =
      "Your savings rate is low. Prioritize building savings.";
  }

  return {
    score,
    grade,
    savingsRate,
    recommendation,
  };
}