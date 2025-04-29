import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitch from './LanguageSwitch';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <Zap className="h-8 w-8 text-blue-900" />
              <span className="ml-2 text-2xl font-bold text-blue-900">floonic</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              {t('nav.features')}
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              {t('nav.howItWorks')}
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              {t('nav.pricing')}
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              {t('nav.testimonials')}
            </a>
            <LanguageSwitch />
            <a href="#contact" className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">
              {t('nav.getStarted')}
            </a>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#features" className="block px-3 py-2 text-gray-700 font-medium hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>
            {t('nav.features')}
          </a>
          <a href="#how-it-works" className="block px-3 py-2 text-gray-700 font-medium hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>
            {t('nav.howItWorks')}
          </a>
          <a href="#pricing" className="block px-3 py-2 text-gray-700 font-medium hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>
            {t('nav.pricing')}
          </a>
          <a href="#testimonials" className="block px-3 py-2 text-gray-700 font-medium hover:bg-gray-50 rounded-md" onClick={() => setIsOpen(false)}>
            {t('nav.testimonials')}
          </a>
          <div className="px-3 py-2">
            <LanguageSwitch />
          </div>
          <a href="#contact" className="block px-3 py-2 bg-blue-900 text-white font-medium rounded-md" onClick={() => setIsOpen(false)}>
            {t('nav.getStarted')}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;