"use client";

import { useMemo, useState } from "react";
import Question from "./Question";
import { GeneratedQuestionnaire } from "@/lib/questionnaire/generator";

interface QuestionnaireRendererProps {
  questionnaire: GeneratedQuestionnaire;
  onSubmit: (answers: Record<string, string | number | boolean>) => void;
}

export default function QuestionnaireRenderer({
  questionnaire,
  onSubmit,
}: QuestionnaireRendererProps) {
  const [answers, setAnswers] = useState<
    Record<string, string | number | boolean>
  >({});

  const [errors, setErrors] = useState<Record<string, string>>({});

  const progress = useMemo(() => {
    const total = questionnaire.questions.length;

    const completed = questionnaire.questions.filter((question) => {
      const value = answers[question.id];

      return (
        value !== undefined &&
        value !== "" &&
        value !== null
      );
    }).length;

    return Math.round((completed / total) * 100);
  }, [answers, questionnaire.questions]);

  function handleChange(
    id: string,
    value: string | number | boolean
  ) {
    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [id]: "",
    }));
  }

  function validate() {
    const validationErrors: Record<string, string> = {};

    questionnaire.questions.forEach((question) => {
      const value = answers[question.id];

      if (
        question.required &&
        (value === undefined || value === "" || value === null)
      ) {
        validationErrors[question.id] = "This field is required.";
      }
    });

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  }

  function handleSubmit() {
    if (!validate()) return;

    onSubmit(answers);
  }

  return (
    <div className="mx-auto max-w-3xl space-y-8">

      <div>
        <div className="mb-2 flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            {questionnaire.title}
          </h1>

          <span className="text-sm font-medium text-slate-500">
            {progress}% Complete
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {questionnaire.description && (
          <p className="mt-4 text-slate-600">
            {questionnaire.description}
          </p>
        )}
      </div>

      <div className="space-y-6">
        {questionnaire.questions.map((question) => (
          <div key={question.id}>
            <Question
              question={question}
              value={answers[question.id]}
              onChange={(value) =>
                handleChange(question.id, value)
              }
            />

            {errors[question.id] && (
              <p className="mt-2 text-sm text-red-500">
                {errors[question.id]}
              </p>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
      >
        Continue
      </button>

    </div>
  );
}