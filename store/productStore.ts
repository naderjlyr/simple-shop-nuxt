import type {
  Category,
  Filters,
  Pagination,
  Product,
  ProductResponse,
} from "~/types/types";
import { defaultCategories } from "~/constants/appConfig";

export const useProductStore = defineStore("productStore", () => {
  const products = useState<Product[]>("products", () => []);
  const categories = useState<Category[]>(
    "categories",
    () => defaultCategories,
  );
  const loading = useState<boolean>("loading", () => false);

  const fetchProducts = async () => {
    loading.value = true;
    try {
      const response = await $fetch<ProductResponse>("/api/products");
      if (response && response.products) {
        products.value = response.products;
      } else {
        console.error("Products data structure is unexpected:", response);
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
      return await $fetch<Product>(`/api/products/${id}`);
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
  const fetchFilteredProducts = async (
    filters: Filters,
    pagination: Pagination,
  ) => {
    loading.value = true;
    try {
      const paramsObject = { ...filters, ...pagination };
      const params = new URLSearchParams(
        Object.fromEntries(
          Object.entries(paramsObject).map(([key, value]) => [
            key,
            value.toString(),
          ]),
        ),
      ).toString();

      const response = await $fetch<ProductResponse>(`/api/products?${params}`);
      return response.products ?? [];
    } catch (error) {
      console.error("Failed to fetch filtered products:", error);
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
    fetchFilteredProducts,
    fetchProductDetails,
    fetchAllCategoriesWithProducts,
  };
});
