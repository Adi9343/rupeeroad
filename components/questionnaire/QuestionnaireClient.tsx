"use client";

import { useState } from "react";

import QuestionnaireRenderer from "./QuestionnaireRenderer";
import CarResultCard from "@/components/results/CarResultCard";

import {
  calculateCarAffordability,
  CarAffordabilityResult,
} from "@/lib/calculations/car";

import { GeneratedQuestionnaire } from "@/lib/questionnaire/generator";

interface Props {
  questionnaire: GeneratedQuestionnaire;
  productName: string;
  variantName: string;
  finalPrice: number;
}

export default function QuestionnaireClient({
  questionnaire,
  productName,
  variantName,
  finalPrice,
}: Props) {
  const [result, setResult] =
    useState<CarAffordabilityResult | null>(null);

  function handleSubmit(
    answers: Record<string, string | number | boolean>
  ) {
    const calculation = calculateCarAffordability({
      monthlyIncome: Number(
        answers.monthlyIncome ?? 0
      ),

      existingEmi: Number(
        answers.existingEmi ?? 0
      ),

      downPayment: Number(
        answers.downPayment ?? 0
      ),

      loanTenure: Number(
        answers.loanTenure ?? 5
      ),

      carPrice: finalPrice,

      interestRate: Number(
        answers.interestRate ?? 9
      ),
    });

    setResult(calculation);
  }

  if (result) {
    return (
      <CarResultCard
        productName={productName}
        variantName={variantName}
        finalPrice={finalPrice}
        result={result}
      />
    );
  }

  return (
    <QuestionnaireRenderer
      questionnaire={questionnaire}
      onSubmit={handleSubmit}
    />
  );
}