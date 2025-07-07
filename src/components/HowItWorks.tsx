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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Four simple steps to transform your screening process
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}