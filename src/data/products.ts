import headphones from "@/assets/prod-headphones.jpg";
import sneaker from "@/assets/prod-sneaker.jpg";
import watch from "@/assets/prod-watch.jpg";
import backpack from "@/assets/prod-backpack.jpg";
import sunglasses from "@/assets/prod-sunglasses.jpg";
import keyboard from "@/assets/prod-keyboard.jpg";

export type Product = {
  id: string;
  name: string;
  price: number; // in cents
  category: string;
  image: string;
  alt: string;
};

export const categories = [
  "All",
  "Audio",
  "Footwear",
  "Wearables",
  "Bags",
  "Accessories",
  "Keyboards",
] as const;

export const products: Product[] = [
  {
    id: "p1",
    name: "Aural Pro Wireless Headphones",
    price: 19900,
    category: "Audio",
    image: headphones,
    alt: "Premium wireless headphones product shot on dark gradient background",
  },
  {
    id: "p2",
    name: "Stride Mono Sneaker",
    price: 12900,
    category: "Footwear",
    image: sneaker,
    alt: "Minimalist monochrome running sneaker on dark gradient background",
  },
  {
    id: "p3",
    name: "Pulse X Smartwatch",
    price: 24900,
    category: "Wearables",
    image: watch,
    alt: "Modern smartwatch with black silicone band on dark gradient background",
  },
  {
    id: "p4",
    name: "Transit Tech Backpack",
    price: 15900,
    category: "Bags",
    image: backpack,
    alt: "Compact tech backpack product shot on dark gradient background",
  },
  {
    id: "p5",
    name: "Glare Polar Sunglasses",
    price: 9900,
    category: "Accessories",
    image: sunglasses,
    alt: "Modern polarized sunglasses on dark gradient background",
  },
  {
    id: "p6",
    name: "Capsule Mechanical Keyboard",
    price: 17900,
    category: "Keyboards",
    image: keyboard,
    alt: "Compact mechanical keyboard on dark gradient background",
  },
];
