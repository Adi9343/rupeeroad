"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

import CalculatorLayout from "@/components/layout/CalculatorLayout";
import FormInput from "@/components/ui/FormInput";
import PrimaryButton from "@/components/ui/PrimaryButton";
import CarResultCard from "@/components/results/CarResultCard";

import {
  calculateCarAffordability,
  CarAffordabilityResult,
} from "@/lib/calculations/car";

export default function CarQuestionnairePage() {
  const searchParams = useSearchParams();

  const product = searchParams.get("product") || "car";
  const variant = searchParams.get("variant") || "-";
  const price = Number(searchParams.get("price")) || 0;

  const [income, setIncome] = useState("");
  const [emi, setEmi] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [interestRate, setInterestRate] = useState("9");

  const [result, setResult] =
    useState<CarAffordabilityResult | null>(null);

  function calculate() {
    const report = calculateCarAffordability({
      monthlyIncome: Number(income),
      existingEmi: Number(emi),
      downPayment: Number(downPayment),
      loanTenure: Number(loanTenure),
      carPrice: price,
      interestRate: Number(interestRate),
    });

    setResult(report);
  }

  const formatProductName = (slug: string) => {
    return slug
      .split("-")
      .map(
        (word) =>
          word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(" ");
  };

  return (
    <CalculatorLayout
      title="Car Affordability Calculator"
      description="Find out how much car you can comfortably afford based on your income, existing EMI, down payment and loan interest rate."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {/* Monthly Income */}
        <FormInput
          label="Monthly Income"
          type="number"
          placeholder="Enter your monthly income"
          value={income}
          onChange={setIncome}
        />

        {/* Existing EMI */}
        <FormInput
          label="Existing EMI"
          type="number"
          placeholder="Enter your existing EMI"
          value={emi}
          onChange={setEmi}
        />

        {/* Down Payment */}
        <FormInput
          label="Down Payment"
          type="number"
          placeholder="Enter your down payment"
          value={downPayment}
          onChange={setDownPayment}
        />

        {/* Loan Tenure */}
        <FormInput
          label="Loan Tenure (Years)"
          type="number"
          placeholder="Enter loan tenure"
          value={loanTenure}
          onChange={setLoanTenure}
        />

        {/* Interest Rate */}
        <FormInput
          label="Loan Interest Rate (% p.a.)"
          type="number"
          placeholder="Enter interest rate"
          value={interestRate}
          onChange={setInterestRate}
        />
      </div>

      {/* Calculate Button */}
      <div className="mt-8">
        <PrimaryButton onClick={calculate}>
          Calculate Car Affordability
        </PrimaryButton>
      </div>

      {/* Result */}
      {result && (
        <div className="mt-10">
          <CarResultCard
            productName={formatProductName(product)}
            variantName={variant}
            finalPrice={price}
            result={result}
          />
        </div>
      )}
    </CalculatorLayout>
  );
}