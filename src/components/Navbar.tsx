import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { useCartStore } from '../store/cartStore';

export const Navbar = () => {
  const { user } = useAuthStore();
  const { items } = useCartStore();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              EG Business
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/marketplace" className="hover:text-green-200">
              Marketplace
            </Link>
            <Link to="/knowledge-hub" className="hover:text-green-200">
              Knowledge Hub
            </Link>
            <Link to="/vendors" className="hover:text-green-200">
              Find Vendors
            </Link>
            {user ? (
              <Link to="/profile" className="hover:text-green-200">
                <User className="h-6 w-6" />
              </Link>
            ) : (
              <Link to="/login" className="hover:text-green-200">
                Login
              </Link>
            )}
            <Link to="/cart" className="relative hover:text-green-200">
              <ShoppingCart className="h-6 w-6" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {items.length}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-green-200 hover:bg-green-600"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/marketplace"
              className="block px-3 py-2 rounded-md hover:bg-green-600"
            >
              Marketplace
            </Link>
            <Link
              to="/knowledge-hub"
              className="block px-3 py-2 rounded-md hover:bg-green-600"
            >
              Knowledge Hub
            </Link>
            <Link
              to="/vendors"
              className="block px-3 py-2 rounded-md hover:bg-green-600"
            >
              Find Vendors
            </Link>
            {user ? (
              <Link
                to="/profile"
                className="block px-3 py-2 rounded-md hover:bg-green-600"
              >
                Profile
              </Link>
            ) : (
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md hover:bg-green-600"
              >
                Login
              </Link>
            )}
            <Link
              to="/cart"
              className="block px-3 py-2 rounded-md hover:bg-green-600"
            >
              Cart ({items.length})
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};