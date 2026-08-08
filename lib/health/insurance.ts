import {
  FinancialHealthInput,
  FinancialGrade,
} from "./types";

export type InsuranceHealthResult = {
  score: number;
  grade: FinancialGrade;
  recommendation: string;
};

export function calculateInsuranceHealth(
  input: FinancialHealthInput
): InsuranceHealthResult {
  let score = 0;
  let grade: FinancialGrade = "D";
  let recommendation = "";

  const hasHealthInsurance =
    input.healthInsuranceCover > 0;

  const recommendedLifeCover =
    input.monthlyIncome * 12 * 10;

  const hasAdequateLifeInsurance =
    input.lifeInsuranceCover >= recommendedLifeCover;

  if (hasHealthInsurance && hasAdequateLifeInsurance) {
    score = 20;
    grade = "A";
    recommendation =
      "Your insurance coverage is excellent.";
  } else if (hasHealthInsurance || hasAdequateLifeInsurance) {
    score = 12;
    grade = "B";
    recommendation =
      "Improve your insurance coverage for better financial protection.";
  } else {
    score = 5;
    grade = "D";
    recommendation =
      "Health and life insurance coverage should be your priority.";
  }

  return {
    score,
    grade,
    recommendation,
  };
}