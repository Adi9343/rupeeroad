"use client";

import { useState } from "react";

import CalculatorLayout from "@/components/layout/CalculatorLayout";
import FormInput from "@/components/ui/FormInput";
import PrimaryButton from "@/components/ui/PrimaryButton";
import ResultCard from "@/components/ui/ResultCard";
import ProgressIndicator from "@/components/ui/ProgressIndicator";

import { calculateAffordability } from "@/lib/affordability/engine";

export default function LaptopAffordabilityPage() {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [existingEmi, setExistingEmi] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interestRate, setInterestRate] = useState("14");
  const [loanTenure, setLoanTenure] = useState("3");

  const [result, setResult] = useState<{
    safeEmi: number;
    maxLoan: number;
    assetPrice: number;
    rating: string;
    recommendation: string;
  } | null>(null);

  function calculate() {
    const report = calculateAffordability({
      monthlyIncome: Number(monthlyIncome),
      existingEmi: Number(existingEmi),
      downPayment: Number(downPayment),
      interestRate: Number(interestRate),
      loanTenure: Number(loanTenure),
    });

    setResult(report);
  }

  return (
    <CalculatorLayout
      title="Laptop Affordability Calculator"
      description="Find the ideal laptop budget based on your income and existing financial commitments."
    >
      <ProgressIndicator currentStep={1} totalSteps={2} />

      <div className="space-y-5">
        <FormInput
          label="Monthly Income"
          type="number"
          value={monthlyIncome}
          onChange={setMonthlyIncome}
          placeholder="Enter monthly income"
        />

        <FormInput
          label="Existing EMI"
          type="number"
          value={existingEmi}
          onChange={setExistingEmi}
          placeholder="Enter existing EMI"
        />

        <FormInput
          label="Down Payment"
          type="number"
          value={downPayment}
          onChange={setDownPayment}
          placeholder="Enter down payment"
        />

        <FormInput
          label="Interest Rate (%)"
          type="number"
          value={interestRate}
          onChange={setInterestRate}
          placeholder="Enter interest rate"
        />

        <FormInput
          label="Loan Tenure (Years)"
          type="number"
          value={loanTenure}
          onChange={setLoanTenure}
          placeholder="Enter loan tenure"
        />
      </div>

      <div className="mt-8">
        <PrimaryButton onClick={calculate}>
          Calculate Laptop Affordability
        </PrimaryButton>
      </div>

      {result && (
        <div className="mt-10">
          <ProgressIndicator currentStep={2} totalSteps={2} />

          <ResultCard
            title="Laptop Affordability Report"
            safeEmi={result.safeEmi}
            maxLoan={result.maxLoan}
            assetLabel="Maximum Laptop Budget"
            assetValue={result.assetPrice}
            rating={result.rating}
            recommendation={result.recommendation}
          />
        </div>
      )}
    </CalculatorLayout>
  );
}