
import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Printer } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ProductCard } from '@/components/products/ProductCard';
import { PrintProduct, initialProducts } from '@/data/3dPrintProducts';

const ThreeDPrintProducts = () => {
  const { addItem } = useCart();
  const { toast } = useToast();
  const [products, setProducts] = useState<PrintProduct[]>(initialProducts);

  const handleAddToCart = (product: PrintProduct) => {
    addItem({
      product: {
        id: product.id,
        name: product.name,
        price: product.price,
        images: [product.imageUrl]
      },
      quantity: 1
    });
    
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao carrinho`,
      duration: 3000,
    });
  };

  const updateProductPrice = (productId: string, newPrice: number) => {
    setProducts(prevProducts => 
      prevProducts.map(product => 
        product.id === productId 
          ? { ...product, price: newPrice } 
          : product
      )
    );
    
    toast({
      title: "Preço atualizado!",
      description: "O preço do produto foi atualizado com sucesso",
      duration: 3000,
    });
  };

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <Printer className="mr-2 h-6 w-6 text-primary" />
          <h1 className="text-3xl font-display font-bold text-center">Produtos de Impressão 3D</h1>
        </div>
        
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Produtos personalizados feitos com tecnologia de impressão 3D de alta resolução.
          Ideais para presentes, decoração ou uso pessoal com design exclusivo.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onPriceUpdate={updateProductPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeDPrintProducts;
