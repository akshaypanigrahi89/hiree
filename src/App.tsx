import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import TryItNow from './components/TryItNow';
import SignupForm from './components/SignupForm';
import DemoModal from './components/DemoModal';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [showSignup, setShowSignup] = useState(false);

  const handleSignupClick = () => {
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
      <Hero />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <FAQ />
      <TryItNow />
      <Footer />
      
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