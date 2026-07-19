"use client";
import Button from "@/components/ui/Button";
import InfoCard from "@/components/cards/InfoCard";
import SearchChip from "@/components/ui/SearchChip";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function SearchSection() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleGetStarted() {
 router.push("/questionnaire/car");
}
  return (
    <section className="max-w-5xl mx-auto px-8 py-16">
      <div className="bg-white rounded-2xl shadow-lg p-10">
        <InfoCard title="Monthly Income" value="₹75,000" />

        <input
          type="text"
          value={search}
onChange={(e) => setSearch(e.target.value)}
          placeholder="Search anything... Car, Bike, Phone, House, Wedding, Education loan, Trip, Laptop..."
          className="w-full mt-8 p-5 border border-gray-300 rounded-2xl text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <div className="flex flex-wrap justify-center gap-3 mt-6">
       <SearchChip
  icon="🚗"
  text="Car"
  onClick={() => setSearch("Car")}
/>
<SearchChip
  icon="🏍️"
  text="Bike"
  onClick={() => setSearch("Bike")}
/>

<SearchChip
  icon="📱"
  text="Phone"
  onClick={() => setSearch("Phone")}
/>

<SearchChip
  icon="💻"
  text="Laptop"
  onClick={() => setSearch("Laptop")}
/>

<SearchChip
  icon="🏠"
  text="House"
  onClick={() => setSearch("House")}
/>        </div>

        <p className="mt-4 text-gray-600">
          This is the beginning of your AI-powered financial platform.
        </p>

        <div className="mt-8">
          <Button
  text="Get Started"
  onClick={handleGetStarted}
/>
        </div>
      </div>
    </section>
  );
}