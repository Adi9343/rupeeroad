type ResultCardProps = {
  title: string;
  safeEmi: number;
  maxLoan: number;
  assetLabel: string;
  assetValue: number;
  rating: string;
  recommendation: string;
};

export default function ResultCard({
  title,
  safeEmi,
  maxLoan,
  assetLabel,
  assetValue,
  rating,
  recommendation,
}: ResultCardProps) {
  const badgeColor =
    rating === "Excellent"
      ? "bg-emerald-100 text-emerald-700"
      : rating === "Good"
      ? "bg-blue-100 text-blue-700"
      : rating === "Fair"
      ? "bg-amber-100 text-amber-700"
      : "bg-red-100 text-red-700";

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">
        {title}
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-sm text-slate-500">
            Safe Monthly EMI
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {formatCurrency(safeEmi)}
          </h3>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-sm text-slate-500">
            Maximum Loan
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {formatCurrency(maxLoan)}
          </h3>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-sm text-slate-500">
            {assetLabel}
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {formatCurrency(assetValue)}
          </h3>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div
          className={`rounded-full px-5 py-2 text-sm font-bold ${badgeColor}`}
        >
          {rating}
        </div>

        <span className="text-sm text-slate-500">
          Affordability Rating
        </span>
      </div>

      <div className="mt-6 rounded-xl bg-slate-50 p-5">
        <h3 className="font-semibold text-slate-900">
          Recommendation
        </h3>

        <p className="mt-2 leading-7 text-slate-700">
          {recommendation}
        </p>
      </div>
    </div>
  );
}