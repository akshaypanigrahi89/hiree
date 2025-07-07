import React from 'react';
import { Clock, Target, Users, Settings, Phone } from 'lucide-react';

export default function WhyChooseHiree() {
  const benefits = [
    {
      icon: Clock,
      title: "Save Time on Follow-ups",
      description: "No more endless calls or chasing replies."
    },
    {
      icon: Target,
      title: "Get Accurate, Structured Data",
      description: "Key details captured and organized automatically."
    },
    {
      icon: Users,
      title: "Improve Candidate Experience",
      description: "Fast, professional outreach with a friendly AI voice."
    },
    {
      icon: Settings,
      title: "Customize Your Process",
      description: "Add your own questions for different roles or industries."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Why Choose Hiree?
          </h2>
          
          {/* Big centered Hiree logo */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-4 bg-white px-12 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                <Phone className="w-9 h-9 text-white" />
              </div>
              <span className="text-4xl font-bold text-blue-600">Hiree</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <benefit.icon className="w-6 h-6 text-blue-600 transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}