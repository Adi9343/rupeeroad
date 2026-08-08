import { QuestionnaireConfig } from "../types";

const carQuestionnaire: QuestionnaireConfig = {
  id: "car",

  title: "Car Affordability",

  description: "Check whether you can comfortably afford a car.",

  questions: [
    "monthlyIncome",
    "existingEmi",
    "downPayment",
    "loanTenure",
    "age",
    "city",
  ],

  calculator: "car",
};

export default carQuestionnaire;