export type BudgetInput = {
  monthlyIncome: number;
  existingEmi: number;
  rent: number;
  groceries: number;
  utilities: number;
  transport: number;
  otherExpenses: number;
};

export type BudgetBreakdown = {
  essentials: number;
  emi: number;
  discretionary: number;
  savingsPotential: number;
};

export type BudgetResult = {
  totalExpenses: number;
  disposableIncome: number;
  recommendedSavings: number;
  recommendedInvestments: number;
  emergencyFundTarget: number;
  budgetHealthScore: number;
  rating: "Excellent" | "Good" | "Needs Attention";
  breakdown: BudgetBreakdown;
};