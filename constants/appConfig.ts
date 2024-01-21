import type { Category, NavLink } from "~/types/types";

export const defaultCategories: Category[] = [
  { id: 1, name: "Smart Phones", icon: "bi:phone" },
  { id: 2, name: "Laptops", icon: "majesticons:laptop-line" },
  { id: 3, name: "Fragrances", icon: "tabler:perfume" },
  { id: 4, name: "Skin Care", icon: "material-symbols-light:soap-outline" },
  { id: 5, name: "Groceries", icon: "arcticons:tesco-grocery" },
  { id: 6, name: "Home Decoration", icon: "solar:home-outline" },
  { id: 7, name: "Furniture", icon: "mdi:table-furniture" },
  { id: 8, name: "Tops", icon: "game-icons:tank-top" },
  { id: 9, name: "Women's Dresses", icon: "ph:dress" },
  {
    id: 10,
    name: "Women's Shoes",
    icon: "icon-park-outline:high-heeled-shoes",
  },
  { id: 11, name: "Men's Shirts", icon: "ion:shirt-outline" },
  { id: 12, name: "Men's Shoes", icon: "mingcute:shoe-line" },
  { id: 13, name: "Men's Watches", icon: "ph:watch" },
  { id: 14, name: "Women's Watches", icon: "ph:watch-bold" },
  { id: 15, name: "Women's Bags", icon: "teenyicons:bag-outline" },
  { id: 16, name: "Women's Jewellery", icon: "maki:jewelry-store" },
  { id: 17, name: "Sunglasses", icon: "ph:sunglasses-fill" },
  { id: 18, name: "Automative", icon: "material-symbols:flash-auto" },
  { id: 19, name: "Motorcycle", icon: "ph:motorcycle-light" },
  { id: 20, name: "Lighting", icon: "mingcute:ceiling-lamp-line" },
];
export const defaultNavLinks: NavLink[] = [
  { id: 1, title: "Home", icon: "", href: "/" },
  { id: 2, title: "Top Rated Products", icon: "", href: "/top-rated" },
  { id: 3, title: "Categories", icon: "", href: "" },
];
