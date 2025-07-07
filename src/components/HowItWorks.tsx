import React from 'react';
import { UserPlus, Phone, MessageSquare, FileSpreadsheet, ArrowRight, Zap } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      step: "01",
      title: "Input Candidate Details",
      description: "Add candidate information in seconds — name, phone number, role, and more."
    },
    {
      icon: Phone,
      step: "02",
      title: "Hiree Makes the Call",
      description: "Hiree calls the candidate with a natural, human-like voice."
    },
    {
      icon: MessageSquare,
      step: "03",
      title: "Ask Smart, Customized Questions",
      description: "Check availability, confirm interest, verify key details — fully automated."
    },
    {
      icon: FileSpreadsheet,
      step: "04",
      title: "Get Auto-Updated Sheets",
      description: "All responses are neatly updated in your sheet — no manual data entry."
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-200 rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            <span>How It Works</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Four simple steps to transform your screening process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From candidate input to completed screening in minutes, not hours
          </p>
        </div>

        {/* Desktop view - horizontal flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step card */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border-2 border-blue-100 hover:border-blue-300 relative z-10">
                    {/* Step number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg border-2 border-white">
                        {step.step}
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:from-blue-200 hover:to-blue-300 shadow-md">
                      <step.icon className="w-10 h-10 text-blue-700" />
                    </div>
                    
                    {/* Content */}
                    <div className="text-center space-y-3">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg flex items-center justify-center border-2 border-white">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet view - vertical flow */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-start space-x-4">
                {/* Step indicator */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg border-2 border-white">
                    {step.step}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                      <step.icon className="w-7 h-7 text-blue-700" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Connecting line for mobile */}
              {index < steps.length - 1 && (
                <div className="w-0.5 h-8 bg-blue-200 ml-6 mt-4"></div>
              )}
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <button 
            onClick={() => {
              const tryItNowSection = document.getElementById('try-it-now');
              if (tryItNowSection) {
                tryItNowSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 cursor-pointer group shadow-lg"
          >
            <span className="font-medium">Ready to get started?</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}