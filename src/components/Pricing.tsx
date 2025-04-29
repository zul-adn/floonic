import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PlanProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingPlan: React.FC<PlanProps> = ({ title, price, description, features, isPopular }) => {
  const { t } = useLanguage();
  
  return (
    <div className={`relative bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ${
      isPopular ? 'border-2 border-blue-900 scale-105 z-10' : 'border border-gray-100'
    }`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-blue-900 text-white text-xs font-bold uppercase py-1 px-3 rounded-bl-lg">
          {t('pricing.mostPopular')}
        </div>
      )}
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          {price !== t('pricing.custom') && <span className="text-gray-500"> {t('pricing.month')}</span>}
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-teal-600 mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className={`block w-full py-3 px-4 rounded-md text-center font-medium transition-colors ${
            isPopular
              ? 'bg-blue-900 text-white hover:bg-blue-800'
              : 'bg-gray-100 text-blue-900 hover:bg-gray-200'
          }`}
        >
          {t('pricing.getStarted')}
        </a>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const { t } = useLanguage();

  const plans = [
    {
      title: t('pricing.starter.title'),
      price: t('pricing.starter.price'),
      description: t('pricing.starter.desc'),
      features: [
        t('pricing.starter.feature1'),
        t('pricing.starter.feature2'),
        t('pricing.starter.feature3'),
        t('pricing.starter.feature4'),
        t('pricing.starter.feature5'),
        // t('pricing.starter.feature6')
      ]
    },
    {
      title: t('pricing.pro.title'),
      price: t('pricing.pro.price'),
      description: t('pricing.pro.desc'),
      features: [
        t('pricing.pro.feature1'),
        t('pricing.pro.feature2'),
        t('pricing.pro.feature3'),
        t('pricing.pro.feature4'),
        t('pricing.pro.feature5'),
        // t('pricing.pro.feature6'),
        // t('pricing.pro.feature7')
      ],
      isPopular: true
    },
    {
      title: t('pricing.enterprise.title'),
      price: t('pricing.enterprice.price'),
      description: t('pricing.enterprise.desc'),
      features: [
        t('pricing.enterprise.feature1'),
        t('pricing.enterprise.feature2'),
        t('pricing.enterprise.feature3'),
        t('pricing.enterprise.feature4'),
        t('pricing.enterprise.feature5'),
        // t('pricing.enterprise.feature6'),
        // t('pricing.enterprise.feature7'),
        // t('pricing.enterprise.feature8'),
        // t('pricing.enterprise.feature9'),
        // t('pricing.enterprise.feature10')
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingPlan
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
        
        <div className="text-center mt-12 text-gray-600">
          {t('pricing.custom')}{' '}
          <a href="#contact" className="text-blue-900 font-medium">
            {t('pricing.contact')}
          </a>{' '}
          {t('pricing.discuss')}
        </div>
      </div>
    </section>
  );
};

export default Pricing;