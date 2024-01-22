<template>
  <div class="max-w-screen-xl mx-auto p-4">
    <!-- Category Filter Dropdown -->
    <prime-dropdown
      v-model="selectedCategorySlug"
      :options="formattedCategories"
      option-label="name"
      option-value="slug"
      placeholder="Select a Category"
      class="w-full md:w-14rem"
    />

    <!-- Products Grid with Infinite Scroll -->
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
const store = useProductStore();
const products = computed(() => store.products);
const categories = computed(() => store.categories);
const selectedCategorySlug = useState("selectedCategorySlug", () => "");
const pageSize = 100;
const currentPage = useState("currentPage", () => 0);
const enough = useState("enough", () => false);

const formattedCategories = computed(() => {
  return categories.value.map((category) => ({
    name: category.name,
    slug: category.slug,
  }));
});

watch(selectedCategorySlug, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    currentPage.value = 1;
    enough.value = false;
    useAsyncData("products", () =>
      store.fetchProducts(selectedCategorySlug.value, {
        limit: pageSize,
        skip: 0,
      }),
    );
  }
});
</script>
