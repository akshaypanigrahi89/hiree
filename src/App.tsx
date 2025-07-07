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
  const [showDemo, setShowDemo] = useState(false);

  const handleBookDemo = () => {
    setShowDemo(true);
  };

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
      <Hero onBookDemo={handleBookDemo} />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <FAQ />
      <TryItNow />
      <Footer />
      
      {showDemo && <DemoModal onClose={() => setShowDemo(false)} />}
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