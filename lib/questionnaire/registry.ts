import { questions } from "./questions";
import { Question } from "./types";

/**
 * Returns a Question object by its ID.
 */
export function getQuestion(id: string): Question {
  const question = questions[id];

  if (!question) {
    throw new Error(`Question "${id}" not found.`);
  }

  return question;
}

/**
 * Returns an array of Question objects from an array of IDs.
 */
export function getQuestions(ids: string[]): Question[] {
  return ids.map(getQuestion);
}