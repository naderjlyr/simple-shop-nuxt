<template>
  <div
    v-if="showCart"
    class="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-50"
  >
    <div class="p-4">
      <h3 class="font-semibold text-lg">Your Cart</h3>
      <div v-if="cartItems.length > 0">
        <div
          v-for="item in cartItems"
          :key="item.id"
          class="flex justify-between items-center mt-2"
        >
          <div class="flex items-center">
            <img
              :src="item.image"
              alt=""
              class="h-10 w-10 object-cover rounded-full"
            />
            <span class="ml-2">{{ item.title }}</span>
          </div>
          <div>
            <span>{{ item.quantity }} x ${{ item.price }}</span>
            <button class="ml-2 text-red-500" @click="removeFromCart(item.id)">
              Remove
            </button>
          </div>
        </div>
        <div class="mt-4">
          <div class="font-semibold">Total: ${{ cartTotal }}</div>
          <button class="w-full bg-blue-500 text-white rounded-md mt-2 p-2">
            Checkout
          </button>
        </div>
      </div>
      <div v-else class="text-center mt-2">Your cart is empty.</div>
    </div>
  </div>
</template>

<script setup>
const cartStore = useCartStore();
const cartItems = computed(() => cartStore.items);
const cartTotal = computed(() => cartStore.cartTotal);

const removeFromCart = (productId) => {
  cartStore.removeProductFromCart(productId);
};

const showCart = useState("showCart", () => false);
</script>
