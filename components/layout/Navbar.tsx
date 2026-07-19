export default function Navbar() {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        <h1 className="text-2xl font-bold text-blue-700">
          RupeeRoad 🚀
        </h1>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-semibold transition">
  Toggle Theme
</button>
      </div>
    </header>
  );
}