import React from 'react';

// Navbar Component
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50  backdrop-opacity-60 bg-white bg-opacity-10 border-b border-gray/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo or Brand */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-white">MyApp</a>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-gray-200">Home</a>
            <a href="#about" className="text-white hover:text-gray-200">About</a>
            <a href="#services" className="text-white hover:text-gray-200">Services</a>
            <a href="#contact" className="text-white hover:text-gray-200">Contact</a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            {/* Add mobile menu button or toggle here if needed */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
