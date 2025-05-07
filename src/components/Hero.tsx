import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://blog.n8n.io/content/images/size/w1200/2024/10/ai-workflow-automationA--1-.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://blog.n8n.io/content/images/size/w1200/2023/05/building-api-6.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % slides.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  // };
  
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-white pt-24 pb-16 md:pt-56 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight text-center">
              {t('hero.title')} <span className="text-teal-600">{t('hero.subtitle')}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl text-center mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col items-center justify-center sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 transition-colors duration-200 shadow-md"
              >
                {t('hero.startFree')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-blue-900 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                {t('hero.seeHow')}
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <div className="flex -space-x-1">
                <img className="h-6 w-6 rounded-full ring-2 ring-white" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="User" />
                <img className="h-6 w-6 rounded-full ring-2 ring-white" src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="User" />
                <img className="h-6 w-6 rounded-full ring-2 ring-white" src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="User" />
              </div>
              <span>{t('hero.trusted')}</span>
            </div>
          </div>
          {/* <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-teal-600 rounded-lg blur opacity-20"></div>
            <div className="relative bg-white  rounded-lg shadow-xl overflow-hidden border border-gray-100">
              <div className="relative">
                <div className="w-full h-[400px] overflow-hidden rounded-md">
                  {slides.map((slide, index) => (
                    <img
                      key={index}
                      src={slide}
                      alt={`Slide ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                        index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-20 transition-all"
                >
                  <ChevronLeft className="w-5 h-5 text-blue-900" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-20 transition-all"
                >
                  <ChevronRight className="w-5 h-5 text-blue-900" />
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide ? 'bg-blue-900 w-4' : 'bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white to-transparent opacity-20"></div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;