import React, { useState, useEffect } from 'react';
import { LogIn } from 'lucide-react';

export default function VideoTitleSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const menuItems = [
    'Meet Hiree',
    'About Us', 
    'Blog',
    'Pricing',
    'Contact Us'
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Header Navigation */}
      <header className="relative z-10 px-6 py-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left-aligned menu items */}
          <div className="flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={`text-white/90 hover:text-white font-medium transition-all duration-300 hover:scale-105 transform ${
                  isVisible ? 'animate-slideInLeft' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Sign In button */}
          <button
            onClick={() => setShowLogin(true)}
            className={`flex items-center space-x-2 bg-white text-blue-700 px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
              isVisible ? 'animate-slideInRight' : 'opacity-0'
            }`}
            style={{ animationDelay: '500ms' }}
          >
            <LogIn className="w-4 h-4" />
            <span>Sign In</span>
          </button>
        </nav>
      </header>

      {/* Main Title Section */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-6">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Title */}
          <h1 
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8 transition-all duration-1000 transform ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
            style={{ animationDelay: '800ms' }}
          >
            How Hiree Works
          </h1>
          
          {/* Subtitle */}
          <p 
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white/95 leading-relaxed transition-all duration-1000 transform ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
            style={{ animationDelay: '1000ms' }}
          >
            Your Smart Recruiter Assistant
          </p>

          {/* Decorative line */}
          <div 
            className={`w-24 h-1 bg-white mx-auto mt-8 rounded-full transition-all duration-1000 transform ${
              isVisible 
                ? 'opacity-100 scale-x-100' 
                : 'opacity-0 scale-x-0'
            }`}
            style={{ animationDelay: '1200ms' }}
          ></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ animationDelay: '1400ms' }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      {/* Login Modal Placeholder */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 scale-100">
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <LogIn className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
                <p className="text-gray-600 mt-2">Access your Hiree dashboard</p>
              </div>
              
              <button
                onClick={() => setShowLogin(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}