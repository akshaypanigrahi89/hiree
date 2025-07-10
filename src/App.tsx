import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import TryItNow from './components/TryItNow';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import ChatbotIcon from './components/ChatbotIcon';

function App() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const handleBookDemo = () => {
    setShowDemoModal(true);
  };

  const handleCloseDemoModal = () => {
    setShowDemoModal(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero onBookDemo={handleBookDemo} />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <TryItNow />
      <FAQ />
      <Footer />
      
      {showDemoModal && (
        <DemoModal onClose={handleCloseDemoModal} />
      )}
      
      <ChatbotIcon />
    </div>
  );
}

export default App;