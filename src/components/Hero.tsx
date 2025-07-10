import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Calendar, UserPlus } from 'lucide-react';

interface HeroProps {
  onBookDemo: () => void;
}

export default function Hero({ onBookDemo }: HeroProps) {
  const [showSignup, setShowSignup] = useState(false);

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-blue-600/90 to-blue-800/90 relative">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
              <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-white rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
              <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8 animate-fadeInUp">
                How Hiree Works —<br />
                <span className="text-blue-200">Your Smart Recruiter Assistant</span>
              </h1>
              
              {/* Supporting Subheadline */}
              <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 leading-relaxed mb-12 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                Stop chasing. Start hiring smarter.<br />
                Screen 3x more candidates in half the time — no hassle, just results.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
                <button 
                  onClick={handleSignupClick}
                  className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 group"
                >
                  <UserPlus className="w-5 h-5" />
                  <span>Sign Up</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                
                <button 
                  onClick={onBookDemo}
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 group"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book a Demo</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 mt-12 text-blue-100 animate-fadeInUp" style={{ animationDelay: '600ms' }}>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-200" />
                  <span>Get started in 2 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-200" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Signup Modal */}
      {showSignup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 scale-100 animate-fadeInUp">
            <div className="p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <UserPlus className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Get Started with Hiree</h2>
                <p className="text-gray-600 mt-2">Join thousands of recruiters who trust Hiree</p>
              </div>

              {/* Form */}
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400 focus:shadow-lg"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400 focus:shadow-lg"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400 focus:shadow-lg"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400 focus:shadow-lg"
                    placeholder="Tell us about your hiring needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center space-x-2"
                >
                  <UserPlus className="w-5 h-5" />
                  <span>Create Account</span>
                </button>
              </form>

              {/* Footer */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                    Sign in
                  </button>
                </p>
              </div>

              {/* Close button */}
              <button
                onClick={() => setShowSignup(false)}
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
    </>
  );
}