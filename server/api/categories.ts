import { defaultCategories } from "~/constants/appConfig";

export default defineEventHandler(async () => {
  try {
    const categoriesResponse = await $fetch<string[]>(
      "https://dummyjson.com/products/categories",
      { method: "GET" },
    );

    return categoriesResponse.map((name, index) => ({
      id: index + 1,
      name,
    }));
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return defaultCategories;
  }
});
