import { defineStore } from "pinia";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
}

export const useCartStore = defineStore("cart", {
  state: (): CartState => ({
    items: [],
  }),
  getters: {
    cartTotal: (state) => {
      return state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
    },
    itemCount: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },
  },
  actions: {
    addProductToCart(product: CartItem) {
      const existingItem = this.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },
    removeProductFromCart(productId: string) {
      this.items = this.items.filter((item) => item.id !== productId);
    },
    updateProductQuantity(productId: string, quantity: number) {
      const cartItem = this.items.find((item) => item.id === productId);
      if (cartItem && quantity > 0) {
        cartItem.quantity = quantity;
      } else {
        this.removeProductFromCart(productId);
      }
    },
    clearCart() {
      this.items = [];
    },
  },
  persist: true,
});
