
import React, { useState } from 'react';
import { getProductsByCategory } from '@/data/products';
import { ProductCard } from '@/components/products/ProductCard';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const LaserCutProducts = () => {
  const [products, setProducts] = useState(getProductsByCategory("Corte a Laser"));
  const { addItem } = useCart();

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      imageUrl: product.images?.[0] || '', // Ensure imageUrl is included
    });
    toast.success(`${product.name} adicionado ao carrinho`);
  };

  const handlePriceUpdate = (productId: string, newPrice: number) => {
    // This is for admin only and would be implemented in a real app
    toast.success(`Preço atualizado com sucesso!`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Produtos de Corte a Laser</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={{
              id: product.id,
              name: product.name,
              description: product.description,
              price: product.price,
              imageUrl: product.images[0] || ''
            }}
            onAddToCart={handleAddToCart}
            onPriceUpdate={handlePriceUpdate}
            showAdminControls={false}
          />
        ))}
      </div>
    </div>
  );
};

export default LaserCutProducts;
