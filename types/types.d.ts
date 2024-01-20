export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
}

export interface ProductsResponse {
  items: Product[];
  total: number;
}

export interface Pagination {
  offset: number;
  limit: number;
}

export interface Filters {
  search?: string;
  price_min?: number;
  price_max?: number;
  categoryId?: number;
}
