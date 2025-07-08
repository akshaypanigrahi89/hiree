import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              className="cursor-pointer group" 
              onClick={() => {
                const demoSection = document.getElementById('try-it-now');
                if (demoSection) {
                  demoSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <img 
                src="/Hiree Logo copy copy.png" 
                alt="Hiree Logo" 
                className="h-16 w-auto transition-all duration-300 transform group-hover:scale-110 hover:drop-shadow-lg"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105 transform font-medium">
                Meet Hiree
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105 transform font-medium">
                About Us
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105 transform font-medium">
                Blog
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105 transform font-medium">
                Pricing
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105 transform font-medium">
                Contact Us
              </a>
              <button 
                onClick={() => setShowLogin(true)}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105 transform font-medium"
              >
                Sign In
              </button>
              <button 
                onClick={() => setShowSignup(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Signup
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setShowSignup(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Modals */}
      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
      {showSignup && <SignupForm onClose={() => setShowSignup(false)} />}
    </>
  );
}