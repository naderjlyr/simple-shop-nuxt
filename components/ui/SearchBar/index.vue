<template>
  <div class="relative max-w-md mx-auto">
    <div
      class="flex items-center w-full h-12 rounded-lg bg-white overflow-hidden border-2 border-gray-300 focus-within:shadow-lg"
    >
      <div class="grid place-items-center h-full w-12 text-gray-300">
        <Icon name="mynaui:search" size="24" />
      </div>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search something.."
        class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        @input="debounceSearch"
      />
    </div>

    <!-- Search Results Dropdown -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="showResults"
        class="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-50 max-h-60 overflow-auto"
      >
        <div v-if="searchResults.length > 0" class="py-1">
          <div
            v-for="result in searchResults"
            :key="result.id"
            class="flex flex-row items-center gap-3 p-2 hover:bg-gray-100"
          >
            <div
              class="search-result-product-image w-12 h-12 bg-gray-100 rounded-full overflow-hidden"
            >
              <NuxtImg
                v-if="result.images && result.images.length"
                class="w-full h-full object-cover"
                :src="result.images[0]"
                alt="Product Image"
              />
            </div>
            <div class="flex-grow text-sm text-gray-700">
              {{ result.title }}
            </div>
          </div>
        </div>
        <div v-else class="px-4 py-3 text-sm text-gray-700">
          No results found.
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
const searchProducts = useProductStore().searchProducts;
const searchQuery = ref("");
const showResults = ref(false);
const searchResults = ref([]);

const performSearch = async (query) => {
  if (query) {
    searchResults.value = await searchProducts(query);
    showResults.value = searchResults.value.length > 0;
  } else {
    searchResults.value = [];
    showResults.value = false;
  }
};

const debounceSearch = debounce(() => performSearch(searchQuery.value), 300);

watch(searchQuery, (newQuery) => {
  if (!newQuery) {
    showResults.value = false;
  }
});
</script>

<style scoped>
/* Optional: Add additional custom styling here */
</style>
