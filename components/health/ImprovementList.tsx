type ImprovementListProps = {
  improvements: string[];
};

export default function ImprovementList({
  improvements,
}: ImprovementListProps) {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-amber-700">
        Areas for Improvement
      </h2>

      {improvements.length === 0 ? (
        <p className="mt-4 text-slate-600">
          No improvements needed. Great job!
        </p>
      ) : (
        <ul className="mt-4 space-y-3">
          {improvements.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3"
            >
              <span className="text-lg text-amber-600">
                ⚠
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