import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const scrollToDemo = () => {
    const demoSection = document.getElementById('try-it-now');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group" 
            onClick={scrollToDemo}
          >
            <img 
              src="/Hiree Logo.png" 
              alt="Hiree Logo" 
              className="w-8 h-8 transition-all duration-300 transform group-hover:scale-110"
            />
            <span className="text-xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">Hiree</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => setShowLogin(true)}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105 transform"
            >
              Login
            </button>
            <button 
              onClick={() => setShowSignup(true)}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105 transform"
            >
              Signup
            </button>
            <button 
              onClick={scrollToDemo}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Book a Demo
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={scrollToDemo}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Book a Demo
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