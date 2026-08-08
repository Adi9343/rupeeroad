import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Card from "@/components/ui/Card";

const benefits = [
  {
    icon: "⚡",
    title: "Instant Analysis",
    description:
      "Get affordability insights within seconds before making a purchase.",
  },
  {
    icon: "🛡️",
    title: "Reduce Financial Mistakes",
    description:
      "Avoid unnecessary debt and make confident financial decisions.",
  },
  {
    icon: "📊",
    title: "Personalized Recommendations",
    description:
      "Every suggestion is based on your own financial situation.",
  },
  {
    icon: "🤖",
    title: "AI Powered",
    description:
      "Receive practical guidance backed by intelligent financial analysis.",
  },
];

export default function CategoriesSection() {
  return (
    <Section>
      <Heading
        title="Why Choose RupeeRoad?"
        subtitle="More than a calculator—RupeeRoad helps you make smarter financial decisions before you spend."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((item) => (
          <Card key={item.title}>
            <div className="text-4xl">{item.icon}</div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-3 text-slate-600 leading-7">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}