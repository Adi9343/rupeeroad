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