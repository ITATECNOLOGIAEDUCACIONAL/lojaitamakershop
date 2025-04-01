
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useCart } from '@/context/CartContext';

const CartDropdown = () => {
  const { toggleCart, getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleCart} 
            className="relative"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
            <span className="sr-only">Abrir carrinho</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Carrinho de compras</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CartDropdown;
