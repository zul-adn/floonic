import React from 'react';
import { Zap, Twitter, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-2xl font-bold">floonic</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.product')}</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">{t('footer.features')}</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">{t('footer.pricing')}</a></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.security')}</a></li> */}
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.integrations')}</a></li> */}
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.api')}</a></li> */}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.about')}</a></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.blog')}</a></li> */}
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.careers')}</a></li> */}
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">{t('footer.contact')}</a></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.partners')}</a></li> */}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Floonic. {t('footer.copyright')}
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t('footer.terms')}</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t('footer.cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;