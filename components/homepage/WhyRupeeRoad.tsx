import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const features = [
  {
    title: "Purchase Decision",
    description:
      "Know whether you can truly afford a purchase before spending your money.",
  },
  {
    title: "Budget Planning",
    description:
      "Get a personalized monthly budget based on your income and expenses.",
  },
  {
    title: "Financial Health",
    description:
      "Understand your financial strengths, risks, and improvement areas.",
  },
  {
    title: "Net Worth Tracking",
    description:
      "See where you stand financially by analyzing your assets and liabilities.",
  },
  {
    title: "Investment Guidance",
    description:
      "Receive investment suggestions aligned with your financial capacity.",
  },
  {
    title: "AI Financial Advisor",
    description:
      "Get practical recommendations and actionable insights for smarter decisions.",
  },
];

export default function WhyRupeeRoad() {
  return (
    <Section className="bg-slate-50">
      <Heading
        title="Everything You Need to Make Smarter Financial Decisions"
        subtitle="RupeeRoad combines affordability analysis, budgeting, financial health, investments, and AI-powered guidance in one platform."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <h3 className="text-xl font-semibold text-slate-900">
              {feature.title}
            </h3>

            <p className="mt-3 text-slate-600 leading-7">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}