type ResultCardProps = {
  safeEmi: number;
  maxLoan: number;
  maxCarPrice: number;
  rating: string;
};

export default function ResultCard({
  safeEmi,
  maxLoan,
  maxCarPrice,
  rating,
}: ResultCardProps) {
  return (
    <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        🚗 Car Affordability Result
      </h2>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">Safe EMI</p>
          <p className="text-xl font-semibold">
            ₹{safeEmi.toLocaleString()}/month
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Maximum Loan</p>
          <p className="text-xl font-semibold">
            ₹{Math.round(maxLoan).toLocaleString()}
          </p>
        </div>
        <div>
  <p className="text-sm text-gray-500">Maximum Affordable Car Price</p>
  <p className="text-xl font-semibold text-green-600">
    ₹{Math.round(maxCarPrice).toLocaleString()}
  </p>
  <div>
  <p className="text-sm text-gray-500">Affordability Rating</p>

  <span
    className={`inline-block rounded-full px-4 py-2 font-semibold text-white ${
      rating === "Excellent"
        ? "bg-green-600"
        : rating === "Good"
        ? "bg-blue-600"
        : rating === "Fair"
        ? "bg-yellow-500"
        : "bg-red-600"
    }`}
  >
    {rating}
  </span>
</div>
</div>
      </div>
    </div>
  );
}