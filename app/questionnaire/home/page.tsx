"use client";

import { useState } from "react";

import CalculatorLayout from "@/components/layout/CalculatorLayout";
import FormInput from "@/components/ui/FormInput";
import PrimaryButton from "@/components/ui/PrimaryButton";
import ResultCard from "@/components/ui/ResultCard";

import { calculateAffordability } from "@/lib/affordability/engine";

export default function HomeAffordabilityPage() {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [existingEmi, setExistingEmi] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interestRate, setInterestRate] = useState("8.5");
  const [loanTenure, setLoanTenure] = useState("20");

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
      title="Home Affordability Calculator"
      description="Find the maximum house price you can comfortably afford based on your income, EMIs and available down payment."
    >
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
          label="Available Down Payment"
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
          placeholder="Enter annual interest rate"
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
          Calculate Home Affordability
        </PrimaryButton>
      </div>

      {result && (
        <div className="mt-10">
          <ResultCard
            title="Home Affordability Report"
            safeEmi={result.safeEmi}
            maxLoan={result.maxLoan}
            assetLabel="Maximum House Price"
            assetValue={result.assetPrice}
            rating={result.rating}
            recommendation={result.recommendation}
          />
        </div>
      )}
    </CalculatorLayout>
  );
}