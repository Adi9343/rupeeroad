export const DEBT_SCORE = {
  EXCELLENT: {
    maxDti: 20,
    points: 30,
    status: "Excellent",
    recommendation:
      "Your debt level is excellent. Maintain your current borrowing discipline.",
  },

  VERY_GOOD: {
    maxDti: 30,
    points: 25,
    status: "Very Good",
    recommendation:
      "Your debt level is healthy, but avoid taking unnecessary loans.",
  },

  GOOD: {
    maxDti: 35,
    points: 20,
    status: "Good",
    recommendation:
      "Your debt is manageable, but try to reduce your EMI burden over time.",
  },

  FAIR: {
    maxDti: 40,
    points: 15,
    status: "Fair",
    recommendation:
      "Your debt level is becoming high. Avoid new loans until your EMI ratio improves.",
  },

  HIGH_RISK: {
    maxDti: 50,
    points: 8,
    status: "High Risk",
    recommendation:
      "Your EMI burden is high. Focus on reducing debt before making major purchases.",
  },

  CRITICAL: {
    points: 0,
    status: "Critical",
    recommendation:
      "Your debt level is critically high. Prioritize debt repayment and avoid additional borrowing.",
  },
} as const;

export const EMERGENCY_SCORE = {
  EXCELLENT: {
    minMonths: 6,
    points: 20,
    status: "Excellent",
    recommendation:
      "Excellent emergency fund. You are well prepared for unexpected expenses.",
  },

  VERY_GOOD: {
    minMonths: 5,
    points: 18,
    status: "Very Good",
    recommendation:
      "Your emergency fund is strong. Continue building toward six months of expenses.",
  },

  GOOD: {
    minMonths: 4,
    points: 15,
    status: "Good",
    recommendation:
      "You have a reasonable emergency fund, but increasing it will improve your financial security.",
  },

  FAIR: {
    minMonths: 3,
    points: 10,
    status: "Fair",
    recommendation:
      "Build your emergency fund further to better protect against unexpected events.",
  },

  POOR: {
    minMonths: 1,
    points: 5,
    status: "Poor",
    recommendation:
      "Your emergency fund is limited. Make building savings a priority.",
  },

  CRITICAL: {
    points: 0,
    status: "Critical",
    recommendation:
      "You have little or no emergency fund. Start building one as soon as possible.",
  },
} as const;