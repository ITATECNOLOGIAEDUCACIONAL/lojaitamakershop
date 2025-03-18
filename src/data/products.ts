
// Define the Product interface
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  images: string[];
  category: string;
  tags: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  features?: string[];
}

// Sample product data
export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 199.99,
    discountPrice: 149.99,
    images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"],
    category: "Audio",
    tags: ["headphones", "wireless", "audio"],
    rating: 4.8,
    reviews: 124,
    inStock: true
  },
  {
    id: "2",
    name: "Smartphone Pro",
    description: "Latest smartphone with advanced camera and long battery life.",
    price: 999.99,
    images: ["https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"],
    category: "Electronics",
    tags: ["smartphone", "mobile", "tech"],
    rating: 4.6,
    reviews: 95,
    inStock: true
  },
  {
    id: "3",
    name: "Fitness Tracker",
    description: "Track your workouts, heart rate, and sleep with this compact fitness band.",
    price: 99.99,
    discountPrice: 79.99,
    images: ["https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"],
    category: "Wearables",
    tags: ["fitness", "health", "wearable"],
    rating: 4.5,
    reviews: 78,
    inStock: true
  }
];

// Helper functions
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getCategories = (): string[] => {
  // Extract unique categories
  const categories = new Set(products.map(product => product.category));
  return Array.from(categories);
};
