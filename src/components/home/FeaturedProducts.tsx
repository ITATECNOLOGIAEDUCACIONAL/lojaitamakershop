
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Kit de Decoração de Páscoa",
      imageUrl: "https://images.unsplash.com/photo-1552913903-2cffa1962dc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "R$149,90",
      description: "Kit completo para decoração de Páscoa com itens personalizáveis.",
      promo: "Edição Limitada"
    }, 
    {
      id: 2,
      name: "Coelho Luminoso Personalizado",
      imageUrl: "https://images.unsplash.com/photo-1457301353672-324d6d14f471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "R$129,90",
      description: "Coelho luminoso com nome gravado a laser, perfeito para presente.",
      promo: "Páscoa 2025"
    }, 
    {
      id: 3,
      name: "Cesta de Páscoa Personalizada",
      imageUrl: "https://images.unsplash.com/photo-1584473457493-82aca9a0a4e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "R$179,90",
      description: "Cesta de Páscoa personalizada com itens impressos em 3D e cortados a laser.",
      promo: "Páscoa 2025"
    },
    {
      id: 4,
      name: "Ovos Decorativos com LED",
      imageUrl: "https://images.unsplash.com/photo-1521289297582-29ac974fc47e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "R$99,90",
      description: "Conjunto de ovos decorativos com iluminação LED interna, perfeito para decoração.",
      promo: "Páscoa 2025"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#FEF7CD] to-[#FFDEE2] relative overflow-hidden">
      {/* Easter decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-[url('https://images.unsplash.com/photo-1584473457493-82aca9a0a4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-repeat-x opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-[url('https://images.unsplash.com/photo-1552913903-2cffa1962dc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-repeat-x opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-2 text-[#8B5CF6] drop-shadow-sm">
            Páscoa 2025 🐰
          </h2>
          <p className="text-lg text-purple-700 max-w-2xl mx-auto mb-6">
            Produtos personalizados para tornar sua Páscoa mais especial e tecnológica!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Mobile view: Standard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:hidden">
          {products.map(product => (
            <div key={product.id} className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-purple-100">
              <div className="relative">
                <img src={product.imageUrl} alt={product.name} className="w-full h-60 object-cover" />
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-1 px-4 rounded-bl-xl font-medium">
                  {product.promo}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-medium text-xl text-purple-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-3 text-sm">{product.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-pink-600">{product.price}</p>
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Adicionar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop view: Carousel */}
        <div className="hidden md:block">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-4">
              {products.map(product => (
                <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                      <img src={product.imageUrl} alt={product.name} className="w-full h-60 object-cover" />
                      <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-1 px-4 rounded-bl-xl font-medium">
                        {product.promo}
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-medium text-xl text-purple-800 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-3 text-sm line-clamp-2">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <p className="text-lg font-bold text-pink-600">{product.price}</p>
                        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Adicionar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative static md:absolute rounded-full bg-white/80 border-purple-200" />
              <CarouselNext className="relative static md:absolute rounded-full bg-white/80 border-purple-200" />
            </div>
          </Carousel>
        </div>

        {/* Easter eggs decoration */}
        <div className="flex justify-center mt-12">
          <div className="w-16 h-16 rounded-full bg-[#e5deff] mx-2 shadow-md"></div>
          <div className="w-16 h-16 rounded-full bg-[#ffdee2] mx-2 shadow-md"></div>
          <div className="w-16 h-16 rounded-full bg-[#fec6a1] mx-2 shadow-md"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
