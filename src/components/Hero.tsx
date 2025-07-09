import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Calendar, Play } from 'lucide-react';

interface HeroProps {
  onBookDemo: () => void;
}

export default function Hero({ onBookDemo }: HeroProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Stop Chasing.<br />
                Start Hiring Smarter.
              </h1>
              
              {/* Sub-header */}
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Screen 3x More Candidates in Half the Time <br> </br>— no hassle, just results.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBookDemo}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Demo</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-500" />
                <span>Get started in 2 minutes</span>
              </div>
            </div>
          </div>

          {/* Right side - Video */}
          <div className="relative">
            <div 
              className="relative bg-gray-900 rounded-xl overflow-hidden cursor-pointer group shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              onClick={handleVideoClick}
            >
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                {!isVideoPlaying ? (
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-30 transition-all duration-300">
                      <Play className="w-10 h-10 text-white ml-1" />
                    </div>
                    <p className="text-white text-lg font-medium">Watch Hiree in Action</p>
                    <p className="text-blue-100 text-sm mt-1">2 minute demo</p>
                  </div>
                ) : (
                  <div className="text-center text-white">
                    <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-lg">Loading demo video...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}