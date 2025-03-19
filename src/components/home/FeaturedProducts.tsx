
import React from 'react';
import { Button } from '@/components/ui/button';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Kit Arduino para Iniciantes",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "R$199,90",
      promo: "Mês da Mulher"
    }, 
    {
      id: 2,
      name: "Luminária Personalizada",
      imageUrl: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "R$129,90",
      promo: "Dia das Mães"
    }, 
    {
      id: 3,
      name: "Colar com Nome Gravado",
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "R$79,90",
      promo: "Dia das Mães"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-display font-bold text-center mb-2">
          Produtos em Destaque
        </h2>
        <p className="text-center text-gray-600 mb-8">Mês da Mulher! e Dia das Mães!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
                <div className="absolute top-0 right-0 bg-pink-500 text-white py-1 px-3 rounded-bl-lg">
                  {product.promo}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.price}</p>
                <Button className="mt-4 w-full">Adicionar ao Carrinho</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
