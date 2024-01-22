import type { Category, Product, ProductResponse } from "~/types/types";
import { defaultCategories } from "~/constants/appConfig";

export const useProductStore = defineStore("productStore", () => {
  const products = useState<Product[]>("products", () => []);
  const categories = useState<Category[]>(
    "categories",
    () => defaultCategories,
  );
  const loading = useState<boolean>("loading", () => false);

  const fetchProducts = async (
    categorySlug = "",
    pagination = { limit: 100, skip: 0 },
  ) => {
    loading.value = true;
    try {
      const params = new URLSearchParams();
      params.append("limit", pagination.limit.toString());
      params.append("skip", pagination.skip.toString());

      let apiUrl = "https://dummyjson.com/products";
      if (categorySlug) {
        apiUrl += `/category/${categorySlug}`;
      }
      const response = await $fetch<ProductResponse>(apiUrl, {
        method: "GET",
        params,
      });

      if (categorySlug) {
        products.value = response.products;
      } else {
        // Append new products to the existing list when fetching all products
        products.value = [...products.value, ...response.products];
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      loading.value = false;
    }
  };
  const fetchProductDetails = async (id: string) => {
    loading.value = true;
    try {
      return await $fetch<Product[]>(`/api/products/${id}`);
    } catch (error) {
      console.error("Failed to fetch products details:", error);
      return null;
    } finally {
      loading.value = false;
    }
  };
  const searchProducts = async (query: string) => {
    if (!query) {
      return [];
    }
    loading.value = true;
    try {
      const response = await $fetch<ProductResponse>(
        "/api/searchProducts?q=" + query,
      );
      return response.products ?? [];
    } catch (error) {
      console.error("Failed to search products:", error);
      return [];
    } finally {
      loading.value = false;
    }
  };
  const fetchCategories = async () => {
    try {
      categories.value = await $fetch<Category[]>("/api/categories");
    } catch (error) {
      console.error(error);
      categories.value = defaultCategories;
    }
  };
  const fetchAllCategoriesWithProducts = async () => {
    try {
      const fetchedCategories = await $fetch<Category[]>("/api/categories");
      return await Promise.all(
        fetchedCategories.map(async (category) => {
          const response = await $fetch<ProductResponse>(
            `/api/products/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`,
          );
          return { name: category.name, products: response.products };
        }),
      );
    } catch (error) {
      console.error("Error fetching categories with products:", error);
      return [];
    }
  };
  return {
    loading,
    products,
    categories,
    fetchProducts,
    fetchCategories,
    searchProducts,
    fetchProductDetails,
    fetchAllCategoriesWithProducts,
  };
});
