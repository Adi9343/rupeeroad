import CircularScore from "./CircularScore";

type ScoreCardProps = {
  score: number;
  grade: string;
};

export default function ScoreCard({
  score,
  grade,
}: ScoreCardProps) {
  const badgeColor =
    grade === "Excellent"
      ? "bg-emerald-100 text-emerald-700"
      : grade === "Good"
      ? "bg-blue-100 text-blue-700"
      : grade === "Fair"
      ? "bg-amber-100 text-amber-700"
      : "bg-red-100 text-red-700";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
        <CircularScore score={score} />

        <div className="flex flex-col items-center md:items-end">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            Overall Rating
          </p>

          <div
            className={`mt-3 rounded-full px-6 py-2 text-lg font-bold ${badgeColor}`}
          >
            {grade}
          </div>

          <p className="mt-4 max-w-xs text-center text-sm leading-6 text-slate-600 md:text-right">
            This score summarizes your debt management, emergency fund,
            savings, investments, and insurance readiness.
          </p>
        </div>
      </div>
    </div>
  );
}