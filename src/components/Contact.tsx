import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('contact.subtitle')}
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-teal-600">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">{t('contact.benefits.trial')}</h3>
                  <p className="mt-1 text-gray-600">{t('contact.benefits.trialDesc')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-teal-600">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">{t('contact.benefits.onboarding')}</h3>
                  <p className="mt-1 text-gray-600">{t('contact.benefits.onboardingDesc')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-teal-600">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">{t('contact.benefits.cancel')}</h3>
                  <p className="mt-1 text-gray-600">{t('contact.benefits.cancelDesc')}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            {formSubmitted ? (
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                <CheckCircle className="h-16 w-16 text-teal-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('contact.success.title')}</h3>
                <p className="text-gray-600">
                  {t('contact.success.message')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-900 focus:border-blue-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-900 focus:border-blue-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.form.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-900 focus:border-blue-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-900 focus:border-blue-900"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-blue-900 text-white font-medium rounded-md hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                  >
                    {t('contact.form.submit')}
                  </button>
                </div>
                <div className="mt-4 text-sm text-gray-500 text-center">
                  {t('contact.form.privacy')}{' '}
                  <a href="#" className="text-blue-900 hover:underline">{t('contact.form.privacyLink')}</a>.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;