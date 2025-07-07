import React from 'react';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Stop Chasing.<br />
                Start Hiring Smarter.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Just add candidate details — Hiree calls, screens, and updates — no hassle, just results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2">
                <span>Try For Free</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-500" />
                <span>Get started in 2 minutes</span>
              </div>
            </div>
          </div>

          {/* Right visual - smaller box */}
          <div className="relative animate-float">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center animate-pulse">
                    <Phone className="w-5 h-5 text-blue-600 animate-bounce" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">AI Calling in Progress</h3>
                    <p className="text-xs text-gray-600">Candidate: Priya Sharma</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="bg-blue-50 rounded-lg p-2 border-l-4 border-blue-400">
                    <p className="text-xs text-gray-700">
                      "Hi Priya, this is Hiree calling on behalf of ABC Tech..."
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 border-l-4 border-gray-400">
                    <p className="text-xs text-gray-700">
                      "Yes, I'm interested in new opportunities."
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">Call Duration: 2:34</span>
                  <span className="text-blue-600 flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-ping"></div>
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}