<script setup>
const route = useRoute();
const store = useProductStore();

const productId = computed(() => {
  return Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
});

const {
  data: productDetails,
  pending,
  error,
} = await useAsyncData(() => {
  return store.fetchProductDetails(productId.value);
});

if (!productDetails.value && !pending.value) {
  console.error("Product not found or an error occurred", error.value);
}
</script>

<template>
  <div v-if="productDetails" class="container mx-auto p-4">
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <!-- Product Image Carousel -->
      <div class="relative">
        <img
          :src="productDetails.thumbnail"
          alt="Product Image"
          class="w-full h-64 object-cover rounded-t-lg"
        />
      </div>

      <!-- Product Information -->
      <div class="p-4">
        <h2 class="text-2xl font-bold mb-2">
          {{ productDetails.title }}
        </h2>
        <p class="text-gray-700 mb-4">{{ productDetails.description }}</p>

        <div class="flex justify-between items-center mb-4">
          <div>
            <span class="text-lg font-semibold">Price:</span>
            <span class="text-lg text-green-600"
              >${{ productDetails.price }}</span
            >
          </div>
          <div class="text-gray-600">
            <span>Rating: {{ productDetails.rating || "N/A" }}</span>
          </div>
        </div>

        <!-- Add to Cart Button -->
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>

  <div v-else class="container mx-auto p-4">
    <p>Product not found.</p>
  </div>
</template>
