export type QuestionType =
  | "text"
  | "number"
  | "currency"
  | "select"
  | "radio"
  | "checkbox"
  | "date";

export interface QuestionOption {
  label: string;
  value: string;
}

export interface Question {
  id: string;
  label: string;
  type: QuestionType;

  placeholder?: string;
  description?: string;

  required?: boolean;

  options?: QuestionOption[];

  min?: number;
  max?: number;

  unit?: string;
}

export interface QuestionnaireConfig {
  id: string;
  title: string;
  description?: string;

  questions: string[];

  calculator: string;
}