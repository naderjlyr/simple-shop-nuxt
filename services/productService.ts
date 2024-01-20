import { mande } from "mande";
import type {
  Filters,
  Pagination,
  Product,
  ProductsResponse,
} from "~/types/types";

const api = mande("https://api.escuelajs.co/api/v1/products");

export const productService = {
  async fetchProducts(
    pagination: Pagination,
    filters: Filters,
  ): Promise<ProductsResponse> {
    try {
      const params = new URLSearchParams({
        offset: pagination.offset.toString(),
        limit: pagination.limit.toString(),
        ...(filters.search && { title: filters.search }),
        ...(filters.price_min !== undefined && {
          price_min: filters.price_min.toString(),
        }),
        ...(filters.price_max !== undefined && {
          price_max: filters.price_max.toString(),
        }),
        ...(filters.categoryId !== undefined && {
          categoryId: filters.categoryId.toString(),
        }),
      });

      const response = await api.get(`?${params.toString()}`);
      const items = (await response) as Product[];
      const total = items.length;

      return {
        items,
        total,
      };
    } catch (error) {
      console.error("Failed to fetch products:", error);
      throw error;
    }
  },
};
