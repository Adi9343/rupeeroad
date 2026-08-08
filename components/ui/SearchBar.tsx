"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  placeholder?: string;
}

export default function SearchBar({
  placeholder = "What are you planning to buy today?",
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const router = useRouter();

  function handleSearch() {
    if (!query.trim()) return;

    router.push(
      `/search?q=${encodeURIComponent(query.trim())}`
    );
  }

  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="flex items-center rounded-2xl border border-slate-300 bg-white shadow-sm transition-all duration-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-1 rounded-l-2xl px-6 py-4 text-lg outline-none"
        />

        <button
          type="button"
          onClick={handleSearch}
          className="rounded-r-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    </div>
  );
}