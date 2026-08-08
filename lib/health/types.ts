export type FinancialGrade = "A+" | "A" | "B" | "C" | "D" | "F";

export interface FinancialHealthInput {
  monthlyIncome: number;
  existingEmi: number;
  newEmi: number;

  monthlyExpenses: number;
  monthlySavings: number;
  emergencyFund: number;

  lifeInsuranceCover: number;
  healthInsuranceCover: number;

  monthlySip: number;
  totalInvestments?: number;

  dependents: number;
}

export interface FinancialHealthReport {
  score: number;
  grade: FinancialGrade;

  summary: string;

  strengths: string[];
  improvements: string[];
}

export type DebtStatus =
  | "Excellent"
  | "Very Good"
  | "Good"
  | "Fair"
  | "High Risk"
  | "Critical";

export type DebtLevel =
  | "EXCELLENT"
  | "VERY_GOOD"
  | "GOOD"
  | "FAIR"
  | "HIGH_RISK"
  | "CRITICAL";

export interface DebtHealthResult {
  score: number;
  dti: number;
  status: DebtStatus;
  recommendation: string;
}

export type EmergencyStatus =
  | "Excellent"
  | "Very Good"
  | "Good"
  | "Fair"
  | "Poor"
  | "Critical";

export type EmergencyLevel =
  | "EXCELLENT"
  | "VERY_GOOD"
  | "GOOD"
  | "FAIR"
  | "POOR"
  | "CRITICAL";

export interface EmergencyHealthResult {
  score: number;
  monthsCovered: number;
  status: EmergencyStatus;
  recommendation: string;
}