export default defineEventHandler(async (event) => {
  const categoryName = event.context.params.categoryName;
  try {
    return await $fetch(
      `https://dummyjson.com/products/category/${categoryName}`,
      { method: "GET" },
    );
  } catch (error) {
    console.error(
      `Failed to fetch products for category ${categoryName}:`,
      error,
    );
    throw error;
  }
});
