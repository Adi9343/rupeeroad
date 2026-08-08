import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const features = [
  {
    icon: "🛒",
    title: "Purchase Decision",
    description:
      "Know whether you should buy now, wait, or avoid the purchase based on your financial situation.",
  },
  {
    icon: "💵",
    title: "Budget Planning",
    description:
      "Build a realistic monthly budget and understand how every purchase affects your finances.",
  },
  {
    icon: "📈",
    title: "Financial Health",
    description:
      "Measure your financial strength with a simple score and identify areas for improvement.",
  },
  {
    icon: "🏦",
    title: "Net Worth",
    description:
      "Track your assets, liabilities, and overall financial growth in one place.",
  },
  {
    icon: "📊",
    title: "Investment Guidance",
    description:
      "Receive investment suggestions that match your income, goals, and risk profile.",
  },
  {
    icon: "🤖",
    title: "AI Financial Advisor",
    description:
      "Ask questions and receive practical, personalized financial guidance powered by AI.",
  },
];

export default function WhyRupeeRoadSection() {
  return (
    <Section className="bg-slate-50">
      <Heading
        title="Everything You Need for Better Financial Decisions"
        subtitle="RupeeRoad combines affordability analysis, budgeting, financial health, investments, and AI-powered guidance into one intelligent platform."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <div className="text-5xl">{feature.icon}</div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              {feature.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}