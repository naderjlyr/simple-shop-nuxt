import { Product } from "~/types/types";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  try {
    const apiUrl = `${config.public.apiUrl}/products`;
    return await $fetch<Product[]>(apiUrl, { method: "GET" });
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
});
