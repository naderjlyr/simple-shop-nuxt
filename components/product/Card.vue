<template>
  <div
    class="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
  >
    <NuxtImg
      :src="product?.images[0]"
      alt="Product Image"
      class="w-full h-52 object-contain"
    />
    <div class="p-4">
      <h3 class="text-lg font-semibold truncate">{{ product?.title }}</h3>
      <p class="text-gray-600 text-sm line-clamp-3">
        {{ product?.description }}
      </p>
      <div class="flex justify-between items-center mt-4">
        <span class="text-green-600 font-semibold">${{ product?.price }}</span>
        <NuxtLink
          :to="`/product/${product.id}`"
          class="text-blue-600 hover:underline text-sm"
          >View Details</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/types/types";
interface ProductProps {
  product: Product;
}
defineProps<ProductProps>();
</script>
