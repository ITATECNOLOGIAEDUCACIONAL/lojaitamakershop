
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { 
  Search, 
  ShoppingBag, 
  Heart, 
  Menu, 
  X, 
  User,
  Home
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from '@/components/ui/sheet';
import { getCategories } from '@/data/products';
import { Badge } from '@/components/ui/badge';

const Navbar: React.FC = () => {
  const { getCartCount, toggleCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const categories = getCategories();

  // Check if user has scrolled
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 lg:px-8",
        isScrolled 
          ? "py-2 bg-white/90 backdrop-blur-md shadow-sm" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-display font-bold text-lg md:text-xl flex items-center">
          <span className="text-primary mr-1">ITA</span>
          <span>SHOP</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive('/') ? "text-primary" : "text-foreground/80"
            )}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive('/products') ? "text-primary" : "text-foreground/80"
            )}
          >
            Shop
          </Link>
          <Link 
            to="/categories" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive('/categories') ? "text-primary" : "text-foreground/80"
            )}
          >
            Categories
          </Link>
          <Link 
            to="/about" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive('/about') ? "text-primary" : "text-foreground/80"
            )}
          >
            About
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2 md:space-x-3">
          <Link to="/search" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Search className="h-5 w-5 text-gray-600" />
          </Link>
          
          <Link to="/wishlist" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Heart className="h-5 w-5 text-gray-600" />
          </Link>
          
          <button 
            onClick={toggleCart} 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors relative"
          >
            <ShoppingBag className="h-5 w-5 text-gray-600" />
            {getCartCount() > 0 && (
              <Badge 
                className="absolute -top-1 -right-1 px-1.5 h-5 min-w-5 flex items-center justify-center bg-primary text-xs text-white rounded-full"
              >
                {getCartCount()}
              </Badge>
            )}
          </button>
          
          <Link to="/login" className="hidden md:flex p-2 rounded-full hover:bg-gray-100 transition-colors">
            <User className="h-5 w-5 text-gray-600" />
          </Link>

          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[350px] pt-12">
              <div className="flex flex-col space-y-6 h-full">
                <div className="space-y-1">
                  <h3 className="text-xs uppercase text-muted-foreground font-medium tracking-wider mb-3">
                    Navigation
                  </h3>
                  <div className="flex flex-col space-y-1.5">
                    <Link 
                      to="/" 
                      className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent"
                    >
                      <Home className="h-4 w-4" />
                      <span>Home</span>
                    </Link>
                    <Link 
                      to="/products" 
                      className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      <span>Shop</span>
                    </Link>
                    <Link 
                      to="/wishlist" 
                      className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent"
                    >
                      <Heart className="h-4 w-4" />
                      <span>Wishlist</span>
                    </Link>
                    <Link 
                      to="/login" 
                      className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent"
                    >
                      <User className="h-4 w-4" />
                      <span>Account</span>
                    </Link>
                  </div>
                </div>

                {/* Categories */}
                <div className="space-y-1">
                  <h3 className="text-xs uppercase text-muted-foreground font-medium tracking-wider mb-3">
                    Categories
                  </h3>
                  <div className="flex flex-col space-y-1.5">
                    {categories.map((category) => (
                      <Link 
                        key={category}
                        to={`/products?category=${category}`} 
                        className="px-3 py-2 rounded-md hover:bg-accent"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
