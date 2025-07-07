import React, { useState } from 'react';
import { Play } from 'lucide-react';

export default function TryItNow() {
  const [formData, setFormData] = useState({
    jobRole: '',
    candidateName: '',
    phoneNumber: '',
    customQuestions: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Try It Now
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="jobRole" className="block text-sm font-medium text-gray-700 mb-2">
                  Job Role
                </label>
                <input
                  type="text"
                  id="jobRole"
                  name="jobRole"
                  value={formData.jobRole}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="e.g., Software Engineer"
                />
              </div>

              <div>
                <label htmlFor="candidateName" className="block text-sm font-medium text-gray-700 mb-2">
                  Candidate Name
                </label>
                <input
                  type="text"
                  id="candidateName"
                  name="candidateName"
                  value={formData.candidateName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="e.g., Priya Sharma"
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="e.g., +91 9876543210"
                />
              </div>

              <div>
                <label htmlFor="customQuestions" className="block text-sm font-medium text-gray-700 mb-2">
                  Custom Questions
                </label>
                <textarea
                  id="customQuestions"
                  name="customQuestions"
                  value={formData.customQuestions}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Add any specific questions you'd like to ask..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Start Screening Now</span>
              </button>
            </form>
          </div>

          {/* Preview */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Preview Call Script Example:
            </h3>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed italic">
                "Hi Priya, this is Hiree calling on behalf of ABC Tech. Are you currently open to new opportunities? Where are you currently located? Could you share your years of experience? What's your current and expected salary? Thank you!"
              </p>
            </div>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Expected Call Duration:</span>
                <span className="font-medium text-gray-900">2-3 minutes</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Questions Asked:</span>
                <span className="font-medium text-gray-900">5-7 questions</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Response Format:</span>
                <span className="font-medium text-gray-900">Structured data</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}