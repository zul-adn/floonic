import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const PrivacyPolicy: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Payment information</li>
              <li>Usage data and preferences</li>
              <li>Communication history</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Process your transactions</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about products, services, and events</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-4">3. Information Sharing</h2>
            <p className="text-gray-600">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Service providers and business partners</li>
              <li>Legal authorities when required by law</li>
              <li>Other parties with your consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-4">4. Your Rights and Choices</h2>
            <p className="text-gray-600">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-4">5. Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@floonic.com
              <br />
              Address: 123 Automation Street, Tech City, TC 12345
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;