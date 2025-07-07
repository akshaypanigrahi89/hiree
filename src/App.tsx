import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseHiree from './components/WhyChooseHiree';
import TryItNow from './components/TryItNow';
import SignupForm from './components/SignupForm';
import { useState } from 'react';

function App() {
  const [showSignup, setShowSignup] = useState(false);

  const handleTryForFree = () => {
    setShowSignup(true);
  };

  const handleSignupSuccess = () => {
    // Scroll to Try It Now section
    const tryItNowSection = document.getElementById('try-it-now');
    if (tryItNowSection) {
      tryItNowSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero onTryForFree={handleTryForFree} />
      <HowItWorks />
      <WhyChooseHiree />
      <TryItNow />
      
      {showSignup && (
        <SignupForm 
          onClose={() => setShowSignup(false)} 
          onSuccess={handleSignupSuccess}
        />
      )}
    </div>
  );
}

export default App;