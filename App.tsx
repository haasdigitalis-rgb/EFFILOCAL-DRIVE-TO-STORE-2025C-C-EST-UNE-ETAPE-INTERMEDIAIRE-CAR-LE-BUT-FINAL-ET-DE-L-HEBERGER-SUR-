 import React from 'react';
import Navbar from './composants/Navbar';
import Hero from './composants/Hero';
import Stats from './composants/Stats';
import TrustSection from './composants/TrustSection';
import AISection from './composants/AISection';
import MagicCombo from './composants/MagicCombo';
import AuditSection from './composants/AuditSection';
import Services from './composants/Services';
import WhiteLabel from './composants/WhiteLabel';
import Reporting from './composants/Reporting';
import Contact from './composants/Contact';
import Footer from './composants/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-sans transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <TrustSection />
        <AISection />
        <MagicCombo />
        <AuditSection />
        <Services />
        <WhiteLabel />
        <Reporting />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
