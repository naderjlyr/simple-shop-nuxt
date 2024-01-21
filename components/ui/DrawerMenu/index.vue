<template>
  <!-- Hamburger Icon for Mobile -->
  <div class="lg:hidden">
    <button @click="isDrawerOpen = true">
      <!-- Hamburger icon -->
      <Icon name="mdi:menu" />
    </button>
  </div>

  <!-- Drawer Menu for Mobile -->
  <div
    v-show="isDrawerOpen"
    class="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 lg:hidden"
    @click.self="isDrawerOpen = false"
  >
    <div class="relative bg-white p-4">
      <!-- Close icon -->
      <button @click="isDrawerOpen = false">
        <Icon name="mdi:close" />
      </button>
      <ul>
        <li v-for="link in navLinks" :key="link.id">
          <NuxtLink :to="link.href" @click="isDrawerOpen = false">{{
            link.title
          }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { defaultNavLinks } from "~/constants/appConfig";

const navLinks = defaultNavLinks;
const isDrawerOpen = ref(false);
</script>
