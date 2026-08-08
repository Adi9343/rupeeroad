export type AffordabilityPdfData = {
  title: string;

  monthlyIncome: number;
  existingEmi: number;
  downPayment: number;

  safeEmi: number;
  maxLoan: number;
  assetPrice: number;

  assetLabel: string;

  rating: string;
  recommendation: string;

  generatedAt: Date;
};