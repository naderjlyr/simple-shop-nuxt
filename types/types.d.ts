export interface Category {
  id: number;
  name: string;
  icon: string;
}
export interface NavLink {
  id: number;
  title: string;
  href: string;
  icon?: string;
}

export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  rating?: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface Pagination {
  limit: number;
  skip: number;
}

export interface Filters {
  q?: string;
  category?: string;
  price_min?: number;
  price_max?: number;
  sort?: string;
}
