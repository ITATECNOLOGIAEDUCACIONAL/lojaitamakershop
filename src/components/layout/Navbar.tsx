
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, UserPlus } from 'lucide-react';
import CartDropdown from './CartDropdown';
import AdminLink from './AdminLink';
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
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/impressao-3d" className="font-medium hover:text-primary transition-colors">
              Impressão 3D
            </Link>
            <Link to="/corte-a-laser" className="font-medium hover:text-primary transition-colors">
              Corte a Laser
            </Link>
            <Link to="/cadastro" className="font-medium hover:text-primary transition-colors flex items-center">
              <UserPlus className="mr-1 h-4 w-4" />
              Cadastre-se
            </Link>
          </nav>

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
                to="/cadastro"
                className="font-medium hover:text-primary transition-colors px-4 py-2 flex items-center"
                onClick={closeMenu}
              >
                <UserPlus className="mr-1 h-4 w-4" />
                Cadastre-se
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
