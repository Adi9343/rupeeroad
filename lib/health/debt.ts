import {
  FinancialHealthInput,
  DebtHealthResult,
  DebtLevel,
} from "./types";
import { DEBT_SCORE } from "./constants";

function getDebtLevel(dti: number): DebtLevel {
  if (dti <= DEBT_SCORE.EXCELLENT.maxDti) {
    return "EXCELLENT";
  }

  if (dti <= DEBT_SCORE.VERY_GOOD.maxDti) {
    return "VERY_GOOD";
  }

  if (dti <= DEBT_SCORE.GOOD.maxDti) {
    return "GOOD";
  }

  if (dti <= DEBT_SCORE.FAIR.maxDti) {
    return "FAIR";
  }

  if (dti <= DEBT_SCORE.HIGH_RISK.maxDti) {
    return "HIGH_RISK";
  }

  return "CRITICAL";
}

export function calculateDebtHealth(
  input: FinancialHealthInput
): DebtHealthResult {
  const totalEmi = input.existingEmi + input.newEmi;
  const dti = (totalEmi / input.monthlyIncome) * 100;

  const level = getDebtLevel(dti);
  const config = DEBT_SCORE[level];

  return {
    score: config.points,
    dti,
    status: config.status,
    recommendation: config.recommendation,
  };
}