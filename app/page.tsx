import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/homepage/HeroSection";
import SearchSection from "@/components/homepage/SearchSection";
import CategoriesSection from "@/components/homepage/CategoriesSection";
import WhyRupeeRoadSection from "@/components/homepage/WhyRupeeRoadSection";
import HowItWorksSection from "@/components/homepage/HowItWorksSection";
import FinancialToolsSection from "@/components/homepage/FinancialToolsSection";
import AiPreviewSection from "@/components/homepage/AiPreviewSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar />

      <HeroSection />

      <SearchSection />

      <CategoriesSection />

      <WhyRupeeRoadSection />

      <HowItWorksSection />

      <FinancialToolsSection />

      <AiPreviewSection />

      <TestimonialsSection />

      <Footer />
    </main>
  );
}