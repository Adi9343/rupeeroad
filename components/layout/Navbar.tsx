import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
              ₹
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-900">
                RupeeRoad
              </h1>
              <p className="text-xs text-slate-500">
                Financial Decision Platform
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#" className="transition hover:text-blue-600">
              Home
            </a>

            <a href="#" className="transition hover:text-blue-600">
              Calculators
            </a>

            <a href="#" className="transition hover:text-blue-600">
              Financial Health
            </a>

            <a href="#" className="transition hover:text-blue-600">
              AI Advisor
            </a>
          </nav>

          <Button>
            Get Started
          </Button>
        </div>
      </Container>
    </header>
  );
}