import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function ChatbotIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Here you would typically send the message to your chatbot service
      console.log('Message sent:', message);
      setMessage('');
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col animate-fadeInUp">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold">Hiree Assistant</h3>
                <p className="text-xs text-blue-100">Online now</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-blue-100 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {/* Welcome Message */}
              <div className="flex items-start space-x-2">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-3 h-3 text-white" />
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm max-w-xs">
                  <p className="text-sm text-gray-700">
                    Hi! I'm here to help you learn more about Hiree. How can I assist you today?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200">
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center group"
      >
        {isOpen ? (
          <X className="w-6 h-6 transition-transform group-hover:rotate-90" />
        ) : (
          <MessageCircle className="w-6 h-6 transition-transform group-hover:scale-110" />
        )}
      </button>
    </>
  );
}