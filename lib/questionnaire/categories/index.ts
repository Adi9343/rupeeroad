import car from "./car";

import { QuestionnaireConfig } from "../types";

export const categoryRegistry: Record<string, QuestionnaireConfig> = {
  car,
};

export function getCategory(category: string): QuestionnaireConfig {
  const config = categoryRegistry[category];

  if (!config) {
    throw new Error(`Category "${category}" not found.`);
  }

  return config;
}