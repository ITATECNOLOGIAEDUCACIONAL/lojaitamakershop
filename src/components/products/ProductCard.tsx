
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PriceEditDialog } from './PriceEditDialog';

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onPriceUpdate: (productId: string, newPrice: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onAddToCart, 
  onPriceUpdate 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-64 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-medium text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 h-20 overflow-hidden">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-primary text-xl font-semibold mr-2">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            <PriceEditDialog 
              productId={product.id} 
              currentPrice={product.price} 
              onPriceUpdate={onPriceUpdate} 
            />
          </div>
          <Button onClick={() => onAddToCart(product)} className="flex items-center">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
};
