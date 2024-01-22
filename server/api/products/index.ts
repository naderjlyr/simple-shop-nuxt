import { Product } from "~/types/types";

export default defineEventHandler(async (event) => {
  try {
    const apiUrl = new URL("https://dummyjson.com/products");
    apiUrl.search = new URLSearchParams(event.context.query).toString();
    return await $fetch<Product[]>(apiUrl.href, { method: "GET" });
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
});
