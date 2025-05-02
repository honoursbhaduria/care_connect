
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, Users, MapPin, Phone, LogIn, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock authentication state
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 shadow-md backdrop-blur-md" : "bg-transparent"
    }`}>
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <Heart className="h-8 w-8 text-careconnect-purple transition-transform duration-300 group-hover:scale-110" />
            <span className="text-2xl font-bold text-careconnect-dark-purple">Care Connect</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/services" 
              className={`text-gray-700 hover:text-careconnect-purple transition-colors font-medium relative 
                ${isActive('/services') ? 'text-careconnect-purple' : ''}
                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 
                after:bg-careconnect-purple after:transition-all after:duration-300 hover:after:w-full 
                ${isActive('/services') ? 'after:w-full' : ''}
              `}
            >
              Services
            </Link>
            <Link 
              to="/directory" 
              className={`text-gray-700 hover:text-careconnect-purple transition-colors font-medium relative 
                ${isActive('/directory') ? 'text-careconnect-purple' : ''}
                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 
                after:bg-careconnect-purple after:transition-all after:duration-300 hover:after:w-full 
                ${isActive('/directory') ? 'after:w-full' : ''}
              `}
            >
              Directory
            </Link>
            <Link 
              to="/community" 
              className={`text-gray-700 hover:text-careconnect-purple transition-colors font-medium relative 
                ${isActive('/community') ? 'text-careconnect-purple' : ''}
                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 
                after:bg-careconnect-purple after:transition-all after:duration-300 hover:after:w-full 
                ${isActive('/community') ? 'after:w-full' : ''}
              `}
            >
              Community
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-700 hover:text-careconnect-purple transition-colors font-medium relative 
                ${isActive('/about') ? 'text-careconnect-purple' : ''}
                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 
                after:bg-careconnect-purple after:transition-all after:duration-300 hover:after:w-full 
                ${isActive('/about') ? 'after:w-full' : ''}
              `}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-700 hover:text-careconnect-purple transition-colors font-medium relative 
                ${isActive('/contact') ? 'text-careconnect-purple' : ''}
                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 
                after:bg-careconnect-purple after:transition-all after:duration-300 hover:after:w-full 
                ${isActive('/contact') ? 'after:w-full' : ''}
              `}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <Button variant="outline" className="border-careconnect-purple text-careconnect-purple hover:bg-careconnect-light-purple transition-all duration-300" asChild>
                <Link to="/logout">
                  <LogOut className="mr-1" size={16} />
                  Log Out
                </Link>
              </Button>
            ) : (
              <Button variant="outline" className="border-careconnect-purple text-careconnect-purple hover:bg-careconnect-light-purple transition-all duration-300" asChild>
                <Link to="/login">
                  <LogIn className="mr-1" size={16} />
                  Log In
                </Link>
              </Button>
            )}
            <Button className="bg-careconnect-purple hover:bg-careconnect-dark-purple shadow-md hover:shadow-lg transition-all duration-300" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-careconnect-purple transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/services" className="text-gray-700 hover:text-careconnect-purple py-2" onClick={toggleMenu}>
                Services
              </Link>
              <Link to="/directory" className="text-gray-700 hover:text-careconnect-purple py-2" onClick={toggleMenu}>
                Directory
              </Link>
              <Link to="/community" className="text-gray-700 hover:text-careconnect-purple py-2" onClick={toggleMenu}>
                Community
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-careconnect-purple py-2" onClick={toggleMenu}>
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-careconnect-purple py-2" onClick={toggleMenu}>
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                {isLoggedIn ? (
                  <Button variant="outline" className="w-full border-careconnect-purple text-careconnect-purple hover:bg-careconnect-light-purple" asChild>
                    <Link to="/logout" onClick={toggleMenu}>
                      <LogOut className="mr-1" size={16} />
                      Log Out
                    </Link>
                  </Button>
                ) : (
                  <Button variant="outline" className="w-full border-careconnect-purple text-careconnect-purple hover:bg-careconnect-light-purple" asChild>
                    <Link to="/login" onClick={toggleMenu}>
                      <LogIn className="mr-1" size={16} />
                      Log In
                    </Link>
                  </Button>
                )}
                <Button className="w-full bg-careconnect-purple hover:bg-careconnect-dark-purple" asChild>
                  <Link to="/signup" onClick={toggleMenu}>Sign Up</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
