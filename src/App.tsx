import React from 'react';
import VideoTitleSection from './components/VideoTitleSection';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import TryItNow from './components/TryItNow';
import Footer from './components/Footer';

function App() {

  return (
    <div className="min-h-screen bg-white">
      <VideoTitleSection />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <FAQ />
      <TryItNow />
      <Footer />
    </div>
  );
}

export default App;