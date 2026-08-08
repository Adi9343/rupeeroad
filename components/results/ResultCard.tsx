"use client";

interface ResultCardProps {
  title: string;
  safeEmi: number;
  maxLoan: number;
  assetLabel: string;
  assetValue: number;
  rating: string;
  recommendation: string;
}

export default function ResultCard({
  title,
  safeEmi,
  maxLoan,
  assetLabel,
  assetValue,
  rating,
  recommendation,
}: ResultCardProps) {
  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  const getRatingColor = () => {
    switch (rating) {
      case "Excellent":
        return "bg-green-100 text-green-700";

      case "Good":
        return "bg-blue-100 text-blue-700";

      case "Fair":
        return "bg-yellow-100 text-yellow-700";

      default:
        return "bg-red-100 text-red-700";
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      {/* Heading */}
      <h2 className="mb-8 text-3xl font-bold text-slate-900">
        {title}
      </h2>

      {/* Financial Results */}
      <div className="grid gap-6 md:grid-cols-3">
        <ResultItem
          title="Safe Monthly EMI"
          value={formatCurrency(safeEmi)}
        />

        <ResultItem
          title="Maximum Loan"
          value={formatCurrency(maxLoan)}
        />

        <ResultItem
          title={assetLabel}
          value={formatCurrency(assetValue)}
        />
      </div>

      {/* Rating */}
      <div className="mt-8 flex items-center justify-between">
        <span
          className={`rounded-full px-5 py-2 text-sm font-semibold ${getRatingColor()}`}
        >
          {rating}
        </span>

        <span className="text-sm text-slate-500">
          Affordability Rating
        </span>
      </div>

      {/* Recommendation */}
      <div className="mt-8 rounded-2xl bg-slate-50 p-5">
        <h3 className="mb-2 text-lg font-semibold text-slate-900">
          Recommendation
        </h3>

        <p className="leading-7 text-slate-600">
          {recommendation}
        </p>
      </div>
    </div>
  );
}

interface ResultItemProps {
  title: string;
  value: string;
}

function ResultItem({ title, value }: ResultItemProps) {
  return (
    <div className="rounded-2xl bg-slate-50 p-5">
      <p className="text-sm text-slate-500">{title}</p>

      <h3 className="mt-2 text-2xl font-bold text-slate-900">
        {value}
      </h3>
    </div>
  );
}