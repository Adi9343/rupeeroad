type ProgressBarProps = {
  label: string;
  score: number;
  maxScore?: number;
};

export default function ProgressBar({
  label,
  score,
  maxScore = 20,
}: ProgressBarProps) {
  const percentage = Math.min((score / maxScore) * 100, 100);

  const color =
    percentage >= 80
      ? "bg-emerald-500"
      : percentage >= 60
      ? "bg-blue-500"
      : percentage >= 40
      ? "bg-amber-500"
      : "bg-red-500";

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-medium text-slate-700">
          {label}
        </span>

        <span className="font-semibold text-slate-900">
          {score}/{maxScore}
        </span>
      </div>

      <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className={`h-full rounded-full transition-all duration-700 ${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}