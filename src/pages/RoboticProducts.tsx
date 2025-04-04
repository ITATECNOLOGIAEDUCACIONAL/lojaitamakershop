
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { ProductCard } from '@/components/products/ProductCard';
import { getRoboticProducts } from '@/data/products';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Helmet } from 'react-helmet';

const RoboticProducts = () => {
  const { toast } = useToast();
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>(getRoboticProducts());

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.discountPrice || product.price,
      image: product.images[0],
      quantity: 1
    });
    
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao carrinho.`,
    });
  };

  const handlePriceUpdate = (productId: string, newPrice: number) => {
    // This would typically update the price in a backend database
    // For now, we'll just update the local state
    const updatedProducts = products.map(product => 
      product.id === productId ? { ...product, price: newPrice } : product
    );
    setProducts(updatedProducts);
    
    toast({
      title: "Preço atualizado",
      description: `O preço do produto foi atualizado para R$${newPrice.toFixed(2).replace('.', ',')}.`,
    });
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <Helmet>
        <title>Kits de Robótica | Maker Store</title>
      </Helmet>
      
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Kits de Robótica</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Explore nossa seleção de kits de robótica para iniciantes e entusiastas. 
          Desde robôs educacionais até componentes avançados para projetos customizados.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={{
              id: product.id,
              name: product.name,
              imageUrl: product.images[0],
              price: product.discountPrice || product.price,
              description: product.description
            }}
            onAddToCart={() => handleAddToCart(product)}
            onPriceUpdate={handlePriceUpdate}
            showAdminControls={false}
          />
        ))}
      </div>
    </div>
  );
};

export default RoboticProducts;
