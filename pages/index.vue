<script setup lang="ts">
const productStore = useProductStore();
const { loading, products } = storeToRefs(productStore);
</script>
<template>
  <NuxtPage>
    <div
      v-if="loading"
      class="grid grid-cols-1 gap-4 p-6 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4"
    >
      <div v-for="n of 16" :key="n">Loading</div>
    </div>
    <div
      v-else
      class="grid grid-cols-1 gap-4 p-6 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4"
    >
      <div v-for="product in products" :key="product.id">
        <div class="text-black font-bold">{{ product.category }}</div>
      </div>
    </div>
  </NuxtPage>
</template>
