export default function AiPreviewSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
          🤖 Coming Soon
        </div>

        <h2 className="mt-8 text-4xl font-bold md:text-5xl">
          Meet Your AI Financial Advisor
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
          Soon, RupeeRoad AI will help you understand your finances, compare
          purchases, create financial roadmaps, and explain every recommendation
          in simple language.
        </p>

        <div className="mt-12 rounded-3xl bg-white p-8 text-left text-slate-800 shadow-2xl">
          <p className="text-sm font-semibold text-blue-600">
            Example Conversation
          </p>

          <div className="mt-6 space-y-5">
            <div className="rounded-xl bg-slate-100 p-4">
              <strong>You:</strong> Can I afford a ₹90,000 laptop?
            </div>

            <div className="rounded-xl bg-blue-50 p-4">
              <strong>RupeeRoad AI:</strong> Yes. Based on your income,
              existing EMIs, and savings, buying this laptop is financially
              safe. Waiting two months could increase your emergency fund and
              improve your overall financial health even further.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}