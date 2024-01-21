<script setup lang="ts">
useHead({
  title: "PrimeStore",
});
const productStore = useProductStore();
productStore.fetchProducts();
</script>
<template>
  <NuxtLayout>
    <ui-main-navigation />
    <NuxtPage />
  </NuxtLayout>
</template>
