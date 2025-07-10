import React from 'react';
import { Clock, Users, Zap, Target } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Save Time on Repetitive Tasks",
      description: "Automate candidate screening calls and eliminate manual follow-ups."
    },
    {
      icon: Users,
      title: "Improve Candidate Experience",
      description: "Provide fast, professional outreach with consistent communication."
    },
    {
      icon: Zap,
      title: "Increase Hiring Speed & Efficiency",
      description: "Screen more candidates in less time with instant data collection."
    },
    {
      icon: Target,
      title: "Get Accurate, Structured Data",
      description: "Key details captured and organized automatically for better decisions."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefits
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <benefit.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}