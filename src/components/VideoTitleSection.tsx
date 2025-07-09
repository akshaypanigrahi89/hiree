import React, { useState, useEffect } from 'react';
import { Calendar, Phone, User, CheckCircle, FileSpreadsheet, ArrowRight, Play } from 'lucide-react';

export default function VideoTitleSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Animation sequence for the left side demo
  useEffect(() => {
    if (isVisible) {
      const animationTimer = setInterval(() => {
        setAnimationStep(prev => (prev + 1) % 4);
      }, 2000);

      return () => clearInterval(animationTimer);
    }
  }, [isVisible]);

  const menuItems = [
    'Meet Hiree',
    'About Us', 
    'Blog',
    'Contact Us'
  ];

  const handleBookDemo = () => {
    setShowDemo(true);
  };

  const animationSteps = [
    { icon: User, text: "Adding candidate details...", color: "bg-blue-500" },
    { icon: Phone, text: "Calling candidate...", color: "bg-green-500" },
    { icon: CheckCircle, text: "Collecting responses...", color: "bg-yellow-500" },
    { icon: FileSpreadsheet, text: "Updating database...", color: "bg-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Logo */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="cursor-pointer group">
              <img 
                src="/Hiree Logo copy copy.png" 
                alt="Hiree Logo" 
                className="h-16 w-auto transition-all duration-300 transform group-hover:scale-110 hover:drop-shadow-lg"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center justify-center space-x-8 flex-1">
              {menuItems.map((item, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105 transform font-medium"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Sign In button */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105 transform font-medium">
                Sign In
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="text-center mb-20">
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8 transition-all duration-1000 transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
            >
              Stop Chasing.<br />
              <span className="text-blue-600">Start Hiring Smarter.</span>
            </h1>
            
            <p 
              className={`text-xl md:text-2xl text-gray-600 leading-relaxed mb-10 transition-all duration-1000 transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ animationDelay: '200ms' }}
            >
              Screen 3x More Candidates in Half the Time — no hassle, just results.
            </p>

            {/* CTA Button */}
            <button 
              onClick={handleBookDemo}
              className={`bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group mx-auto ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ animationDelay: '400ms' }}
            >
              <Calendar className="w-5 h-5" />
              <span>Book a Demo</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* How It Works Demo Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Animation */}
            <div 
              className={`space-y-8 transition-all duration-1000 transform ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-12'
              }`}
              style={{ animationDelay: '600ms' }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Watch Hiree in Action
              </h3>

              {/* Animated Steps */}
              <div className="space-y-6">
                {animationSteps.map((step, index) => {
                  const StepIcon = step.icon;
                  const isActive = animationStep === index;
                  const isCompleted = animationStep > index;
                  
                  return (
                    <div 
                      key={index}
                      className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-500 ${
                        isActive 
                          ? 'bg-blue-50 border-2 border-blue-200 shadow-lg scale-105' 
                          : isCompleted 
                            ? 'bg-green-50 border-2 border-green-200' 
                            : 'bg-gray-50 border-2 border-gray-200'
                      }`}
                    >
                      <div 
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isActive 
                            ? `${step.color} animate-pulse` 
                            : isCompleted 
                              ? 'bg-green-500' 
                              : 'bg-gray-400'
                        }`}
                      >
                        <StepIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p 
                          className={`font-medium transition-colors duration-500 ${
                            isActive 
                              ? 'text-blue-700' 
                              : isCompleted 
                                ? 'text-green-700' 
                                : 'text-gray-600'
                          }`}
                        >
                          {step.text}
                        </p>
                        {isActive && (
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '70%' }}></div>
                          </div>
                        )}
                      </div>
                      {isCompleted && (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Real-time Data Display */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Live Candidate Data</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Name:</span>
                    <span className="font-medium">Priya Sharma</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experience:</span>
                    <span className="font-medium">5 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Availability:</span>
                    <span className="font-medium text-green-600">Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Interest Level:</span>
                    <span className="font-medium text-blue-600">High</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Video */}
            <div 
              className={`transition-all duration-1000 transform ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-12'
              }`}
              style={{ animationDelay: '800ms' }}
            >
              <div className="relative">
                <div 
                  className="relative bg-gray-900 rounded-xl overflow-hidden cursor-pointer group shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => setShowDemo(true)}
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-30 transition-all duration-300">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                      <p className="text-white text-lg font-medium">Watch Hiree in Action</p>
                      <p className="text-blue-100 text-sm mt-1">2 minute demo</p>
                    </div>
                  </div>
                </div>

                {/* Video Features */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Natural AI voice conversations</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Real-time data capture</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Automated follow-ups</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl transform transition-all duration-300 scale-100">
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Hiree Demo Video</h2>
                <p className="text-gray-600">See how Hiree transforms your recruitment process</p>
              </div>
              
              <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-lg">Loading demo video...</p>
                </div>
              </div>
              
              <button
                onClick={() => setShowDemo(false)}
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
    </div>
  );
}