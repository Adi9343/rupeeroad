export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductVariant {
  id: string;
  name: string;

  exShowroomPrice: number;

  image?: string;

  specifications?: ProductSpecification[];
}

export interface SearchProduct {
  id: string;
  name: string;
  brand: string;
  category: string;

  thumbnail?: string;

  estimatedPrice: number;

  variants?: ProductVariant[];
}