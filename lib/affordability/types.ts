export type AffordabilityInput = {
  monthlyIncome: number;
  existingEmi: number;
  downPayment: number;
  interestRate: number;
  loanTenure: number;
};

export type AffordabilityResult = {
  safeEmi: number;
  maxLoan: number;
  assetPrice: number;
  rating: string;
  recommendation: string;
};