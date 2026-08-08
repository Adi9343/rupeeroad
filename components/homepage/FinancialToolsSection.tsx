import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const tools = [
  {
    icon: "🛒",
    title: "Purchase Decision",
    description:
      "Analyze whether you should buy now, wait, or avoid a purchase based on your financial situation.",
  },
  {
    icon: "💳",
    title: "EMI & Loan Analysis",
    description:
      "Understand safe EMI limits, loan affordability, and repayment impact before borrowing.",
  },
  {
    icon: "📊",
    title: "Budget Planner",
    description:
      "Create a practical monthly budget that balances spending, savings, and future goals.",
  },
  {
    icon: "📈",
    title: "SIP & Investment Planner",
    description:
      "Estimate investments required to achieve your financial goals with confidence.",
  },
  {
    icon: "💼",
    title: "Net Worth Tracker",
    description:
      "Track assets, liabilities, and monitor your financial progress over time.",
  },
  {
    icon: "❤️",
    title: "Financial Health Score",
    description:
      "Measure your overall financial wellness and discover areas for improvement.",
  },
  {
    icon: "🏦",
    title: "Retirement Planner",
    description:
      "Plan your retirement corpus based on your lifestyle and future income needs.",
  },
  {
    icon: "🤖",
    title: "AI Financial Advisor",
    description:
      "Receive personalized recommendations and actionable financial guidance powered by AI.",
  },
];

export default function FinancialToolsSection() {
  return (
    <Section className="bg-white">
      <Heading
        title="Powerful Financial Tools"
        subtitle="Everything you need to analyze purchases, improve your financial health, and plan for the future—all in one place."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {tools.map((tool) => (
          <Card key={tool.title}>
            <div className="text-5xl">{tool.icon}</div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              {tool.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              {tool.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}