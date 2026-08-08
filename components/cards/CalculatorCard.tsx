import Link from "next/link";

type CalculatorCardProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
  buttonText?: string;
};

export default function CalculatorCard({
  icon,
  title,
  description,
  href,
  buttonText = "Open Calculator",
}: CalculatorCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="text-4xl">{icon}</div>

      <h3 className="mt-4 text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-slate-600 leading-7">
        {description}
      </p>

      <Link
        href={href}
        className="mt-6 inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        {buttonText}
      </Link>
    </div>
  );
}