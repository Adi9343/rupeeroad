"use client";
import FormInput from "@/components/ui/FormInput";
import { useState } from "react";
import PrimaryButton from "@/components/ui/PrimaryButton";
import {
  calculateSafeEmi,
  calculateEstimatedLoan,
} from "@/lib/calculations";
export default function CarQuestionnairePage() {
    const [income, setIncome] = useState("");
    const [emi, setEmi] = useState("");
    const [downPayment, setDownPayment] = useState("");
    const [loanTenure, setLoanTenure] = useState("");
    const [result, setResult] = useState("");
    const calculateAffordability = () => {
 const safeEmi = calculateSafeEmi(
  Number(income),
  Number(emi)
);
const estimatedLoan = calculateEstimatedLoan(
  safeEmi,
  Number(loanTenure)
);
setResult(
  `Your safe EMI is ₹${safeEmi.toFixed(0)} per month and your estimated loan amount is ₹${estimatedLoan.toFixed(0)}`
);
};
  return (
    <main className="min-h-screen flex items-center justify-center">
    <div className="text-center">
  <h1 className="text-4xl font-bold">
    Car Affordability Check
  </h1>

  <p className="mt-3 text-gray-600">
    Answer a few questions to see how much car you can safely afford.
  </p>
</div>
<FormInput
  label="Monthly Income"
  type="number"
  placeholder="Enter your monthly income"
  value={income}
  onChange={setIncome}
/>
<FormInput
  label="Existing EMI"
  type="number"
  placeholder="Enter your existing EMI"
  value={emi}
  onChange={setEmi}
/>
<FormInput
  label="Down Payment"
  type="number"
  placeholder="Enter your down payment"
  value={downPayment}
  onChange={setDownPayment}
/>
<FormInput
  label="Loan Tenure (Years)"
  type="number"
  placeholder="Enter loan tenure"
  value={loanTenure}
  onChange={setLoanTenure}
/>
<div className="mt-8">
 <PrimaryButton onClick={calculateAffordability}>
  Calculate Affordability
</PrimaryButton>
</div>
{result && (
  <div className="mt-6 rounded-xl border border-green-300 bg-green-50 p-4">
    <p className="font-semibold">{result}</p>
  </div>
)}
    </main>
  );
}