import { Question } from "./types";

export const questions: Record<string, Question> = {
  monthlyIncome: {
    id: "monthlyIncome",
    label: "Monthly Income",
    type: "currency",
    placeholder: "Enter your monthly income",
    required: true,
  },

  existingEmi: {
    id: "existingEmi",
    label: "Existing EMI",
    type: "currency",
    placeholder: "Enter your total monthly EMI",
    required: true,
  },

  downPayment: {
    id: "downPayment",
    label: "Down Payment",
    type: "currency",
    placeholder: "Enter your down payment",
    required: true,
  },

  loanTenure: {
    id: "loanTenure",
    label: "Loan Tenure",
    type: "number",
    placeholder: "Loan tenure in years",
    required: true,
    min: 1,
    max: 30,
    unit: "Years",
  },

  age: {
    id: "age",
    label: "Age",
    type: "number",
    placeholder: "Enter your age",
    required: true,
    min: 18,
    max: 100,
    unit: "Years",
  },

  city: {
    id: "city",
    label: "City",
    type: "text",
    placeholder: "Enter your city",
    required: true,
  },

  savings: {
    id: "savings",
    label: "Current Savings",
    type: "currency",
    placeholder: "Enter your savings",
    required: false,
  },
};