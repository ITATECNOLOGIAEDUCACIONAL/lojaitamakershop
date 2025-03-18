
import React, { createContext, useContext, useState } from 'react';

// Define the cart item type
export interface CartItem {
  product: any; // Replace with actual Product type when available
  quantity: number;
  selectedVariants?: Record<string, string>;
}

// Context interface
interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  closeCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

// Create context with default values
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (item: CartItem) => {
    const existingIndex = items.findIndex(i => i.product.id === item.product.id);
    
    if (existingIndex > -1) {
      // Update quantity if item exists
      const updatedItems = [...items];
      updatedItems[existingIndex].quantity += item.quantity;
      setItems(updatedItems);
    } else {
      // Add new item
      setItems(prev => [...prev, item]);
    }
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.product.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setItems(prev => 
      prev.map(item => 
        item.product.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const toggleCart = () => {
    setIsOpen(prev => !prev);
  };

  const closeCart = () => {
    setIsOpen(false);
  };

  const getCartTotal = () => {
    return items.reduce((total, item) => {
      const price = item.product.discountPrice || item.product.price;
      return total + (price * item.quantity);
    }, 0);
  };

  const getCartCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  const value = {
    items,
    isOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    closeCart,
    getCartTotal,
    getCartCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  
  return context;
};
