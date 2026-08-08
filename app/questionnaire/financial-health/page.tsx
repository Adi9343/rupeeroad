"use client";

import { useState } from "react";

import FormInput from "@/components/ui/FormInput";
import PrimaryButton from "@/components/ui/PrimaryButton";

import ScoreCard from "@/components/health/ScoreCard";
import SummaryCard from "@/components/health/SummaryCard";
import StrengthList from "@/components/health/StrengthList";
import ImprovementList from "@/components/health/ImprovementList";
import MetricsGrid from "@/components/health/MetricsGrid";

import { calculateFinancialHealth } from "@/lib/health/engine";

export default function FinancialHealthPage() {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [existingEmi, setExistingEmi] = useState("");
  const [newEmi, setNewEmi] = useState("");

  const [monthlyExpenses, setMonthlyExpenses] = useState("");
  const [monthlySavings, setMonthlySavings] = useState("");
  const [emergencyFund, setEmergencyFund] = useState("");

  const [healthInsuranceCover, setHealthInsuranceCover] = useState("");
  const [lifeInsuranceCover, setLifeInsuranceCover] = useState("");

  const [monthlySip, setMonthlySip] = useState("");
  const [totalInvestments, setTotalInvestments] = useState("");

  const [dependents, setDependents] = useState("");

  const [report, setReport] = useState<ReturnType<
    typeof calculateFinancialHealth
  > | null>(null);

  function generateReport() {
    const result = calculateFinancialHealth({
      monthlyIncome: Number(monthlyIncome),
      existingEmi: Number(existingEmi),
      newEmi: Number(newEmi),

      monthlyExpenses: Number(monthlyExpenses),
      monthlySavings: Number(monthlySavings),
      emergencyFund: Number(emergencyFund),

      healthInsuranceCover: Number(healthInsuranceCover),
      lifeInsuranceCover: Number(lifeInsuranceCover),

      monthlySip: Number(monthlySip),
      totalInvestments: Number(totalInvestments),

      dependents: Number(dependents),
    });

    setReport(result);
  }

  return (
    <main className="min-h-screen bg-slate-100 py-12 px-6">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="text-center text-4xl font-bold">
          Financial Health Check
        </h1>

        <p className="mt-3 text-center text-gray-600">
          Complete your financial profile to generate your Financial Health Report.
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
            label="New EMI"
            type="number"
            value={newEmi}
            onChange={setNewEmi}
            placeholder="Enter new EMI"
          />

          <FormInput
            label="Monthly Expenses"
            type="number"
            value={monthlyExpenses}
            onChange={setMonthlyExpenses}
            placeholder="Enter monthly expenses"
          />

          <FormInput
            label="Monthly Savings"
            type="number"
            value={monthlySavings}
            onChange={setMonthlySavings}
            placeholder="Enter monthly savings"
          />

          <FormInput
            label="Emergency Fund"
            type="number"
            value={emergencyFund}
            onChange={setEmergencyFund}
            placeholder="Enter emergency fund"
          />

          <FormInput
            label="Health Insurance Cover"
            type="number"
            value={healthInsuranceCover}
            onChange={setHealthInsuranceCover}
            placeholder="Enter health insurance cover"
          />

          <FormInput
            label="Life Insurance Cover"
            type="number"
            value={lifeInsuranceCover}
            onChange={setLifeInsuranceCover}
            placeholder="Enter life insurance cover"
          />

          <FormInput
            label="Monthly SIP"
            type="number"
            value={monthlySip}
            onChange={setMonthlySip}
            placeholder="Enter monthly SIP"
          />

          <FormInput
            label="Total Investments (Optional)"
            type="number"
            value={totalInvestments}
            onChange={setTotalInvestments}
            placeholder="Enter total investments"
          />

          <FormInput
            label="Dependents"
            type="number"
            value={dependents}
            onChange={setDependents}
            placeholder="Enter number of dependents"
          />
        </div>

        <div className="mt-8">
          <PrimaryButton onClick={generateReport}>
            Generate Financial Health Report
          </PrimaryButton>
        </div>

        {report && (
          <div className="mt-10 space-y-6">
            <ScoreCard
              score={report.score}
              grade={report.rating}
            />

            <SummaryCard
              summary={`Your overall financial health is rated "${report.rating}". Your Financial Health Score is ${report.score}/100.`}
            />

            <MetricsGrid
              debtScore={report.debt.score}
              emergencyScore={report.emergency.score}
              savingsRate={report.savings.savingsRate}
              investmentRate={report.investments.investmentRate}
              insuranceScore={report.insurance.score}
            />

            <StrengthList
              strengths={report.strengths}
            />

            <ImprovementList
              improvements={report.improvements}
            />
          </div>
        )}
      </div>
    </main>
  );
}