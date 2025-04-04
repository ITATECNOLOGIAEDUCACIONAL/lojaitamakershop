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
  },
  {
    id: "3d-1",
    name: "Cofre Creeper",
    description: "Cofre personalizado em formato de Creeper do Minecraft, perfeito para guardar moedas e pequenos objetos. Impressão 3D em PLA.",
    price: 35.90,
    images: ["/lovable-uploads/45c78b88-2ca7-46ab-9b46-0a39a1de9230.png"],
    category: "Impressão 3D",
    tags: ["cofre", "minecraft", "personalizado"],
    rating: 4.9,
    reviews: 15,
    inStock: true
  },
  {
    id: "3d-2",
    name: "Chaveiro Personalizado",
    description: "Chaveiro personalizado com nome 'Beatriz', feito em impressão 3D com cores vibrantes. Personalizamos com o nome que desejar.",
    price: 15.90,
    images: ["/lovable-uploads/a0604a35-c9b5-49fd-9865-2693ac0bc7cc.png"],
    category: "Impressão 3D",
    tags: ["chaveiro", "personalizado", "nome"],
    rating: 4.7,
    reviews: 22,
    inStock: true
  },
  {
    id: "3d-3",
    name: "Chaveiro Instagram",
    description: "Chaveiro em formato do logo do Instagram, impresso em 3D com acabamento de qualidade. Perfeito para presentes.",
    price: 12.90,
    images: ["/lovable-uploads/d87b419b-263a-4dc0-ba9e-692ff3c26ecd.png"],
    category: "Impressão 3D",
    tags: ["chaveiro", "instagram", "rede social"],
    rating: 4.6,
    reviews: 18,
    inStock: true
  },
  {
    id: "3d-4",
    name: "Suporte para Chaveiros",
    description: "Suporte giratório para organizar e exibir chaveiros, feito em impressão 3D. Ideal para coleções ou uso comercial.",
    price: 45.90,
    images: ["/lovable-uploads/a64e8e68-1ae5-4065-abdf-960953868eb2.png"],
    category: "Impressão 3D",
    tags: ["suporte", "organização", "chaveiros"],
    rating: 4.8,
    reviews: 10,
    inStock: true
  },
  {
    id: "3d-5",
    name: "Cofre Mecânico",
    description: "Cofre mecânico com engrenagens visíveis, produzido em impressão 3D. Design único que combina funcionalidade e estilo.",
    price: 55.90,
    images: ["/lovable-uploads/1cb996d5-511a-4835-9e3e-dca5c687c977.png"],
    category: "Impressão 3D",
    tags: ["cofre", "mecânico", "engrenagens"],
    rating: 4.9,
    reviews: 8,
    inStock: true
  },
  {
    id: "robo-1",
    name: "Kit Robô Seguidor de Linha",
    description: "Kit educacional para montar um robô seguidor de linha. Ideal para iniciantes em robótica e programação Arduino.",
    price: 149.90,
    images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"],
    category: "Robótica",
    tags: ["kit", "arduino", "educacional", "seguidor de linha"],
    rating: 4.7,
    reviews: 23,
    inStock: true,
    features: [
      "Arduino UNO R3",
      "2 Motores DC",
      "Chassi em acrílico",
      "Sensores infravermelhos",
      "Módulo driver L298N",
      "Manual de montagem e programação"
    ]
  },
  {
    id: "robo-2",
    name: "Braço Robótico DIY",
    description: "Kit de braço robótico para montagem, com 4 graus de liberdade. Controle via Arduino e servomotores de precisão.",
    price: 299.90,
    discountPrice: 269.90,
    images: ["https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"],
    category: "Robótica",
    tags: ["braço robótico", "arduino", "servo", "DIY", "educacional"],
    rating: 4.8,
    reviews: 17,
    inStock: true,
    features: [
      "4 servomotores de precisão",
      "Estrutura de alum��nio",
      "Arduino Nano",
      "Shield para servos",
      "Software de controle",
      "Guia de montagem detalhado"
    ]
  },
  {
    id: "robo-3",
    name: "Kit Robô Hexápode",
    description: "Robô aranha com 18 servomotores para movimentos realistas. Projeto avançado para entusiastas de robótica.",
    price: 499.90,
    images: ["https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=800&q=80"],
    category: "Robótica",
    tags: ["hexápode", "aranha", "servo", "avançado"],
    rating: 4.9,
    reviews: 11,
    inStock: true,
    features: [
      "18 micro servomotores",
      "Controlador PCA9685",
      "ESP32 com WiFi e Bluetooth",
      "Estrutura em PLA impresso em 3D",
      "Bateria LiPo recarregável",
      "Controle via smartphone"
    ]
  },
  {
    id: "robo-4",
    name: "Kit Arduino Iniciante",
    description: "Kit completo para iniciantes em Arduino, com todos os componentes essenciais para seus primeiros projetos.",
    price: 179.90,
    discountPrice: 159.90,
    images: ["/lovable-uploads/987e2d86-9830-4f2d-9168-b9e29c4ae67a.png"],
    category: "Robótica",
    tags: ["arduino", "iniciante", "kit", "componentes"],
    rating: 4.6,
    reviews: 42,
    inStock: true,
    features: [
      "Arduino UNO R3",
      "Breadboard",
      "65 jumpers macho-macho",
      "15 LEDs sortidos",
      "10 resistores variados",
      "Sensores (ultrassônico, temperatura)",
      "Display LCD 16x2",
      "Livro de projetos para iniciantes"
    ]
  },
  {
    id: "robo-5",
    name: "Drone DIY Quadricóptero",
    description: "Kit para montagem do seu próprio drone. Inclui frame, motores, ESCs e controladora de voo.",
    price: 599.90,
    images: ["/lovable-uploads/ca72f799-386e-4bff-844e-9ba5dfb4d28d.png"],
    category: "Robótica",
    tags: ["drone", "quadricóptero", "DIY", "montagem"],
    rating: 4.5,
    reviews: 9,
    inStock: true,
    features: [
      "Frame de fibra de carbono 250mm",
      "4 motores brushless 2300KV",
      "4 ESCs 30A",
      "Controladora de voo F4",
      "Rádio receptor compatível",
      "Bateria LiPo 3S 1500mAh",
      "Manual de montagem e configuração"
    ]
  }
];

// Helper functions
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

// New function to get robotics products specifically
export const getRoboticProducts = (): Product[] => {
  return getProductsByCategory("Robótica");
};

export const getCategories = (): string[] => {
  // Extract unique categories
  const categories = new Set(products.map(product => product.category));
  return Array.from(categories);
};
