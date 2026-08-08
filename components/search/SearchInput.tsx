"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

import { searchProducts } from "@/lib/search/search";

export default function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get("q") ?? "";

  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return searchProducts(query);
  }, [query]);

  function handleProductClick(productId: string) {
    router.push(`/product/${productId}`);
  }

  return (
    <div className="relative w-full">
      {/* Search Box */}
      <div className="flex items-center rounded-2xl border border-slate-300 bg-white px-4 py-3 shadow-sm">
        <Search className="mr-3 h-5 w-5 text-slate-400" />

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a car, phone, bike, laptop..."
          className="w-full bg-transparent outline-none"
        />
      </div>

      {/* Results */}
      <div className="mt-4 rounded-2xl border border-slate-200 bg-white shadow-lg">
        {query.trim() === "" ? (
          <div className="px-4 py-6 text-center text-slate-500">
            Start typing to search products.
          </div>
        ) : results.length > 0 ? (
          results.map((product) => (
            <button
              key={product.id}
              type="button"
              onClick={() => handleProductClick(product.id)}
              className="flex w-full items-center justify-between border-b border-slate-100 px-5 py-4 text-left transition hover:bg-slate-50 last:border-b-0"
            >
              <div>
                <p className="font-semibold">{product.name}</p>

                <p className="text-sm text-slate-500">
                  {product.brand} • {product.category}
                </p>
              </div>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                View
              </span>
            </button>
          ))
        ) : (
          <div className="px-4 py-6 text-center text-slate-500">
            No matching products found.
          </div>
        )}
      </div>
    </div>
  );
}