import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import BiasesSection from '../components/BiasesSection';
import PersonaCarousel from '../components/PersonaCarousel';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <BiasesSection />
      <PersonaCarousel />
    </div>
  );
};

export default Home;