import {
  FinancialHealthInput,
  EmergencyHealthResult,
  EmergencyLevel,
} from "./types";
import { EMERGENCY_SCORE } from "./constants";

function getEmergencyLevel(monthsCovered: number): EmergencyLevel {
  if (monthsCovered >= EMERGENCY_SCORE.EXCELLENT.minMonths) {
    return "EXCELLENT";
  }

  if (monthsCovered >= EMERGENCY_SCORE.VERY_GOOD.minMonths) {
    return "VERY_GOOD";
  }

  if (monthsCovered >= EMERGENCY_SCORE.GOOD.minMonths) {
    return "GOOD";
  }

  if (monthsCovered >= EMERGENCY_SCORE.FAIR.minMonths) {
    return "FAIR";
  }

  if (monthsCovered >= EMERGENCY_SCORE.POOR.minMonths) {
    return "POOR";
  }

  return "CRITICAL";
}

export function calculateEmergencyHealth(
  input: FinancialHealthInput
): EmergencyHealthResult {
  const monthsCovered =
    input.monthlyExpenses > 0
      ? input.emergencyFund / input.monthlyExpenses
      : 0;

  const level = getEmergencyLevel(monthsCovered);

  const config = EMERGENCY_SCORE[level];

  return {
    score: config.points,
    monthsCovered,
    status: config.status,
    recommendation: config.recommendation,
  };
}