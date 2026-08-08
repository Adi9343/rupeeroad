"use client";

import { Question as QuestionType } from "@/lib/questionnaire/types";

interface QuestionProps {
  question: QuestionType;
  value: string | number | boolean | undefined;
  onChange: (value: string | number | boolean) => void;
}

export default function Question({
  question,
  value,
  onChange,
}: QuestionProps) {
  const inputClass =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

  const renderInput = () => {
    switch (question.type) {
      case "text":
        return (
          <input
            id={question.id}
            type="text"
            value={(value as string) ?? ""}
            placeholder={question.placeholder}
            onChange={(e) => onChange(e.target.value)}
            className={inputClass}
            autoComplete="off"
          />
        );

      case "number":
      case "currency":
        return (
          <div className="relative">
            {question.type === "currency" && (
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                ₹
              </span>
            )}

            <input
              id={question.id}
              type="number"
              value={(value as number | string) ?? ""}
              placeholder={question.placeholder}
              min={question.min}
              max={question.max}
              onChange={(e) =>
                onChange(
                  e.target.value === ""
                    ? ""
                    : Number(e.target.value)
                )
              }
              className={`${inputClass} ${
                question.type === "currency" ? "pl-8" : ""
              }`}
            />
          </div>
        );

      case "select":
        return (
          <select
            id={question.id}
            value={(value as string) ?? ""}
            onChange={(e) => onChange(e.target.value)}
            className={inputClass}
          >
            <option value="">Select an option</option>

            {question.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case "radio":
        return (
          <div className="space-y-3">
            {question.options?.map((option) => (
              <label
                key={option.value}
                className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50"
              >
                <input
                  type="radio"
                  name={question.id}
                  checked={value === option.value}
                  onChange={() => onChange(option.value)}
                />

                <span>{option.label}</span>
              </label>
            ))}
          </div>
        );

      case "checkbox":
        return (
          <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50">
            <input
              type="checkbox"
              checked={Boolean(value)}
              onChange={(e) => onChange(e.target.checked)}
            />

            <span>{question.label}</span>
          </label>
        );

      case "date":
        return (
          <input
            id={question.id}
            type="date"
            value={(value as string) ?? ""}
            onChange={(e) => onChange(e.target.value)}
            className={inputClass}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <label
        htmlFor={question.id}
        className="mb-2 block text-lg font-semibold text-slate-800"
      >
        {question.label}

        {question.required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      {question.description && (
        <p className="mb-4 text-sm text-slate-500">
          {question.description}
        </p>
      )}

      {renderInput()}

      {question.unit && (
        <p className="mt-2 text-xs text-slate-500">
          Unit: {question.unit}
        </p>
      )}
    </div>
  );
}