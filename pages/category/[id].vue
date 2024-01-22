<template>
  <div>
    <h1>{{ category.name }}</h1>
    <Icon :name="category.icon" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const productStore = useProductStore();
const category = ref();

onMounted(async () => {
  await productStore.fetchCategories();
  const categoryId = Number(route.params.id);
  category.value = productStore.categories.find((c) => c.id === categoryId);
});
</script>
