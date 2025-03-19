
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
  },
  {
    id: "laser-1",
    name: "Chaveiro Raspadinha",
    description: "Chaveiro personalizado em formato de raspadinha, perfeito para lembrança de eventos e presentes.",
    price: 14.90,
    images: ["/lovable-uploads/6d7f8dc0-1202-4955-b4af-b78f3bf72338.png"],
    category: "Corte a Laser",
    tags: ["chaveiro", "personalizado", "mdf"],
    rating: 4.7,
    reviews: 42,
    inStock: true
  },
  {
    id: "laser-2",
    name: "Mini Caixinha Deslizante",
    description: "Caixinha deslizante em MDF, perfeita para guardar pequenos objetos ou dar de presente.",
    price: 19.90,
    images: ["/lovable-uploads/8d793d72-29ee-4be1-a48e-161c861a6476.png"],
    category: "Corte a Laser",
    tags: ["caixa", "mdf", "presente"],
    rating: 4.8,
    reviews: 36,
    inStock: true
  },
  {
    id: "laser-3",
    name: "Mapa do Brasil em Camadas",
    description: "Mapa do Brasil em MDF com camadas, mostrando os estados com detalhes territoriais.",
    price: 89.90,
    images: ["/lovable-uploads/ebb6abe4-b25d-4ef0-8161-c24cec3b6112.png"],
    category: "Corte a Laser",
    tags: ["mapa", "decoração", "mdf"],
    rating: 4.9,
    reviews: 28,
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
