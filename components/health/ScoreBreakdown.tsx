type Item = {
  label: string;
  score: number;
};

type ScoreBreakdownProps = {
  items: Item[];
};

export default function ScoreBreakdown({
  items,
}: ScoreBreakdownProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">
        Score Breakdown
      </h2>

      <div className="mt-6 space-y-5">
        {items.map((item) => {
          const percentage = (item.score / 20) * 100;

          return (
            <div key={item.label}>
              <div className="mb-2 flex items-center justify-between">
                <span className="font-medium text-slate-700">
                  {item.label}
                </span>

                <span className="font-semibold text-slate-900">
                  {item.score}/20
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-emerald-500 transition-all duration-700"
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}