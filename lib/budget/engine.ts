import type { BudgetInput, BudgetResult } from "./types";

export function calculateBudget(
  input: BudgetInput
): BudgetResult {
  const essentials =
    input.rent +
    input.groceries +
    input.utilities +
    input.transport;

  const discretionary = input.otherExpenses;

  const totalExpenses =
    essentials +
    input.existingEmi +
    discretionary;

  const disposableIncome =
    input.monthlyIncome - totalExpenses;

  const recommendedSavings = Math.max(
    0,
    Math.round(input.monthlyIncome * 0.2)
  );

  const recommendedInvestments = Math.max(
    0,
    Math.round(input.monthlyIncome * 0.15)
  );

  const emergencyFundTarget =
    totalExpenses * 6;

  let budgetHealthScore = Math.round(
    (disposableIncome / input.monthlyIncome) * 100
  );

  budgetHealthScore = Math.max(
    0,
    Math.min(100, budgetHealthScore)
  );

  let rating: BudgetResult["rating"];

  if (budgetHealthScore >= 40) {
    rating = "Excellent";
  } else if (budgetHealthScore >= 20) {
    rating = "Good";
  } else {
    rating = "Needs Attention";
  }

  return {
    totalExpenses,
    disposableIncome,
    recommendedSavings,
    recommendedInvestments,
    emergencyFundTarget,
    budgetHealthScore,
    rating,
    breakdown: {
      essentials,
      emi: input.existingEmi,
      discretionary,
      savingsPotential: Math.max(0, disposableIncome),
    },
  };
}