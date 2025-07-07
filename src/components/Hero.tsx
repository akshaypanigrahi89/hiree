import React from 'react';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Automate Candidate Screening.<br />
                <span className="text-blue-600">Zero Manual Chasing.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Enter candidate details, let AI handle the rest — calls, screening questions, and updates, done in minutes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2">
                <span>Try For Free</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Get started in 2 minutes</span>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative animate-float">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full flex items-center justify-center animate-pulse">
                    <Phone className="w-6 h-6 text-blue-600 animate-bounce" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">AI Calling in Progress</h3>
                    <p className="text-sm text-gray-600">Candidate: Priya Sharma</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-3 border-l-4 border-blue-400">
                    <p className="text-sm text-gray-700">
                      "Hi Priya, this is Hiree calling on behalf of ABC Tech..."
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-lg p-3 border-l-4 border-green-400">
                    <p className="text-sm text-gray-700">
                      "Yes, I'm interested in new opportunities."
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Call Duration: 2:34</span>
                  <span className="text-green-600 flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping"></div>
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