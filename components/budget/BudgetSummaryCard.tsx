type Props = {
  totalExpenses: number;
  disposableIncome: number;
  recommendedSavings: number;
  recommendedInvestments: number;
  emergencyFundTarget: number;
  budgetHealthScore: number;
  rating: string;
  breakdown: {
    essentials: number;
    emi: number;
    discretionary: number;
    savingsPotential: number;
  };
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export default function BudgetSummaryCard({
  totalExpenses,
  disposableIncome,
 recommendedSavings,
  recommendedInvestments,
  emergencyFundTarget,
  budgetHealthScore,
  rating,
  breakdown,
}: Props) {
  const monthlyIncome =
    totalExpenses + Math.max(0, disposableIncome);

  const percentage = (value: number) => {
    if (monthlyIncome <= 0) return 0;
    return Math.round((value / monthlyIncome) * 100);
  };

  const savingsGap = Math.max(
    0,
    recommendedSavings - disposableIncome
  );

  const investmentGap = Math.max(
    0,
    recommendedInvestments -
      Math.max(0, disposableIncome - recommendedSavings)
  );

  const tips: string[] = [];

  if (budgetHealthScore >= 70) {
    tips.push(
      "Your budget is excellent. Keep maintaining your spending discipline."
    );
    tips.push(
      "Increase your investments whenever your income grows."
    );
  } else if (budgetHealthScore >= 40) {
    tips.push(
      "Your finances are stable, but reducing discretionary spending could improve your savings."
    );
    tips.push(
      "Review your monthly expenses regularly to identify unnecessary costs."
    );
  } else {
    tips.push(
      "Your expenses are consuming most of your income."
    );
    tips.push(
      "Avoid taking new loans until your monthly surplus improves."
    );
  }

  return (
    <div className="mt-8 space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">
          Budget Analysis
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Stat
            title="Total Expenses"
            value={formatCurrency(totalExpenses)}
          />

          <Stat
            title="Disposable Income"
            value={formatCurrency(disposableIncome)}
          />

          <Stat
            title="Recommended Savings"
            value={formatCurrency(recommendedSavings)}
          />

          <Stat
            title="Recommended Investments"
            value={formatCurrency(recommendedInvestments)}
          />

          <Stat
            title="Emergency Fund Target"
            value={formatCurrency(emergencyFundTarget)}
          />

          <Stat
            title="Budget Health Score"
            value={`${budgetHealthScore}/100`}
          />
        </div>

        <div className="mt-8 rounded-xl bg-slate-100 p-5">
          <p className="text-sm text-slate-500">
            Overall Rating
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {rating}
          </h3>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">
          Income Breakdown
        </h2>

        <div className="mt-6 space-y-4">
          <BreakdownRow
            label="Essentials"
            amount={breakdown.essentials}
            percentage={percentage(breakdown.essentials)}
          />

          <BreakdownRow
            label="EMIs"
            amount={breakdown.emi}
            percentage={percentage(breakdown.emi)}
          />

          <BreakdownRow
            label="Other Expenses"
            amount={breakdown.discretionary}
            percentage={percentage(breakdown.discretionary)}
          />

          <BreakdownRow
            label="Money Left"
            amount={breakdown.savingsPotential}
            percentage={percentage(breakdown.savingsPotential)}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <h2 className="text-2xl font-bold">
          Personalized Recommendations
        </h2>

        <ul className="mt-5 list-disc space-y-3 pl-5 text-slate-700">
          {tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}

          {savingsGap > 0 && (
            <li>
              Increase your monthly surplus by{" "}
              <strong>
                {formatCurrency(savingsGap)}
              </strong>{" "}
              to achieve your recommended savings target.
            </li>
          )}

          {investmentGap > 0 && (
            <li>
              Free up another{" "}
              <strong>
                {formatCurrency(investmentGap)}
              </strong>{" "}
              each month for long-term investments.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

function Stat({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <p className="mt-2 text-xl font-bold">
        {value}
      </p>
    </div>
  );
}

function BreakdownRow({
  label,
  amount,
  percentage,
}: {
  label: string;
  amount: number;
  percentage: number;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
      <div>
        <p className="font-semibold">{label}</p>
        <p className="text-sm text-slate-500">
          {percentage}% of income
        </p>
      </div>

      <p className="text-lg font-bold">
        {formatCurrency(amount)}
      </p>
    </div>
  );
}