import { Product } from "~/types/types";

export default defineEventHandler(async (event) => {
  const productId = event.context.params.id;
  try {
    return await $fetch<Product>(
      `https://dummyjson.com/products/${productId}`,
      {
        method: "GET",
      },
    );
  } catch (error) {
    console.error(`Failed to fetch product with ID ${productId}:`, error);
    throw error;
  }
});
