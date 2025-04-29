import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      titleKey: "how.step1.title",
      descriptionKey: "how.step1.desc",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      number: "02",
      titleKey: "how.step2.title",
      descriptionKey: "how.step2.desc",
      image: "https://images.pexels.com/photos/7047302/pexels-photo-7047302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      number: "03",
      titleKey: "how.step3.title",
      descriptionKey: "how.step3.desc",
      image: "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            {t('how.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('how.subtitle')}
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 md:gap-12 items-center`}
            >
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-block px-4 py-1 bg-blue-100 rounded-full text-blue-800 font-medium text-sm">
                  Step {step.number}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-900">{t(step.titleKey)}</h3>
                <p className="text-lg text-gray-600">{t(step.descriptionKey)}</p>
                {index === steps.length - 1 && (
                  <a 
                    href="#contact"
                    className="inline-flex items-center text-blue-900 font-medium hover:text-blue-700 transition-colors"
                  >
                    {t('how.getStarted')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                )}
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-purple-600 rounded-lg blur opacity-20"></div>
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={step.image}
                      alt={t(step.titleKey)}
                      className="w-full h-auto rounded-lg shadow-md object-cover"
                      style={{ aspectRatio: '16/9' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;