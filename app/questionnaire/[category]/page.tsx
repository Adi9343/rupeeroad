import Container from "@/components/ui/Container";
import QuestionnaireClient from "@/components/questionnaire/QuestionnaireClient";

import { getCategory } from "@/lib/questionnaire/categories";
import { generateQuestionnaire } from "@/lib/questionnaire/generator";

type Props = {
  params: Promise<{
    category: string;
  }>;

  searchParams: Promise<{
    product?: string;
    variant?: string;
    price?: string;
  }>;
};

export default async function QuestionnairePage({
  params,
  searchParams,
}: Props) {
  const { category } = await params;
  const query = await searchParams;

  const config = getCategory(category);
  const questionnaire = generateQuestionnaire(config);

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <Container>
        <div className="mx-auto mb-8 max-w-3xl rounded-2xl bg-white p-6 shadow">
          <h1 className="text-3xl font-bold text-slate-900">
            {query.product ?? "Selected Product"}
          </h1>

          {query.variant && (
            <p className="mt-2 text-slate-600">
              Variant: {query.variant}
            </p>
          )}

          {query.price && (
            <p className="mt-2 text-lg font-semibold text-blue-600">
              Price: ₹
              {Number(query.price).toLocaleString("en-IN")}
            </p>
          )}
        </div>

        <QuestionnaireClient
          questionnaire={questionnaire}
          productName={query.product ?? ""}
          variantName={query.variant ?? ""}
          finalPrice={Number(query.price ?? 0)}
        />
      </Container>
    </main>
  );
}