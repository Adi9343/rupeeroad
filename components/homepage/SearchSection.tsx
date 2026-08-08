"use client";

const trendingSearches = [
  "iPhone 17 Pro",
  "Honda City",
  "Goa Trip",
  "Wedding",
  "MacBook Pro",
  "Gold Necklace",
];

const categories = [
  {
    emoji: "🚗",
    title: "Vehicles",
    description: "Cars, Bikes & EVs",
  },
  {
    emoji: "🏠",
    title: "Property",
    description: "House & Real Estate",
  },
  {
    emoji: "📱",
    title: "Electronics",
    description: "Phones, Laptops & Gadgets",
  },
  {
    emoji: "🛋",
    title: "Furniture",
    description: "Home & Office",
  },
  {
    emoji: "✈️",
    title: "Travel",
    description: "Vacations & Tours",
  },
  {
    emoji: "🎓",
    title: "Education",
    description: "Courses & Degrees",
  },
  {
    emoji: "💍",
    title: "Wedding",
    description: "Marriage Planning",
  },
  {
    emoji: "💰",
    title: "Investments",
    description: "Gold, SIP & Stocks",
  },
];

export default function SearchSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Trending Searches */}

        <h3 className="text-xl font-bold text-slate-900">
          🔥 Trending Searches
        </h3>

        <div className="mt-6 flex flex-wrap gap-3">
          {trendingSearches.map((item) => (
            <button
              key={item}
              className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600 hover:shadow-md"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Browse Categories */}

        <div className="mt-16">
          <h3 className="text-xl font-bold text-slate-900">
            Browse Categories
          </h3>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <button
                key={category.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="text-4xl">{category.emoji}</div>

                <h4 className="mt-5 text-lg font-bold text-slate-900">
                  {category.title}
                </h4>

                <p className="mt-2 text-sm text-slate-500">
                  {category.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}