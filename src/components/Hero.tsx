import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import DemoModal from './DemoModal';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const handleBookDemo = () => {
    setShowDemo(true);
  };

  return (
    <>
      <section className="min-h-screen bg-white flex items-center relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-blue-200 rounded-full opacity-15 blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            {/* Main headline */}
            <div 
              className={`transform transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
                How Hiree Works —{' '}
                <span className="text-blue-600">
                  Your Smart Recruiter Assistant
                </span>
              </h1>
            </div>

            {/* Supporting subheadline */}
            <div 
              className={`transform transition-all duration-1000 delay-300 ease-out ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 leading-relaxed mb-12 max-w-3xl">
                Stop chasing. Start hiring smarter. Screen 3x more candidates in half the time — no hassle, just results.
              </p>
            </div>

            {/* Call-to-action button */}
            <div 
              className={`transform transition-all duration-1000 delay-600 ease-out ${
                isVisible 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-8 opacity-0 scale-95'
              }`}
            >
              <button 
                onClick={handleBookDemo}
                className="group bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-3 shadow-lg"
              >
                <span>Book a Demo — See Hiree in Action</span>
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Animated underline accent */}
            <div 
              className={`mt-16 h-1 bg-blue-600 rounded-full transition-all duration-1200 delay-900 ${
                isVisible ? 'w-24 opacity-100' : 'w-0 opacity-0'
              }`}
            ></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className={`absolute bottom-8 left-8 transition-all duration-1000 delay-1200 ${
            isVisible ? 'translate-y-0 opacity-40' : 'translate-y-4 opacity-0'
          }`}
        >
          <div className="w-0.5 h-16 bg-blue-600 rounded-full animate-pulse"></div>
        </div>
      </section>

      {/* Demo Modal */}
      {showDemo && <DemoModal onClose={() => setShowDemo(false)} />}
    </>
  );
}