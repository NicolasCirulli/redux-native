export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    description:
      "Experience high-quality audio with these comfortable wireless headphones.",
    price: 99.99,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Running Shoes",
    description:
      "Stay active and comfortable with these breathable running shoes.",
    price: 79.95,
    category: "Sporting Goods",
  },
  {
    id: 3,
    name: "Laptop Backpack",
    description:
      "Carry your laptop and essentials in this stylish and durable backpack.",
    price: 49.99,
    category: "Bags",
  },
  {
    id: 4,
    name: "Coffee Maker",
    description: "Start your day right with this easy-to-use coffee maker.",
    price: 39.99,
    category: "Appliances",
  },
  {
    id: 5,
    name: "Yoga Mat",
    description:
      "Improve your flexibility and balance with this non-slip yoga mat.",
    price: 24.99,
    category: "Fitness",
  },
  {
    id: 6,
    name: "Smartwatch",
    description:
      "Track your fitness goals and stay connected with this feature-packed smartwatch.",
    price: 199.99,
    category: "Electronics",
  },
  {
    id: 7,
    name: "Hiking Boots",
    description:
      "Explore the outdoors with these durable and waterproof hiking boots.",
    price: 119.95,
    category: "Sporting Goods",
  },
  {
    id: 8,
    name: "Travel Duffel Bag",
    description:
      "Pack your essentials for your next adventure in this spacious duffel bag.",
    price: 69.99,
    category: "Bags",
  },
  {
    id: 9,
    name: "Blender",
    description:
      "Make delicious smoothies and shakes with this powerful blender.",
    price: 59.99,
    category: "Appliances",
  },
  {
    id: 10,
    name: "Resistance Bands",
    description:
      "Strengthen your muscles and improve your flexibility with these versatile resistance bands.",
    price: 14.99,
    category: "Fitness",
  },
  {
    id: 11,
    name: "External Hard Drive",
    description:
      "Store your important files and data with this reliable external hard drive.",
    price: 79.99,
    category: "Electronics",
  },
  {
    id: 12,
    name: "Basketball",
    description: "Enjoy a game of basketball with this high-quality ball.",
    price: 29.95,
    category: "Sporting Goods",
  },
];

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}
