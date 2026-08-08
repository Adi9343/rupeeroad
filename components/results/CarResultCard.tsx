"use client";

import { CarAffordabilityResult } from "@/lib/calculations/car";

interface CarResultCardProps {
  productName: string;
  variantName: string;
  finalPrice: number;
  result: CarAffordabilityResult;
}

export default function CarResultCard({
  productName,
  variantName,
  finalPrice,
  result,
}: CarResultCardProps) {
  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  const budgetDifference =
    result.recommendedCarBudget - finalPrice;

  const getPurchaseStatus = () => {
    if (budgetDifference >= 0) {
      return {
        label: "Within Recommended Budget",
        message: `This car is ${formatCurrency(
          budgetDifference
        )} below your recommended car budget.`,
        className:
          "border-green-200 bg-green-50 text-green-800",
        icon: "✓",
      };
    }

    const excess = Math.abs(budgetDifference);

    if (
      excess <=
      result.recommendedCarBudget * 0.1
    ) {
      return {
        label: "Slightly Above Recommended Budget",
        message: `This car is ${formatCurrency(
          excess
        )} above your recommended car budget. Consider increasing your down payment.`,
        className:
          "border-yellow-200 bg-yellow-50 text-yellow-800",
        icon: "!",
      };
    }

    return {
      label: "Above Recommended Budget",
      message: `This car is ${formatCurrency(
        excess
      )} above your recommended car budget and may put pressure on your finances.`,
      className:
        "border-red-200 bg-red-50 text-red-800",
      icon: "!",
    };
  };

  const getRatingColor = () => {
    switch (result.affordabilityRating) {
      case "Excellent":
        return "bg-green-100 text-green-700";

      case "Good":
        return "bg-blue-100 text-blue-700";

      case "Fair":
        return "bg-yellow-100 text-yellow-700";

      default:
        return "bg-red-100 text-red-700";
    }
  };

  const purchaseStatus = getPurchaseStatus();

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg md:p-8">

      {/* Heading */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-800">
          Your Car Affordability Report
        </h2>
      </div>

      {/* Product Summary */}
      <div className="mb-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
        <div className="grid gap-5 md:grid-cols-3">

          <div>
            <p className="text-sm text-slate-500">
              Selected Car
            </p>

            <h3 className="mt-1 text-xl font-semibold text-slate-800">
              {productName}
            </h3>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Variant
            </p>

            <h3 className="mt-1 text-xl font-semibold text-slate-800">
              {variantName || "-"}
            </h3>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Final Price
            </p>

            <h3 className="mt-1 text-xl font-semibold text-slate-800">
              {formatCurrency(finalPrice)}
            </h3>
          </div>

        </div>
      </div>

      {/* Purchase Decision */}
      <div
        className={`mb-8 rounded-2xl border p-5 ${purchaseStatus.className}`}
      >
        <div className="flex items-start gap-4">

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-lg font-bold">
            {purchaseStatus.icon}
          </div>

          <div>
            <h3 className="text-lg font-bold">
              {purchaseStatus.label}
            </h3>

            <p className="mt-1 leading-6">
              {purchaseStatus.message}
            </p>
          </div>

        </div>
      </div>

      {/* Loan & EMI Details */}
      <div className="mb-8 grid gap-6 md:grid-cols-2">

        <ResultItem
          title="Actual Loan Required"
          value={formatCurrency(
            result.actualLoanRequired
          )}
        />

        <ResultItem
          title="Estimated Car EMI"
          value={formatCurrency(
            result.estimatedEmi
          )}
        />

        <ResultItem
          title="Total EMI After Purchase"
          value={formatCurrency(
            result.totalEmiAfterPurchase
          )}
        />

        <ResultItem
          title="Safe Monthly EMI"
          value={formatCurrency(
            result.safeEmi
          )}
        />

      </div>

      {/* EMI Safety Status */}
      <div
        className={`mb-8 rounded-2xl border p-5 ${
          result.purchaseWithinSafeEmi
            ? "border-green-200 bg-green-50"
            : "border-red-200 bg-red-50"
        }`}
      >
        <div className="flex items-start gap-4">

          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-lg font-bold ${
              result.purchaseWithinSafeEmi
                ? "text-green-700"
                : "text-red-700"
            }`}
          >
            {result.purchaseWithinSafeEmi
              ? "✓"
              : "!"}
          </div>

          <div>
            <h3
              className={`text-lg font-bold ${
                result.purchaseWithinSafeEmi
                  ? "text-green-800"
                  : "text-red-800"
              }`}
            >
              {result.purchaseWithinSafeEmi
                ? "EMI Within Safe Limit"
                : "EMI Exceeds Safe Limit"}
            </h3>

            <p
              className={`mt-1 leading-6 ${
                result.purchaseWithinSafeEmi
                  ? "text-green-800"
                  : "text-red-800"
              }`}
            >
              {result.purchaseWithinSafeEmi
                ? "The estimated car EMI is within your calculated safe EMI capacity."
                : "The estimated car EMI exceeds your calculated safe EMI capacity."}
            </p>
          </div>

        </div>
      </div>

      {/* Main Financial Results */}
      <div className="grid gap-6 md:grid-cols-2">

        <ResultItem
          title="Maximum Loan Amount"
          value={formatCurrency(
            result.maximumLoan
          )}
        />

        <ResultItem
          title="Recommended Car Budget"
          value={formatCurrency(
            result.recommendedCarBudget
          )}
        />

        <ResultItem
          title="Financial Health Score"
          value={`${result.affordabilityScore}/100`}
        />

        <ResultItem
          title="Existing EMI"
          value={formatCurrency(
            result.totalEmiAfterPurchase -
              result.estimatedEmi
          )}
        />

      </div>

      {/* Rating */}
      <div className="mt-8 text-center">
        <span
          className={`inline-block rounded-full px-5 py-2 text-sm font-semibold ${getRatingColor()}`}
        >
          {result.affordabilityRating}
        </span>
      </div>

      {/* Recommendation */}
      <div className="mt-8 rounded-2xl bg-slate-50 p-5">
        <h3 className="mb-2 text-lg font-semibold text-slate-800">
          Recommendation
        </h3>

        <p className="leading-7 text-slate-600">
          {result.recommendation}
        </p>
      </div>

    </div>
  );
}

interface ResultItemProps {
  title: string;
  value: string;
}

function ResultItem({
  title,
  value,
}: ResultItemProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-bold text-slate-800">
        {value}
      </h3>

    </div>
  );
}