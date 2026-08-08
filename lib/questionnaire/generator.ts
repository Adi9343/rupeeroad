import { QuestionnaireConfig, Question } from "./types";
import { getQuestions } from "./registry";

export interface GeneratedQuestionnaire {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
  calculator: string;
}

export function generateQuestionnaire(
  config: QuestionnaireConfig
): GeneratedQuestionnaire {
  return {
    id: config.id,
    title: config.title,
    description: config.description,
    questions: getQuestions(config.questions),
    calculator: config.calculator,
  };
}