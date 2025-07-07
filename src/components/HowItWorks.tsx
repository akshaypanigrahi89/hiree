import React from 'react';
import { UserPlus, Phone, MessageSquare, FileSpreadsheet } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: "Input Candidate Details",
      description: "Add candidate information in seconds — name, phone number, role, and more."
    },
    {
      icon: Phone,
      title: "Hiree Makes the Call",
      description: "AI calls the candidate with a natural, human-like voice."
    },
    {
      icon: MessageSquare,
      title: "Ask Smart, Customized Questions",
      description: "Check availability, confirm interest, verify key details — fully automated."
    },
    {
      icon: FileSpreadsheet,
      title: "Get Auto-Updated Sheets",
      description: "All responses are neatly updated in your sheet — no manual data entry."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Step indicator line */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4 text-sm font-medium text-gray-400">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-3 py-1 rounded-full">Step 1</span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400"></div>
            <span className="bg-gradient-to-r from-teal-600 to-green-600 text-white px-3 py-1 rounded-full">Step 2</span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-teal-400 to-green-400"></div>
            <span className="bg-gradient-to-r from-green-600 to-yellow-600 text-white px-3 py-1 rounded-full">Step 3</span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-green-400 to-yellow-400"></div>
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-3 py-1 rounded-full">Step 4</span>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Four simple steps to transform your screening process
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="text-center space-y-4 transform transition-all duration-300 hover:scale-105">
                <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg ${
                  index === 0 ? 'bg-gradient-to-r from-blue-100 to-teal-100' :
                  index === 1 ? 'bg-gradient-to-r from-teal-100 to-green-100' :
                  index === 2 ? 'bg-gradient-to-r from-green-100 to-yellow-100' :
                  'bg-gradient-to-r from-yellow-100 to-orange-100'
                }`}>
                  <step.icon className={`w-8 h-8 transition-colors duration-300 ${
                    index === 0 ? 'text-blue-600 group-hover:text-teal-600' :
                    index === 1 ? 'text-teal-600 group-hover:text-green-600' :
                    index === 2 ? 'text-green-600 group-hover:text-yellow-600' :
                    'text-yellow-600 group-hover:text-orange-600'
                  }`} />
                </div>
                <div className={`absolute -top-2 -right-2 w-8 h-8 text-white rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  index === 0 ? 'bg-gradient-to-r from-blue-600 to-teal-600' :
                  index === 1 ? 'bg-gradient-to-r from-teal-600 to-green-600' :
                  index === 2 ? 'bg-gradient-to-r from-green-600 to-yellow-600' :
                  'bg-gradient-to-r from-yellow-600 to-orange-600'
                }`}>
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className={`hidden lg:block absolute top-8 -right-4 w-8 h-0.5 ${
                  index === 0 ? 'bg-gradient-to-r from-blue-400 to-teal-400' :
                  index === 1 ? 'bg-gradient-to-r from-teal-400 to-green-400' :
                  'bg-gradient-to-r from-green-400 to-yellow-400'
                }`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Decorative step indicator line at bottom */}
        <div className="flex items-center justify-center mt-16">
          <div className="flex items-center space-x-4 text-sm font-medium text-gray-300">
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 text-white px-3 py-1 rounded-full opacity-60">Step 1</span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-300 to-teal-300"></div>
            <span className="bg-gradient-to-r from-teal-400 to-green-400 text-white px-3 py-1 rounded-full opacity-60">Step 2</span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-teal-300 to-green-300"></div>
            <span className="bg-gradient-to-r from-green-400 to-yellow-400 text-white px-3 py-1 rounded-full opacity-60">Step 3</span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-green-300 to-yellow-300"></div>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full opacity-60">Step 4</span>
          </div>
        </div>
      </div>
    </section>
  );
}