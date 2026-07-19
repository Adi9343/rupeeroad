import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/homepage/HeroSection";
import SearchSection from "@/components/homepage/SearchSection";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar />
      <HeroSection />
     <SearchSection />
     
    </main>
  );
}