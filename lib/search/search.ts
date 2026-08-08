import { products } from "./data";
import { SearchProduct } from "./types";

export function searchProducts(query: string): SearchProduct[] {
  const q = query.toLowerCase().trim();

  if (!q) return [];

  return products.filter((product) => {
    return (
      product.name.toLowerCase().includes(q) ||
      product.brand?.toLowerCase().includes(q) ||
      product.category.toLowerCase().includes(q)
    );
  });
}

export function getProductById(id: string): SearchProduct | undefined {
  return products.find((product) => product.id === id);
}