import React, { useState, useEffect } from 'react';

export default function VideoTitle() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div 
          className={`transform transition-all duration-1500 ease-out ${
            isVisible 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-12 opacity-0 scale-95'
          }`}
        >
          {/* Main title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6">
            <span 
              className={`inline-block transform transition-all duration-1000 delay-300 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
            >
              How Hiree Works
            </span>
          </h1>
          
          {/* Subtitle */}
          <div 
            className={`transform transition-all duration-1000 delay-600 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-100 font-medium leading-relaxed">
              Your Smart Recruiter Assistant
            </p>
          </div>

          {/* Animated underline */}
          <div 
            className={`mx-auto mt-8 h-1 bg-white rounded-full transition-all duration-1200 delay-900 ${
              isVisible ? 'w-32 opacity-100' : 'w-0 opacity-0'
            }`}
          ></div>
        </div>

        {/* Subtle pulsing effect */}
        <div 
          className={`absolute inset-0 rounded-full bg-white transition-all duration-2000 ${
            isVisible ? 'opacity-5 scale-150' : 'opacity-0 scale-100'
          }`}
          style={{ 
            animation: isVisible ? 'pulse 4s ease-in-out infinite' : 'none',
            animationDelay: '1.5s'
          }}
        ></div>
      </div>

      {/* Bottom fade indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 ${
          isVisible ? 'translate-y-0 opacity-60' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="w-1 h-16 bg-white rounded-full animate-bounce"></div>
      </div>
    </section>
  );
}