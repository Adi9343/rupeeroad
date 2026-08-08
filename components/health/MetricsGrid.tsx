import MetricCard from "./MetricCard";

type MetricsGridProps = {
  debtScore: number;
  emergencyScore: number;
  savingsRate: number;
  investmentRate: number;
  insuranceScore: number;
};

export default function MetricsGrid({
  debtScore,
  emergencyScore,
  savingsRate,
  investmentRate,
  insuranceScore,
}: MetricsGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <MetricCard
        title="Debt Health"
        value={`${debtScore}/20`}
        subtitle="Debt management score"
      />

      <MetricCard
        title="Emergency Fund"
        value={`${emergencyScore}/20`}
        subtitle="Emergency preparedness"
      />

      <MetricCard
        title="Savings Rate"
        value={`${savingsRate.toFixed(1)}%`}
        subtitle="Monthly savings as % of income"
      />

      <MetricCard
        title="Investment Rate"
        value={`${investmentRate.toFixed(1)}%`}
        subtitle="Monthly investments as % of income"
      />

      <MetricCard
        title="Insurance"
        value={`${insuranceScore}/20`}
        subtitle="Protection score"
      />
    </div>
  );
}