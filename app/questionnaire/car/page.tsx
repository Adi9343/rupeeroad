"use client";
import ResultCard from "@/components/ui/ResultCard";
import FormInput from "@/components/ui/FormInput";
import { useState } from "react";
import PrimaryButton from "@/components/ui/PrimaryButton";
import {
  calculateSafeEmi,
  calculateLoanEligibility,
  calculateAffordableCarPrice,
  calculateAffordabilityRating,
} from "@/lib/calculations";
export default function CarQuestionnairePage() {
  const [income, setIncome] = useState("");
  const [emi, setEmi] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [interestRate, setInterestRate] = useState("9");
 const [result, setResult] = useState<{
  safeEmi: number;
  maxLoan: number;
  maxCarPrice: number;
  rating: string;
} | null>(null);
  const calculateAffordability = () => {
    const safeEmi = calculateSafeEmi(
      Number(income),
      Number(emi)
    );
    const estimatedLoan = calculateLoanEligibility(
  safeEmi,
  Number(interestRate),
      Number(loanTenure)
    );
    const affordableCarPrice = calculateAffordableCarPrice(
  estimatedLoan,
  Number(downPayment)
);
const affordabilityRating = calculateAffordabilityRating(
  Number(income),
  safeEmi + Number(emi)
);
  setResult({
  safeEmi,
  maxLoan: estimatedLoan,
  maxCarPrice: affordableCarPrice,
  rating: affordabilityRating,
});
  };
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-lg">
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
        

<FormInput
  label="Interest Rate (%)"
  type="number"
  placeholder="Enter interest rate"
  value={interestRate}
  onChange={setInterestRate}
/>
        <div className="mt-8">
          <PrimaryButton onClick={calculateAffordability}>
            Calculate Affordability
          </PrimaryButton>
        </div>
       {result && (
  <ResultCard
  safeEmi={result.safeEmi}
  maxLoan={result.maxLoan}
  maxCarPrice={result.maxCarPrice}
  rating={result.rating}
/>
)}
      </div>
    </main>
  );
}