
import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';
import { PrintProduct, getProducts } from '@/data/3dPrintProducts';
import { ProductCard } from '@/components/products/ProductCard';

const ThreeDPrintProducts = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<PrintProduct[]>([]);

  useEffect(() => {
    // Get products from localStorage if available, otherwise use initial data
    setProducts(getProducts());
  }, []);

  const handleAddToCart = (product: PrintProduct) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      imageUrl: product.imageUrl
    });
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

  const handlePriceUpdate = (productId: string, newPrice: number) => {
    const updatedProducts = products.map(product => 
      product.id === productId ? { ...product, price: newPrice } : product
    );
    
    setProducts(updatedProducts);
    localStorage.setItem('adminProducts', JSON.stringify(updatedProducts));
    toast.success(`Preço atualizado para R$ ${newPrice.toFixed(2).replace('.', ',')}`);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-12">Produtos de Impressão 3D</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
            onPriceUpdate={handlePriceUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default ThreeDPrintProducts;
