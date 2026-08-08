import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import SearchInput from "@/components/search/SearchInput";

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Heading
            title="Search Products"
            subtitle="Find the product you want to buy and let RupeeRoad analyze whether you can comfortably afford it."
            center
          />

          <div className="mt-10">
            <SearchInput />
          </div>
        </div>
      </Container>
    </main>
  );
}