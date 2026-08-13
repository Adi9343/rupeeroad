"use client";

import { useState } from "react";

import CalculatorLayout from "@/components/layout/CalculatorLayout";
import FormInput from "@/components/ui/FormInput";
import PrimaryButton from "@/components/ui/PrimaryButton";
import ProgressIndicator from "@/components/ui/ProgressIndicator";

import BudgetSummaryCard from "@/components/budget/BudgetSummaryCard";

import { calculateBudget } from "@/lib/budget/engine";

export default function BudgetPlannerPage() {
  const [income, setIncome] = useState("");
  const [emi, setEmi] = useState("");
  const [rent, setRent] = useState("");
  const [groceries, setGroceries] = useState("");
  const [utilities, setUtilities] = useState("");
  const [transport, setTransport] = useState("");
  const [other, setOther] = useState("");

  const [result, setResult] = useState<
    ReturnType<typeof calculateBudget> | null
  >(null);

  function calculate() {
    const report = calculateBudget({
      monthlyIncome: Number(income),
      existingEmi: Number(emi),
      rent: Number(rent),
      groceries: Number(groceries),
      utilities: Number(utilities),
      transport: Number(transport),
      otherExpenses: Number(other),
    });

    setResult(report);
  }

  return (
    <CalculatorLayout
      title="Budget Planner"
      description="Understand where your money goes and improve your monthly financial health."
    >
      <ProgressIndicator
        currentStep={1}
        totalSteps={2}
      />

      <div className="space-y-5">
        <FormInput
          label="Monthly Income"
          type="number"
          value={income}
          onChange={setIncome}
          placeholder="Enter monthly income"
        />

        <FormInput
          label="Existing EMI"
          type="number"
          value={emi}
          onChange={setEmi}
          placeholder="Enter existing EMI"
        />

        <FormInput
          label="Rent"
          type="number"
          value={rent}
          onChange={setRent}
          placeholder="Enter monthly rent"
        />

        <FormInput
          label="Groceries"
          type="number"
          value={groceries}
          onChange={setGroceries}
          placeholder="Enter grocery expenses"
        />

        <FormInput
          label="Utilities"
          type="number"
          value={utilities}
          onChange={setUtilities}
          placeholder="Electricity, Internet, Gas etc."
        />

        <FormInput
          label="Transport"
          type="number"
          value={transport}
          onChange={setTransport}
          placeholder="Fuel, Travel etc."
        />

        <FormInput
          label="Other Expenses"
          type="number"
          value={other}
          onChange={setOther}
          placeholder="Other monthly expenses"
        />
      </div>

      <div className="mt-8">
        <PrimaryButton onClick={calculate}>
          Analyze Budget
        </PrimaryButton>
      </div>

      {result && (
        <>
          <div className="mt-10">
            <ProgressIndicator
              currentStep={2}
              totalSteps={2}
            />
          </div>

          <BudgetSummaryCard
            totalExpenses={result.totalExpenses}
            disposableIncome={result.disposableIncome}
            recommendedSavings={result.recommendedSavings}
            recommendedInvestments={result.recommendedInvestments}
            emergencyFundTarget={result.emergencyFundTarget}
            budgetHealthScore={result.budgetHealthScore}
            rating={result.rating}
            breakdown={result.breakdown}
          />
        </>
      )}
    </CalculatorLayout>
  );
}
