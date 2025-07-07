import React, { useState } from 'react';
import { Play, CheckCircle, AlertCircle, Phone } from 'lucide-react';

export default function TryItNow() {
  const jobSuggestions = [
    'Sales Executive',
    'Software Developer',
    'Marketing Manager',
    'Customer Support Specialist',
    'HR Manager',
    'Product Manager',
    'Data Analyst',
    'Business Development Manager',
    'UX/UI Designer',
    'Operations Manager'
  ];

  const [formData, setFormData] = useState({
    jobRole: '',
    candidateName: '',
    phoneNumber: '',
    customQuestions: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [isCallInProgress, setIsCallInProgress] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Handle job role suggestions
    if (name === 'jobRole') {
      if (value.trim()) {
        const filtered = jobSuggestions.filter(job => 
          job.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredSuggestions(filtered);
        setShowSuggestions(true);
      } else {
        setShowSuggestions(false);
      }
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const selectSuggestion = (suggestion: string) => {
    setFormData(prev => ({
      ...prev,
      jobRole: suggestion
    }));
    setShowSuggestions(false);
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
    setIsCallInProgress(true);
    
    // Simulate actual recruiter agent call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setIsCallInProgress(false);
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

  // Generate dynamic preview based on form data
  const generatePreviewScript = () => {
    const candidateName = formData.candidateName || '[Candidate Name]';
    const jobRole = formData.jobRole || '[Job Role]';
    const hasCustomQuestions = formData.customQuestions.trim().length > 0;
    
    let script = `"Hi ${candidateName}, this is Hiree calling on behalf of [Company Name]. We have an exciting ${jobRole} opportunity. Are you currently open to new opportunities? Where are you currently located? Could you share your years of experience in ${jobRole}? What's your current and expected salary?`;
    
    if (hasCustomQuestions) {
      script += ` ${formData.customQuestions}`;
    }
    
    script += ` Thank you!"`;
    
    return script;
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
            Book a Demo
          </h2>
          <p className="text-lg text-gray-600">
            See Hiree in action with a personalized demo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="jobRole" className="block text-sm font-medium text-gray-700 mb-2">
                  Job Role
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="jobRole"
                    name="jobRole"
                    value={formData.jobRole}
                    onChange={handleInputChange}
                    onFocus={() => {
                      if (formData.jobRole.trim()) {
                        const filtered = jobSuggestions.filter(job => 
                          job.toLowerCase().includes(formData.jobRole.toLowerCase())
                        );
                        setFilteredSuggestions(filtered);
                        setShowSuggestions(true);
                      }
                    }}
                    onBlur={() => {
                      // Delay hiding suggestions to allow for clicks
                      setTimeout(() => setShowSuggestions(false), 200);
                    }}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400 focus:shadow-lg ${
                      errors.jobRole ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="e.g., Software Engineer"
                  />
                  
                  {/* Suggestions dropdown */}
                  {showSuggestions && filteredSuggestions.length > 0 && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                      {filteredSuggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => selectSuggestion(suggestion)}
                          className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
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
                  Additional Screening Questions
                </label>
                <p className="text-xs text-gray-500 mb-2">
                  Add specific questions you'd like our AI to ask during the screening call
                </p>
                <div className="relative">
                  <textarea
                    id="customQuestions"
                    name="customQuestions"
                    value={formData.customQuestions}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-400 focus:shadow-lg"
                    placeholder="e.g., Do you have experience with React? Are you willing to relocate? What's your notice period?"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group relative overflow-hidden"
              >
                {isSubmitting ? (
                  <>
                    <Phone className="w-5 h-5 animate-bounce" />
                    <span>Calling {formData.candidateName || 'candidate'}...</span>
                    <div className="absolute inset-0 bg-blue-700 opacity-20 animate-pulse"></div>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
                    <span>Start AI Screening Call</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Preview */}
          <div className="bg-blue-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-blue-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Live Preview - Call Script:
            </h3>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-blue-400 min-h-[120px]">
              <p className="text-gray-700 leading-relaxed italic">
                {generatePreviewScript()}
              </p>
            </div>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Expected Call Duration:</span>
                <span className="font-medium text-gray-900">2-3 minutes</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Questions Asked:</span>
                <span className="font-medium text-gray-900">
                  {4 + (formData.customQuestions.trim() ? 1 : 0)} questions
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Response Format:</span>
                <span className="font-medium text-gray-900">Structured data</span>
              </div>
              {isCallInProgress && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-600 font-medium flex items-center">
                    <Phone className="w-4 h-4 mr-2 animate-bounce" />
                    Call Status:
                  </span>
                  <span className="font-medium text-blue-600">In Progress...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}