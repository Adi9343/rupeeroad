import Heading from "@/components/ui/Heading";
import SearchBar from "@/components/ui/SearchBar";
import Section from "@/components/ui/Section";

export default function HeroSection() {
  return (
    <Section className="pt-20 pb-16">
      <div className="flex flex-col items-center text-center">
        <span className="mb-4 rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
          Smart Financial Decisions Start Here
        </span>

        <Heading
          title="Before buying anything, check RupeeRoad."
          subtitle="Discover whether you can truly afford your next purchase with personalized financial insights, affordability analysis, and practical recommendations."
        />

        <div className="mt-10 w-full">
          <SearchBar />
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Try searching for: Car • Bike • Phone • Laptop • House
        </p>
      </div>
    </Section>
  );
}