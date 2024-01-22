import { Product } from "~/types/types";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const query = event.node.req.url?.split("?")[1];

  try {
    const apiUrl = `${config.public.apiUrl}/products/search?${query}`;
    return await $fetch<Product[]>(apiUrl, { method: "GET" });
  } catch (error) {
    console.error("Failed to search products:", error);
    throw error;
  }
});
