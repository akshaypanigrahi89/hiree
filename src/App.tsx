import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseHiree from './components/WhyChooseHiree';
import TryItNow from './components/TryItNow';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HowItWorks />
      <WhyChooseHiree />
      <TryItNow />
    </div>
  );
}

export default App;