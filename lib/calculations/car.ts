export interface CarAffordabilityInput {
  monthlyIncome: number;
  existingEmi: number;
  downPayment: number;
  loanTenure: number; // Years
  carPrice: number;
  interestRate: number; // Annual interest rate in %
}

export interface CarAffordabilityResult {
  safeEmi: number;
  maximumLoan: number;
  recommendedCarBudget: number;

  actualLoanRequired: number;
  estimatedEmi: number;
  totalEmiAfterPurchase: number;
  purchaseWithinSafeEmi: boolean;

  affordabilityScore: number;
  affordabilityRating: "Excellent" | "Good" | "Fair" | "Poor";
  recommendation: string;
}

function calculateLoanAmount(
  emi: number,
  tenureYears: number,
  annualRatePercent: number
): number {
  const monthlyRate = annualRatePercent / 100 / 12;
  const months = tenureYears * 12;

  if (emi <= 0 || months <= 0) {
    return 0;
  }

  // If interest rate is 0%
  if (monthlyRate === 0) {
    return emi * months;
  }

  return (
    emi *
    ((1 - Math.pow(1 + monthlyRate, -months)) / monthlyRate)
  );
}

function calculateEmi(
  loanAmount: number,
  tenureYears: number,
  annualRatePercent: number
): number {
  const monthlyRate = annualRatePercent / 100 / 12;
  const months = tenureYears * 12;

  if (loanAmount <= 0 || months <= 0) {
    return 0;
  }

  // If interest rate is 0%
  if (monthlyRate === 0) {
    return loanAmount / months;
  }

  return (
    (loanAmount *
      monthlyRate *
      Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1)
  );
}

export function calculateCarAffordability(
  input: CarAffordabilityInput
): CarAffordabilityResult {
  const {
    monthlyIncome,
    existingEmi,
    downPayment,
    loanTenure,
    carPrice,
    interestRate,
  } = input;

  // -----------------------------------------
  // 1. Safe EMI capacity
  // -----------------------------------------

  const maxAllowedEmi = monthlyIncome * 0.35;

  const safeEmi = Math.max(
    0,
    maxAllowedEmi - existingEmi
  );

  // -----------------------------------------
  // 2. Maximum loan RupeeRoad recommends
  // -----------------------------------------

  const maximumLoan = calculateLoanAmount(
    safeEmi,
    loanTenure,
    interestRate
  );

  // -----------------------------------------
  // 3. Maximum recommended car budget
  // -----------------------------------------

  const recommendedCarBudget =
    maximumLoan + downPayment;

  // -----------------------------------------
  // 4. Actual loan required
  // -----------------------------------------

  const actualLoanRequired = Math.max(
    0,
    carPrice - downPayment
  );

  // -----------------------------------------
  // 5. Estimated EMI for selected car
  // -----------------------------------------

  const estimatedEmi = calculateEmi(
    actualLoanRequired,
    loanTenure,
    interestRate
  );

  // -----------------------------------------
  // 6. Total EMI after buying the car
  // -----------------------------------------

  const totalEmiAfterPurchase =
    existingEmi + estimatedEmi;

  // -----------------------------------------
  // 7. Check safe EMI
  // -----------------------------------------

  const purchaseWithinSafeEmi =
    estimatedEmi <= safeEmi;

  // -----------------------------------------
  // 8. Financial Health Score
  // -----------------------------------------

  let affordabilityScore = 100;

  if (monthlyIncome > 0) {
    const totalEmiRatio =
      (totalEmiAfterPurchase / monthlyIncome) * 100;

    affordabilityScore = Math.round(
      100 - totalEmiRatio
    );
  }

  affordabilityScore = Math.max(
    0,
    Math.min(100, affordabilityScore)
  );

  // -----------------------------------------
  // 9. Rating + recommendation
  // -----------------------------------------

  let affordabilityRating:
    | "Excellent"
    | "Good"
    | "Fair"
    | "Poor";

  let recommendation = "";

  if (purchaseWithinSafeEmi) {
    if (affordabilityScore >= 80) {
      affordabilityRating = "Excellent";

      recommendation =
        "This car appears comfortably affordable for you. Your estimated EMI is well within your safe EMI limit, leaving room for savings and other financial goals.";
    } else if (affordabilityScore >= 60) {
      affordabilityRating = "Good";

      recommendation =
        "This car appears affordable for you. Your estimated EMI is within your safe limit, but maintain a healthy emergency fund and avoid taking on additional debt.";
    } else if (affordabilityScore >= 40) {
      affordabilityRating = "Fair";

      recommendation =
        "This car is within your calculated EMI limit, but your overall monthly EMI burden is getting high. Consider a larger down payment or a slightly cheaper car.";
    } else {
      affordabilityRating = "Poor";

      recommendation =
        "Although the car EMI is within the calculated limit, your overall EMI burden is high. Consider reducing the car budget or increasing your down payment.";
    }
  } else {
    affordabilityRating = "Poor";

    recommendation =
      "This car exceeds your safe EMI capacity. Consider increasing your down payment, choosing a less expensive car, or reducing the loan amount before proceeding.";
  }

  // -----------------------------------------
  // 10. Return final result
  // -----------------------------------------

  return {
    safeEmi: Math.round(safeEmi),

    maximumLoan: Math.round(maximumLoan),

    recommendedCarBudget: Math.round(
      recommendedCarBudget
    ),

    actualLoanRequired: Math.round(
      actualLoanRequired
    ),

    estimatedEmi: Math.round(
      estimatedEmi
    ),

    totalEmiAfterPurchase: Math.round(
      totalEmiAfterPurchase
    ),

    purchaseWithinSafeEmi,

    affordabilityScore,

    affordabilityRating,

    recommendation,
  };
}