import React from 'react';
import { Zap, Layers, Clock, Shield, RefreshCw, BarChart3 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-900 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      titleKey: 'features.integration.title',
      descKey: 'features.integration.desc'
    },
    {
      icon: <Layers className="h-6 w-6" />,
      titleKey: 'features.builder.title',
      descKey: 'features.builder.desc'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      titleKey: 'features.time.title',
      descKey: 'features.time.desc'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      titleKey: 'features.secure.title',
      descKey: 'features.secure.desc'
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      titleKey: 'features.sync.title',
      descKey: 'features.sync.desc'
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      titleKey: 'features.analytics.title',
      descKey: 'features.analytics.desc'
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={t(feature.titleKey)}
              description={t(feature.descKey)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;