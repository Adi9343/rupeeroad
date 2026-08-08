export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              RupeeRoad
            </h2>

            <p className="mt-4 text-sm text-slate-600">
              Helping you make smarter financial decisions before every
              purchase.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Financial Tools
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Purchase Decision</li>
              <li>Budget Planner</li>
              <li>Financial Health</li>
              <li>Net Worth</li>
              <li>SIP Planner</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Company
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>About</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Our Mission
            </h3>

            <p className="mt-4 text-sm text-slate-600">
              Before buying anything, check RupeeRoad.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} RupeeRoad. All rights reserved.
        </div>
      </div>
    </footer>
  );
}