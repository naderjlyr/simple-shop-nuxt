import { defineStore } from "pinia";
import { productService } from "@/services/productService";
import type {
  Product,
  ProductsResponse,
  Pagination,
  Filters,
} from "~/types/types";

interface ProductState {
  products: Product[];
  total: number;
  loading: boolean;
  error: string | null;
  pagination: Pagination;
  filters: Filters;
}

export const useProductStore = defineStore("product", {
  state: (): ProductState => ({
    products: [],
    total: 0,
    loading: false,
    error: null,
    pagination: {
      offset: 0,
      limit: 10,
    },
    filters: {},
  }),
  actions: {
    async fetchProducts() {
      this.loading = true;
      try {
        const response: ProductsResponse = await productService.fetchProducts(
          this.pagination,
          this.filters,
        );
        this.products = response.items;
        this.total = response.total;
      } catch (error) {
        this.error = "Failed to fetch products";
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
