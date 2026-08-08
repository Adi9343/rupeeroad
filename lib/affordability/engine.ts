import {
  calculateSafeEmi,
  calculateLoanEligibility,
  calculateAffordabilityRating,
  calculateRecommendation,
} from "@/lib/calculations";

import type {
  AffordabilityInput,
  AffordabilityResult,
} from "./types";

export function calculateAffordability(
  input: AffordabilityInput
): AffordabilityResult {
  const safeEmi = calculateSafeEmi(
    input.monthlyIncome,
    input.existingEmi
  );

  const maxLoan = calculateLoanEligibility(
    safeEmi,
    input.interestRate,
    input.loanTenure
  );

  const rating = calculateAffordabilityRating(
    input.monthlyIncome,
    input.existingEmi + safeEmi
  );

  const recommendation =
    calculateRecommendation(rating);

  return {
    safeEmi: Math.round(safeEmi),
    maxLoan: Math.round(maxLoan),
    assetPrice: Math.round(
      maxLoan + input.downPayment
    ),
    rating,
    recommendation,
  };
}