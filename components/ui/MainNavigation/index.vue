<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto flex items-center justify-between p-4">
      <div class="text-xl font-bold text-gray-800">nuxiShop!</div>

      <nav class="hidden lg:flex items-center">
        <ul class="flex space-x-4">
          <li v-for="link in navLinks" :key="link.id" class="relative">
            <NuxtLink
              v-if="link.title !== 'Categories'"
              :to="link.href"
              class="text-gray-800 hover:text-orange-500 px-3 py-2 flex items-center transition duration-300"
            >
              <Icon :name="link.icon" class="text-xl" />
              {{ link.title }}
            </NuxtLink>

            <div v-else>
              <button
                ref="categoriesButton"
                class="text-gray-800 hover:text-orange-500 px-3 py-2 flex items-center transition duration-300 focus:outline-none"
                @click="toggleCategoriesMenu"
              >
                {{ link.title }}
                <Icon name="mdi:menu-down" class="ml-2" />
              </button>
              <div
                v-show="isCategoriesOpen"
                class="absolute left-0 bg-white shadow-lg m-4 py-2 min-w-max border rounded-md"
              >
                <div class="grid grid-cols-3 gap-1 p-2 items-center">
                  <NuxtLink
                    v-for="category in categories"
                    :key="category.id"
                    :to="`/category/${category.slug}`"
                    class="flex px-4 py-2 text-gray-700 hover:bg-gray-100 gap-2"
                  >
                    <Icon :name="category.icon" class="text-xl" />
                    {{ category.name }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      <!-- Icons: Search, Favorite, and Cart -->

      <div class="flex items-center space-x-4">
        <UiSearchBar />
        <Icon name="lets-icons:favorite" />
        <button @click="toggleCart">
          <Icon name="uil:cart" />
        </button>
        <product-cart />
      </div>
    </div>
  </header>
</template>

<script setup>
import { defaultNavLinks } from "~/constants/appConfig";

const navLinks = defaultNavLinks;
const { categories } = useProductStore();
const isCategoriesOpen = useState("isCategoriesOpen", () => false);
const categoriesButton = useState("categoriesButton", () => null);

const toggleCategoriesMenu = () => {
  isCategoriesOpen.value = !isCategoriesOpen.value;
};
</script>
