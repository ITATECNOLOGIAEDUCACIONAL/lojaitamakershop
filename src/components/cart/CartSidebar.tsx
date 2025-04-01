
import React from 'react';
import { X, Trash2, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/utils';
import { Link } from 'react-router-dom';

const CartSidebar = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getCartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50" 
        onClick={closeCart}
        aria-hidden="true"
      />
      
      {/* Cart panel */}
      <div className="fixed right-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold flex items-center">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Seu Carrinho
          </h2>
          <Button variant="ghost" size="icon" onClick={closeCart}>
            <X className="h-5 w-5" />
            <span className="sr-only">Fechar</span>
          </Button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-6">
              <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
              <p className="text-lg font-medium text-gray-900 mb-2">Seu carrinho está vazio</p>
              <p className="text-gray-500 mb-4">Os itens adicionados ao carrinho aparecerão aqui</p>
              <Button onClick={closeCart}>
                Continuar Comprando
              </Button>
            </div>
          ) : (
            <ul className="divide-y">
              {items.map((item) => (
                <li key={item.id} className="py-4 flex">
                  {item.imageUrl && (
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
                      <img 
                        src={item.imageUrl} 
                        alt={item.name}
                        className="h-full w-full object-cover object-center" 
                      />
                    </div>
                  )}
                  <div className="ml-4 flex flex-1 flex-col">
                    <div className="flex justify-between text-base font-medium">
                      <h3>{item.name}</h3>
                      <p className="ml-4">{formatCurrency(item.price * item.quantity)}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border rounded">
                        <button 
                          className="px-2 py-1 hover:bg-gray-100"
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        >
                          -
                        </button>
                        <span className="px-2 py-1">{item.quantity}</span>
                        <button 
                          className="px-2 py-1 hover:bg-gray-100"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <button 
                        type="button" 
                        className="text-red-600 hover:text-red-800"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-5 w-5" />
                        <span className="sr-only">Remover</span>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Cart footer */}
        {items.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between text-base font-medium">
              <p>Subtotal</p>
              <p>{formatCurrency(getCartTotal())}</p>
            </div>
            <div className="space-y-2">
              <Button className="w-full" asChild>
                <Link to="/checkout" onClick={closeCart}>
                  Finalizar Compra
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={closeCart}
              >
                Continuar Comprando
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
