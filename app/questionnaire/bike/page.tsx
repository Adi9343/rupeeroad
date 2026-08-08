"use client";

import { useState } from "react";

import FormInput from "@/components/ui/FormInput";
import PrimaryButton from "@/components/ui/PrimaryButton";
import ResultCard from "@/components/ui/ResultCard";

import { calculateAffordability } from "@/lib/affordability/engine";

export default function BikeAffordabilityPage() {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [existingEmi, setExistingEmi] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interestRate, setInterestRate] = useState("10");
  const [loanTenure, setLoanTenure] = useState("5");

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
    <main className="min-h-screen bg-slate-100 py-12 px-6">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="text-center text-4xl font-bold">
          Bike Affordability Calculator
        </h1>

        <p className="mt-3 text-center text-slate-600">
          Find the maximum bike price you can comfortably afford.
        </p>

        <div className="mt-10 space-y-5">
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
            Calculate Bike Affordability
          </PrimaryButton>
        </div>

        {result && (
          <div className="mt-10">
            <ResultCard
              title="Bike Affordability Report"
              safeEmi={result.safeEmi}
              maxLoan={result.maxLoan}
              assetLabel="Maximum Bike Price"
              assetValue={result.assetPrice}
              rating={result.rating}
              recommendation={result.recommendation}
            />
          </div>
        )}
      </div>
    </main>
  );
}