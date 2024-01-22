<script setup>
const productStore = useProductStore();

const {
  data: categoriesWithProducts,
  pending,
  error,
} = useAsyncData(
  "categoriesWithProducts",
  productStore.fetchAllCategoriesWithProducts,
);
</script>

<template>
  <div v-if="pending" class="text-center">Loading...</div>
  <div v-else-if="error" class="text-center">Error loading products.</div>
  <div v-else class="space-y-8">
    <div
      v-for="category in categoriesWithProducts"
      :key="category.name"
      class="mb-8 bg-white"
    >
      <h2 class="text-2xl font-semibold mb-4 text-gray-700">
        {{ category.name }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ProductCard
          v-for="product in category.products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>
