<script setup lang="ts">
useHead({
  title: "PrimeStore",
});
const productStore = useProductStore();
productStore.fetchProducts();
</script>
<template>
  <ui-main-navigation />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
