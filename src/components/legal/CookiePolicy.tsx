import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const CookiePolicy: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">Cookie Policy</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-4">1. What Are Cookies</h2>
            <p className="text-gray-600">
              Cookies are small text files that are placed on your device when you visit our website.
              They help us provide you with a better experience by remembering your preferences,
              analyzing how you use our service, and helping with security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-4">2. Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">Essential Cookies</h3>
                <p className="text-gray-600">Required for the operation of our website and cannot be switched off.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Analytics Cookies</h3>
                <p className="text-gray-600">Help us understand how visitors interact with our website.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Functional Cookies</h3>
                <p className="text-gray-600">Remember your preferences and personalize your experience.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Marketing Cookies</h3>
                <p className="text-gray-600">Track your activity across websites to deliver targeted advertising.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-4">3. Managing Cookies</h2>
            <p className="text-gray-600 mb-4">
              You can control and/or delete cookies as you wish. You can delete all cookies that are
              already on your computer and you can set most browsers to prevent them from being placed.
            </p>
            <p className="text-gray-600">
              To modify your cookie settings, please visit your browser's preferences or settings page:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-2 space-y-2">
              <li>Chrome: Settings → Privacy and Security → Cookies</li>
              <li>Firefox: Options → Privacy & Security → Cookies</li>
              <li>Safari: Preferences → Privacy → Cookies</li>
              <li>Edge: Settings → Privacy & Security → Cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-4">4. Updates to This Policy</h2>
            <p className="text-gray-600">
              We may update this Cookie Policy from time to time. Any changes will be posted on this
              page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-4">5. Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about our Cookie Policy, please contact us at:
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

export default CookiePolicy;