type StrengthListProps = {
  strengths: string[];
};

export default function StrengthList({
  strengths,
}: StrengthListProps) {
  return (
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-emerald-700">
        Strengths
      </h2>

      {strengths.length === 0 ? (
        <p className="mt-4 text-slate-600">
          No strengths identified yet.
        </p>
      ) : (
        <ul className="mt-4 space-y-3">
          {strengths.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3"
            >
              <span className="text-lg text-emerald-600">
                ✓
              </span>

              <span className="text-slate-700">
                {item}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}