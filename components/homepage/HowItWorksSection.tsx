import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const steps = [
  {
    step: "01",
    icon: "🔍",
    title: "Search Your Purchase",
    description:
      "Search anything you plan to buy—from a phone or car to a house, vacation, wedding, or investment.",
  },
  {
    step: "02",
    icon: "📝",
    title: "Answer Simple Questions",
    description:
      "Provide a few financial details like income, expenses, savings, existing EMIs, and goals.",
  },
  {
    step: "03",
    icon: "🤖",
    title: "AI Analyzes Your Finances",
    description:
      "RupeeRoad evaluates affordability, budget impact, financial health, and long-term consequences.",
  },
  {
    step: "04",
    icon: "✅",
    title: "Get Your Recommendation",
    description:
      "Receive a personalized Buy, Wait, or Avoid recommendation along with practical financial guidance.",
  },
];

export default function HowItWorksSection() {
  return (
    <Section className="bg-white">
      <Heading
        title="How RupeeRoad Works"
        subtitle="Get a personalized financial recommendation in four simple steps."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <Card key={step.step} className="relative text-center">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-lg">
              Step {step.step}
            </div>

            <div className="mt-6 text-5xl">
              {step.icon}
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              {step.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              {step.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}