const testimonials = [
  {
    name: "Coming Soon",
    role: "Early User",
    message:
      "RupeeRoad helped me understand whether I could really afford my next purchase instead of just calculating the EMI.",
  },
  {
    name: "Coming Soon",
    role: "Beta Tester",
    message:
      "I finally understood the impact of my purchases on my savings and long-term goals.",
  },
  {
    name: "Coming Soon",
    role: "Financial Planner",
    message:
      "This is much more useful than a traditional financial calculator because it focuses on decision-making.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            What RupeeRoad Will Help You Do
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Our goal is to help people make better financial decisions.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
            >
              <p className="leading-7 text-slate-600">
                "{item.message}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold text-slate-900">
                  {item.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}