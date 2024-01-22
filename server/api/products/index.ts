import { Product } from "~/types/types";

export default defineEventHandler(async () => {
  try {
    return await $fetch<Product[]>("https://dummyjson.com/products", {
      method: "GET",
    });
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
});
