
export interface PrintProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
}

export const initialProducts: PrintProduct[] = [
  {
    id: "3d-1",
    name: "Cofre Creeper",
    imageUrl: "/lovable-uploads/45c78b88-2ca7-46ab-9b46-0a39a1de9230.png",
    price: 35.90,
    description: "Cofre personalizado em formato de Creeper do Minecraft, perfeito para guardar moedas e pequenos objetos. Impressão 3D em PLA."
  },
  {
    id: "3d-2",
    name: "Chaveiro Personalizado",
    imageUrl: "/lovable-uploads/a0604a35-c9b5-49fd-9865-2693ac0bc7cc.png",
    price: 15.90,
    description: "Chaveiro personalizado com nome 'Beatriz', feito em impressão 3D com cores vibrantes. Personalizamos com o nome que desejar."
  },
  {
    id: "3d-3",
    name: "Chaveiro Instagram",
    imageUrl: "/lovable-uploads/d87b419b-263a-4dc0-ba9e-692ff3c26ecd.png",
    price: 12.90,
    description: "Chaveiro em formato do logo do Instagram, impresso em 3D com acabamento de qualidade. Perfeito para presentes."
  },
  {
    id: "3d-4",
    name: "Organizador de Chaveiros",
    imageUrl: "/lovable-uploads/a64e8e68-1ae5-4065-abdf-960953868eb2.png",
    price: 45.90,
    description: "Suporte giratório para organizar e exibir chaveiros, feito em impressão 3D. Ideal para coleções ou uso comercial."
  },
  {
    id: "3d-5",
    name: "Cofre Mecânico",
    imageUrl: "/lovable-uploads/1cb996d5-511a-4835-9e3e-dca5c687c977.png",
    price: 55.90,
    description: "Cofre mecânico com design exclusivo e engrenagens visíveis, produzido em impressão 3D. Combina funcionalidade e estilo."
  }
];
