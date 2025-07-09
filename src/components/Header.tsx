import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import DemoModal from './DemoModal';

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src="/Hiree Logo copy copy.png" 
                alt="Hiree Logo" 
                className="h-12 w-auto transition-all duration-300 transform hover:scale-105"
              />
            </div>

            {/* Left-aligned Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 ml-12">
              <a 
                href="#" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium text-sm tracking-wide"
              >
                Meet Hiree
              </a>
              <a 
                href="#" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium text-sm tracking-wide"
              >
                About Us
              </a>
              <a 
                href="#" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium text-sm tracking-wide"
              >
                Blog
              </a>
              <a 
                href="#" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium text-sm tracking-wide"
              >
                Pricing
              </a>
              <a 
                href="#" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium text-sm tracking-wide"
              >
                Contact Us
              </a>
            </nav>

            {/* Right-aligned Sign In */}
            <div className="flex items-center">
              <button 
                onClick={() => setShowLogin(true)}
                className="text-blue-600 hover:text-blue-700 transition-colors duration-300 font-medium text-sm tracking-wide px-4 py-2 rounded-lg hover:bg-blue-50"
              >
                Sign In
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setShowLogin(true)}
                className="text-blue-600 hover:text-blue-700 transition-colors duration-300 font-medium text-sm px-4 py-2"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Modals */}
      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
      {showSignup && <SignupForm onClose={() => setShowSignup(false)} />}
      {showDemo && <DemoModal onClose={() => setShowDemo(false)} />}
    </>
  );
}