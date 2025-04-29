import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const TermsOfService: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">Terms of Service</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using Floonic's services, you agree to be bound by these Terms of Service
              and all applicable laws and regulations. If you do not agree with any of these terms, you
              are prohibited from using or accessing our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-4">2. Use License</h2>
            <p className="text-gray-600 mb-4">
              Subject to your compliance with these Terms, Floonic grants you a limited, non-exclusive,
              non-transferable, and revocable license to use our services for your business purposes.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>You must not modify or copy our software</li>
              <li>You must not use the service for illegal purposes</li>
              <li>You must not transmit any malicious code</li>
              <li>You must not attempt to gain unauthorized access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-4">3. Service Availability</h2>
            <p className="text-gray-600">
              We strive to provide uninterrupted service, but we do not guarantee that our services
              will be available at all times. We reserve the right to modify, suspend, or discontinue
              any part of our services at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-4">4. Payment Terms</h2>
            <p className="text-gray-600">
              Paid services are billed in advance on a subscription basis. You agree to pay all fees
              associated with your account. Failure to pay may result in service suspension or
              termination.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-600">
              Floonic shall not be liable for any indirect, incidental, special, consequential, or
              punitive damages resulting from your use or inability to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-4">6. Changes to Terms</h2>
            <p className="text-gray-600">
              We reserve the right to modify these terms at any time. We will notify users of any
              material changes via email or through our service.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;