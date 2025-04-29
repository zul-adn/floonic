import React, { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import TermsOfService from './components/legal/TermsOfService';
import CookiePolicy from './components/legal/CookiePolicy';

function App() {
  useEffect(() => {
    document.title = 'Floonic | Workflow Automation Platform';
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  // Get the current path
  const path = window.location.pathname;

  // Render different content based on the path
  const renderContent = () => {
    switch (path) {
      case '/privacy':
        return <PrivacyPolicy />;
      case '/terms':
        return <TermsOfService />;
      case '/cookies':
        return <CookiePolicy />;
      default:
        return (
          <>
            <Hero />
            <Features />
            <HowItWorks />
            <Pricing />
            <Testimonials />
            <Contact />
          </>
        );
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        {renderContent()}
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;