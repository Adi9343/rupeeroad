export function calculateSafeEmi(
  income: number,
  existingEmi: number
) {
  return income * 0.3 - existingEmi;
}
export function calculateEstimatedLoan(
  safeEmi: number,
  loanTenure: number
) {
  return safeEmi * loanTenure * 12;
}
export function calculateLoanEligibility(
  emi: number,
  annualInterestRate: number,
  years: number
) {
  const monthlyRate = annualInterestRate / 12 / 100;
  const months = years * 12;

  if (monthlyRate === 0) {
    return emi * months;
  }

  return (
    emi *
    ((1 - Math.pow(1 + monthlyRate, -months)) / monthlyRate)
  );
}
export function calculateAffordableCarPrice(
  loanAmount: number,
  downPayment: number
) {
  return loanAmount + downPayment;
}
export function calculateAffordabilityRating(
  income: number,
  totalEmi: number
) {
  const emiRatio = (totalEmi / income) * 100;

  if (emiRatio <= 20) {
    return "Excellent";
  }

  if (emiRatio <= 30) {
    return "Good";
  }

  if (emiRatio <= 40) {
    return "Fair";
  }

  return "Risky";
}
export function calculateRecommendation(rating: string) {
  switch (rating) {
    case "Excellent":
      return "You can comfortably afford this purchase. You still have room in your monthly budget for savings and future goals.";

    case "Good":
      return "This purchase appears affordable. Keep your total EMI below 30% of your monthly income to maintain financial flexibility.";

    case "Fair":
      return "Consider choosing a slightly less expensive vehicle or increasing your down payment to reduce your monthly EMI.";

    default:
      return "This purchase may put pressure on your finances. Consider lowering your budget or increasing your down payment before proceeding.";
  }
}