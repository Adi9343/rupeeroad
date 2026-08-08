type SummaryCardProps = {
  summary: string;
};

export default function SummaryCard({
  summary,
}: SummaryCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">
        Financial Summary
      </h2>

      <p className="mt-4 leading-7 text-slate-700">
        {summary}
      </p>
    </div>
  );
}