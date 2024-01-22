import type { Category, NavLink } from "~/types/types";

export const defaultCategories: Category[] = [
  { id: 1, name: "Smart Phones", slug: "smartphones", icon: "bi:phone" },
  {
    id: 2,
    name: "Laptops",
    slug: "laptops",
    icon: "majesticons:laptop-line",
  },
  { id: 3, name: "Fragrances", slug: "fragrances", icon: "tabler:perfume" },
  {
    id: 4,
    name: "Skin Care",
    slug: "skincare",
    icon: "material-symbols-light:soap-outline",
  },
  {
    id: 5,
    name: "Groceries",
    slug: "groceries",
    icon: "arcticons:tesco-grocery",
  },
  {
    id: 6,
    name: "Home Decoration",
    slug: "home-decoration",
    icon: "solar:home-outline",
  },
  {
    id: 7,
    name: "Furniture",
    slug: "furniture",
    icon: "mdi:table-furniture",
  },
  { id: 8, name: "Tops", slug: "tops", icon: "game-icons:tank-top" },
  { id: 9, name: "Women's Dresses", slug: "womens-dresses", icon: "ph:dress" },
  {
    id: 10,
    name: "Women's Shoes",
    slug: "womens-shoes",
    icon: "icon-park-outline:high-heeled-shoes",
  },
  {
    id: 11,
    name: "Men's Shirts",
    slug: "mens-shirts",
    icon: "ion:shirt-outline",
  },
  {
    id: 12,
    name: "Men's Shoes",
    slug: "mens-shoes",
    icon: "mingcute:shoe-line",
  },
  { id: 13, name: "Men's Watches", slug: "mens-watches", icon: "ph:watch" },
  {
    id: 14,
    name: "Women's Watches",
    slug: "womens-watches",
    icon: "ph:watch-bold",
  },
  {
    id: 15,
    name: "Women's Bags",
    slug: "womens-bags",
    icon: "teenyicons:bag-outline",
  },

  {
    id: 16,
    name: "Women's Jewellery",
    slug: "womens-jewellery",
    icon: "maki:jewelry-store",
  },
  {
    id: 17,
    name: "Sunglasses",
    slug: "sunglasses",
    icon: "ph:sunglasses-fill",
  },
  {
    id: 18,
    name: "Automative",
    slug: "automotive",
    icon: "material-symbols:flash-auto",
  },
  {
    id: 19,
    name: "Motorcycle",
    slug: "motorcycle",
    icon: "ph:motorcycle-light",
  },
  {
    id: 20,
    name: "Lighting",
    slug: "lighting",
    icon: "mingcute:ceiling-lamp-line",
  },
];
export const defaultNavLinks: NavLink[] = [
  { id: 1, title: "Home", icon: "clarity:home-line", href: "/" },
  { id: 3, title: "Categories", icon: "carbon:category", href: "" },
  {
    id: 4,
    title: "All Products",
    icon: "fluent-mdl2:product-variant",
    href: "/product/",
  },
];
