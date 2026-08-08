type CircularScoreProps = {
  score: number;
  label?: string;
};

export default function CircularScore({
  score,
  label = "Financial Health",
}: CircularScoreProps) {
  const percentage = Math.max(0, Math.min(score, 100));

  const radius = 70;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg
        width={radius * 2}
        height={radius * 2}
        className="-rotate-90"
      >
        <circle
          stroke="#E2E8F0"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        <circle
          stroke="#10B981"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{
            transition: "stroke-dashoffset 0.8s ease",
          }}
        />
      </svg>

      <div className="-mt-24 flex flex-col items-center">
        <span className="text-4xl font-bold text-slate-900">
          {score}
        </span>

        <span className="text-sm text-slate-500">
          /100
        </span>
      </div>

      <p className="mt-12 text-lg font-semibold text-slate-700">
        {label}
      </p>
    </div>
  );
}