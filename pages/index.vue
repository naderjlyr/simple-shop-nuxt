<template>
  <div class="home"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import { useProductStore } from "~/store/productStore";

const featuredProducts = ref([]);
const productStore = useProductStore();

onMounted(async () => {
  await productStore.fetchProducts();
  featuredProducts.value = productStore.products;
});
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
