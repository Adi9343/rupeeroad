import { calculateDebtHealth } from "./debt";
import { calculateEmergencyHealth } from "./emergency";
import { calculateSavingsHealth } from "./savings";
import { calculateInsuranceHealth } from "./insurance";
import { calculateInvestmentHealth } from "./investments";
import { FinancialHealthInput } from "./types";

export function calculateFinancialHealth(input: FinancialHealthInput) {
  const debt = calculateDebtHealth(input);
  const emergency = calculateEmergencyHealth(input);
  const savings = calculateSavingsHealth(input);
  const insurance = calculateInsuranceHealth(input);
  const investments = calculateInvestmentHealth(input);

  const score =
    debt.score +
    emergency.score +
    savings.score +
    insurance.score +
    investments.score;

  let rating = "";

  if (score >= 85) {
    rating = "Excellent";
  } else if (score >= 70) {
    rating = "Good";
  } else if (score >= 55) {
    rating = "Fair";
  } else {
    rating = "Needs Improvement";
  }

  const strengths: string[] = [];
  const improvements: string[] = [];

  if (debt.score >= 18) {
    strengths.push("Excellent debt management");
  } else {
    improvements.push(debt.recommendation);
  }

  if (emergency.score >= 18) {
    strengths.push("Strong emergency fund");
  } else {
    improvements.push(emergency.recommendation);
  }

  if (savings.grade === "A") {
    strengths.push("Healthy savings habit");
  } else {
    improvements.push(savings.recommendation);
  }

  if (insurance.grade === "A") {
    strengths.push("Well protected with insurance");
  } else {
    improvements.push(insurance.recommendation);
  }

  if (investments.grade === "A") {
    strengths.push("Consistent long-term investing");
  } else {
    improvements.push(investments.recommendation);
  }

  return {
    score,
    rating,
    strengths,
    improvements,
    debt,
    emergency,
    savings,
    insurance,
    investments,
  };
}