import React, { useState } from 'react';
import { Play, CheckCircle, AlertCircle } from 'lucide-react';

export default function TryItNow() {
  const [formData, setFormData] = useState({
    jobRole: '',
    candidateName: '',
    phoneNumber: '',
    customQuestions: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.jobRole.trim()) {
      newErrors.jobRole = 'Job role is required';
    }
    
    if (!formData.candidateName.trim()) {
      newErrors.candidateName = 'Candidate name is required';
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phoneNumber.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
        // Reset form
        setFormData({
          jobRole: '',
          candidateName: '',
          phoneNumber: '',
          customQuestions: ''
        });
      }, 5000);
    }, 3000);
  };

  if (showSuccess) {
    return (
      <section className="py-20 bg-white" id="try-it-now">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="max-w-2xl mx-auto">
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 animate-fadeInUp">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Screening Call Successfully Initiated!
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Our AI is now calling <strong>{formData.candidateName}</strong> for the <strong>{formData.jobRole}</strong> position.
                </p>
                <div className="bg-white rounded-lg p-4 border border-green-200 mb-6">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Phone:</strong> {formData.phoneNumber}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Expected completion:</strong> 2-3 minutes
                  </p>
                </div>
                <p className="text-green-700 font-medium">
                  Responses will be updated in your dashboard shortly.
                </p>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Screen Another Candidate
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white" id="try-it-now">
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
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400 focus:shadow-lg ${
                    errors.jobRole ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="e.g., Software Engineer"
                />
                {errors.jobRole && (
                  <div className="flex items-center mt-2 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.jobRole}
                  </div>
                )}
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
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400 focus:shadow-lg ${
                    errors.candidateName ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="e.g., Priya Sharma"
                />
                {errors.candidateName && (
                  <div className="flex items-center mt-2 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.candidateName}
                  </div>
                )}
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
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400 focus:shadow-lg ${
                    errors.phoneNumber ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="e.g., +91 9876543210"
                />
                {errors.phoneNumber && (
                  <div className="flex items-center mt-2 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.phoneNumber}
                  </div>
                )}
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400 focus:shadow-lg"
                  placeholder="Add any specific questions you'd like to ask..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Screening in progress...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
                    <span>Start Screening Now</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Preview */}
          <div className="bg-blue-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Preview Call Script Example:
            </h3>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-blue-400">
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