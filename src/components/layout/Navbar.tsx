
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, UserPlus, Grid } from 'lucide-react';
import CartDropdown from './CartDropdown';
import AdminLink from './AdminLink';
import NavigationMenu from './NavigationMenu';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold">Maker Store</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center">
            <NavigationMenu />
          </div>

          <div className="flex items-center">
            <AdminLink />
            <CartDropdown />

            {/* Mobile menu button */}
            <button
              className="ml-2 md:hidden p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="font-medium hover:text-primary transition-colors px-4 py-2"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/impressao-3d"
                className="font-medium hover:text-primary transition-colors px-4 py-2"
                onClick={closeMenu}
              >
                Impressão 3D
              </Link>
              <Link
                to="/corte-a-laser"
                className="font-medium hover:text-primary transition-colors px-4 py-2"
                onClick={closeMenu}
              >
                Corte a Laser
              </Link>
              <Link
                to="/produtos/robotica"
                className="font-medium hover:text-primary transition-colors px-4 py-2"
                onClick={closeMenu}
              >
                Robótica
              </Link>
              <Link
                to="/categories"
                className="font-medium hover:text-primary transition-colors px-4 py-2 flex items-center"
                onClick={closeMenu}
              >
                <Grid className="mr-1 h-4 w-4" />
                Categorias
              </Link>
              <Link
                to="/cadastro"
                className="font-medium hover:text-primary transition-colors px-4 py-2 flex items-center"
                onClick={closeMenu}
              >
                <UserPlus className="mr-1 h-4 w-4" />
                Cadastre-se
              </Link>
              <Link
                to="/checkout"
                className="font-medium hover:text-primary transition-colors px-4 py-2"
                onClick={closeMenu}
              >
                Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
