import React from 'react';
import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110">
              <Phone className="w-5 h-5 text-white transition-transform duration-300 hover:rotate-12" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Hiree</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105 transform">Login</a>
            <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors duration-300 hover:scale-105 transform">Signup</a>
            <button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Try For Free
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              Try For Free
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}