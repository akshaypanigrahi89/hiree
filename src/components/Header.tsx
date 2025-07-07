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
            className="flex items-center cursor-pointer group" 
            onClick={() => {
              const demoSection = document.getElementById('try-it-now');
              if (demoSection) {
                demoSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 hover:shadow-lg">
              <Phone className="w-8 h-8 text-white transition-transform duration-300 group-hover:rotate-12" />
            </div>
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
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Signup
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
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