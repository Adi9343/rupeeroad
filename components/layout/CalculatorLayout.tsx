import { ReactNode } from "react";

type CalculatorLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function CalculatorLayout({
  title,
  description,
  children,
}: CalculatorLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-100 py-12 px-6">
      <div className="mx-auto max-w-4xl">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-slate-900">
            {title}
          </h1>

          <p className="mt-3 text-lg text-slate-600">
            {description}
          </p>
        </header>

        <div className="rounded-3xl bg-white p-8 shadow-xl">
          {children}
        </div>
      </div>
    </main>
  );
}