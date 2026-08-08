"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import { getProductById } from "@/lib/search/search";
import { ProductVariant } from "@/lib/search/types";

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;
  const product = getProductById(id);

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        Product not found.
      </main>
    );
  }

  const defaultVariant = product.variants?.[0];

  const [selectedVariant, setSelectedVariant] =
    useState<ProductVariant | undefined>(defaultVariant);

  const [price, setPrice] = useState(
    defaultVariant?.exShowroomPrice.toString() ??
      product.estimatedPrice.toString()
  );

  function handleVariantChange(variant: ProductVariant) {
    setSelectedVariant(variant);
    setPrice(variant.exShowroomPrice.toString());
  }

  function handleContinue() {
    router.push(
      `/questionnaire/${product.category}?product=${product.id}&variant=${encodeURIComponent(
        selectedVariant?.name ?? ""
      )}&price=${price}`
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Card className="p-8">
            <div className="space-y-8">
              {/* Product Details */}
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-blue-600">
                  {product.category}
                </p>

                <h1 className="mt-2 text-4xl font-bold">
                  {product.name}
                </h1>

                <p className="mt-2 text-slate-600">
                  Brand: {product.brand}
                </p>
              </div>

              {/* Variant Selection */}
              {product.variants && product.variants.length > 0 && (
                <div>
                  <h2 className="mb-4 text-xl font-semibold">
                    Select Variant
                  </h2>

                  <div className="grid gap-3">
                    {product.variants.map((variant) => (
                      <label
                        key={variant.id}
                        className={`cursor-pointer rounded-xl border p-4 transition ${
                          selectedVariant?.id === variant.id
                            ? "border-blue-600 bg-blue-50"
                            : "border-slate-200"
                        }`}
                      >
                        <input
                          type="radio"
                          name="variant"
                          checked={selectedVariant?.id === variant.id}
                          onChange={() => handleVariantChange(variant)}
                          className="mr-3"
                        />

                        <div className="flex items-center justify-between">
                          <span>{variant.name}</span>

                          <span className="font-semibold text-blue-700">
                            ₹{variant.exShowroomPrice.toLocaleString("en-IN")}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Estimated Ex-showroom Price */}
              <div>
                <h2 className="mb-2 text-xl font-semibold">
                  Estimated Ex-showroom Price
                </h2>

                <div className="rounded-xl border border-slate-200 bg-slate-100 p-4 text-2xl font-bold text-slate-800">
                  ₹
                  {(
                    selectedVariant?.exShowroomPrice ??
                    product.estimatedPrice
                  ).toLocaleString("en-IN")}
                </div>
              </div>

              {/* Note */}
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                <h3 className="mb-2 font-semibold text-amber-900">
                  📝 Note
                </h3>

                <p className="text-sm leading-6 text-amber-800">
                  The price shown above is an estimated ex-showroom price.
                  <br />
                  <br />
                  For the most accurate affordability analysis, please update
                  the amount below to your dealer's final on-road quotation
                  (if available).
                </p>
              </div>

              {/* Final Price */}
              <div>
                <h2 className="mb-4 text-xl font-semibold">
                  Final Price (Editable)
                </h2>

                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-4 text-lg"
                />
              </div>

              <Button
                className="w-full"
                onClick={handleContinue}
              >
                Continue
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </main>
  );
}