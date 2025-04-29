import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.howItWorks': 'How It Works',
    'nav.pricing': 'Pricing',
    'nav.testimonials': 'Testimonials',
    'nav.getStarted': 'Get Started',

    // Hero
    'hero.title': 'Automate workflows without code',
    'hero.subtitle': 'Floonic helps you connect your tools and automate your business',
    'hero.startFree': 'Start for free',
    'hero.seeHow': 'See how it works',
    'hero.trusted': 'Trusted by 2,500+ companies',

    // Features
    'features.title': 'Powerful Automation Features',
    'features.subtitle': 'Floonic combines powerful automation capabilities with an intuitive interface, making it easy to create workflows that save time and reduce errors.',
    'features.integration.title': 'Easy Integration',
    'features.integration.desc': 'Connect to 200+ apps and services without writing a single line of code.',
    'features.builder.title': 'Visual Builder',
    'features.builder.desc': 'Create complex automation workflows with our intuitive drag-and-drop interface.',
    'features.time.title': 'Time Saving',
    'features.time.desc': 'Reduce manual work by up to 80% with smart, automated workflows.',
    'features.secure.title': 'Secure & Reliable',
    'features.secure.desc': 'Enterprise-grade security with 99.9% uptime guarantee for all your workflows.',
    'features.sync.title': 'Real-time Syncing',
    'features.sync.desc': 'Keep your data in sync across all your tools and platforms automatically.',
    'features.analytics.title': 'Performance Analytics',
    'features.analytics.desc': 'Monitor the health and performance of your automation workflows.',

    // How It Works
    'how.title': 'How Floonic Works',
    'how.subtitle': 'Get started with Floonic in just three simple steps and transform how your business operates.',
    'how.step1.title': 'Connect your tools',
    'how.step1.desc': 'Integrate with your favorite apps and services with just a few clicks. No coding required.',
    'how.step2.title': 'Build your workflow',
    'how.step2.desc': 'Use our visual editor to create automation workflows by connecting triggers and actions.',
    'how.step3.title': 'Activate and monitor',
    'how.step3.desc': 'Turn on your workflow and watch as Floonic handles repetitive tasks automatically.',
    'how.getStarted': 'Get started today',

    // Pricing
    'pricing.title': 'Simple, Transparent Pricing',
    'pricing.subtitle': "Choose the plan that's right for your business. All plans include a 14-day free trial.",
    'pricing.starter.title': 'Starter',
    'pricing.pro.title': 'Premium',
    'pricing.enterprise.title': 'Business',
    'pricing.custom': 'Need a custom solution?',
    'pricing.contact': 'Contact us',
    'pricing.discuss': 'to discuss your specific requirements.',
    'pricing.mostPopular': 'Most Popular',
    'pricing.getStarted': 'Get Started',
    'pricing.starter.desc': 'Perfect for small teams just getting started with automation.',
    'pricing.starter.feature1': '1 automation active',
    'pricing.starter.feature2': '100 operations per month',
    'pricing.starter.feature3': '1 integration active',
    'pricing.starter.feature4': 'Workflow setup support',
    'pricing.starter.feature5': 'Whatsapp/Email support',
    'pricing.pro.desc': 'For growing teams that need more power and flexibility.',
    'pricing.pro.feature1': 'Upto 3 active automations',
    'pricing.pro.feature2': '1.000 operations per month',
    'pricing.pro.feature3': '3 active integrations',
    'pricing.pro.feature4': 'Workflow setup support',
    'pricing.pro.feature5': 'Whatsapp/Email support',
    // 'pricing.pro.feature6': 'API access',
    // 'pricing.pro.feature7': 'Team collaboration',
    'pricing.enterprise.desc': 'Custom solutions for large organizations.',
    'pricing.enterprise.feature1': 'Upto 5 active automations',
    'pricing.enterprise.feature2': '10.000 operations per month',
    'pricing.enterprise.feature3': '3 active integrations',
    'pricing.enterprise.feature4': 'Workflow setup support',
    'pricing.enterprise.feature5': 'Whatsapp/Email support',
    // 'pricing.enterprise.feature6': 'Full API access',
    // 'pricing.enterprise.feature7': 'Advanced team management',
    // 'pricing.enterprise.feature8': 'Custom development',
    // 'pricing.enterprise.feature9': 'SLA guarantee',
    'pricing.enterprise.feature10': 'Dedicated success manager',
    'pricing.starter.price' : '$10',
    'pricing.pro.price' : '$23',
    'pricing.enterprice.price' : '$35',
    'pricing.month' : '/month',


    // Contact
    'contact.title': 'Ready to Transform Your Workflow?',
    'contact.subtitle': 'Get in touch with us today and discover how Floonic can streamline your business processes.',
    'contact.benefits.trial': 'Free 14-day trial',
    'contact.benefits.trialDesc': 'Try all features risk-free with no credit card required.',
    'contact.benefits.onboarding': 'Personalized onboarding',
    'contact.benefits.onboardingDesc': 'Get help setting up your first automation workflows.',
    'contact.benefits.cancel': 'Cancel anytime',
    'contact.benefits.cancelDesc': 'No long-term contracts or commitments required.',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.company': 'Company Name',
    'contact.form.message': 'How can we help?',
    'contact.form.submit': 'Get Started',
    'contact.form.privacy': 'By submitting this form, you agree to our',
    'contact.form.privacyLink': 'Privacy Policy',
    'contact.success.title': 'Thank you!',
    'contact.success.message': "We've received your message and will be in touch soon. In the meantime, check your inbox for more information about getting started with Floonic.",

    // Footer
    'footer.description': 'Powerful workflow automation for businesses of all sizes. Connect your tools, automate your work, and focus on what matters.',
    'footer.product': 'Product',
    'footer.company': 'Company',
    'footer.features': 'Features',
    'footer.pricing': 'Pricing',
    'footer.security': 'Security',
    'footer.integrations': 'Integrations',
    'footer.api': 'API',
    'footer.about': 'About Us',
    'footer.blog': 'Blog',
    'footer.careers': 'Careers',
    'footer.contact': 'Contact',
    'footer.partners': 'Partners',
    'footer.copyright': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',

    // Testimonials
    'testimonials.title': 'What Our Customers Say',
    'testimonials.subtitle': 'Thousands of businesses use Floonic to streamline their operations and save time. Here\'s what some of them have to say.',
    'testimonials.quote1': 'Floonic has transformed our business processes. We\'ve automated our entire customer onboarding workflow, saving hours of manual work every day.',
    'testimonials.author1': 'Sarah Johnson',
    'testimonials.role1': 'Operations Director',
    'testimonials.company1': 'TechNova',
    'testimonials.quote2': 'The visual workflow builder is incredibly intuitive. Within days, our marketing team was able to create complex automation workflows without any developer help.',
    'testimonials.author2': 'Mark Davis',
    'testimonials.role2': 'Marketing Manager',
    'testimonials.company2': 'GrowthBox',
    'testimonials.quote3': 'We\'ve tried several automation platforms, but none matched Floonic\'s ease of use and flexibility. The ROI has been incredible for our e-commerce business.',
    'testimonials.author3': 'Jennifer Lee',
    'testimonials.role3': 'E-commerce Director',
    'testimonials.company3': 'Urban Retail',
  },
  id: {
    // Navigation
    'nav.features': 'Fitur',
    'nav.howItWorks': 'Cara Kerja',
    'nav.pricing': 'Harga',
    'nav.testimonials': 'Testimoni',
    'nav.getStarted': 'Mulai',

    // Hero
    'hero.title': 'Otomatisasi alur kerja tanpa kode',
    'hero.subtitle': 'Floonic membantu mengoptimasi dan automasi bisnis Anda',
    'hero.startFree': 'Mulai gratis',
    'hero.seeHow': 'Lihat cara kerjanya',
    'hero.trusted': 'Dipercaya oleh 2.500+ perusahaan',

    // Features
    'features.title': 'Fitur Otomatisasi yang Kuat',
    'features.subtitle': 'Floonic menggabungkan kemampuan otomatisasi yang kuat dengan antarmuka yang intuitif, memudahkan pembuatan alur kerja yang menghemat waktu dan mengurangi kesalahan.',
    'features.integration.title': 'Integrasi Mudah',
    'features.integration.desc': 'Hubungkan ke 200+ aplikasi dan layanan tanpa menulis kode.',
    'features.builder.title': 'Pembuat Visual',
    'features.builder.desc': 'Buat alur kerja otomatisasi kompleks dengan antarmuka drag-and-drop yang intuitif.',
    'features.time.title': 'Hemat Waktu',
    'features.time.desc': 'Kurangi pekerjaan manual hingga 80% dengan alur kerja otomatis yang cerdas.',
    'features.secure.title': 'Aman & Andal',
    'features.secure.desc': 'Keamanan tingkat enterprise dengan jaminan uptime 99,9% untuk semua alur kerja Anda.',
    'features.sync.title': 'Sinkronisasi Real-time',
    'features.sync.desc': 'Jaga data Anda tetap sinkron di semua alat dan platform secara otomatis.',
    'features.analytics.title': 'Analitik Kinerja',
    'features.analytics.desc': 'Pantau kesehatan dan kinerja alur kerja otomatisasi Anda.',

    // How It Works
    'how.title': 'Cara Kerja Floonic',
    'how.subtitle': 'Mulai dengan Floonic hanya dalam tiga langkah sederhana dan transformasikan cara bisnis Anda beroperasi.',
    'how.step1.title': 'Hubungkan alat Anda',
    'how.step1.desc': 'Integrasikan dengan aplikasi dan layanan favorit Anda hanya dengan beberapa klik. Tanpa coding.',
    'how.step2.title': 'Bangun alur kerja Anda',
    'how.step2.desc': 'Gunakan editor visual kami untuk membuat alur kerja otomatisasi dengan menghubungkan pemicu dan tindakan.',
    'how.step3.title': 'Aktifkan dan pantau',
    'how.step3.desc': 'Nyalakan alur kerja Anda dan lihat bagaimana Floonic menangani tugas berulang secara otomatis.',
    'how.getStarted': 'Mulai hari ini',

    // Pricing
    'pricing.title': 'Harga Sederhana dan Transparan',
    'pricing.subtitle': 'Pilih paket yang tepat untuk bisnis Anda. Semua paket termasuk uji coba gratis 14 hari.',
    'pricing.starter.title': 'Starter', 
    'pricing.pro.title': 'Premium',
    'pricing.enterprise.title': 'Bisnis',
    'pricing.custom': 'Butuh solusi khusus?',
    'pricing.contact': 'Hubungi kami',
    'pricing.discuss': 'untuk mendiskusikan kebutuhan spesifik Anda.',
    'pricing.mostPopular': 'Paling Populer',
    'pricing.getStarted': 'Mulai Sekarang',
    'pricing.starter.desc': 'Sempurna untuk tim kecil yang mencoba memulai dengan otomatisasi.',
    'pricing.starter.feature1': '1 automasi aktif',
    'pricing.starter.feature2': '100 operasi per bulan',
    'pricing.starter.feature3': '1 integrasi ( pilih satu: wahtasapp, Email, Google Form, dll )',
    'pricing.starter.feature4': 'Dukungan Setup Workflow',
    'pricing.starter.feature5': 'Dukungan Whatsapp/Email',
    // 'pricing.starter.feature4': 'Dukungan email',
    // 'pricing.starter.feature5': 'Analitik dasar',
    // 'pricing.starter.feature6': 'Akses komunitas',
    'pricing.pro.desc': 'UMKM, Toko Kecil, atau Tim yang sedang berkembang.',
    'pricing.pro.feature1': 'Hingga 3 automasi aktif',
    'pricing.pro.feature2': '1.000 operasi per bulan',
    'pricing.pro.feature3': '3 integrasi bebas ( misalnya: WhatsApp + Email + Google Sheets )',
    'pricing.pro.feature4': 'Dukungan Setup Workflow',
    'pricing.pro.feature5': 'Dukungan via Whtasapp/Email',
    // 'pricing.pro.feature5': 'Analitik lanjutan',
    // 'pricing.pro.feature6': 'Akses API',
    // 'pricing.pro.feature7': 'Kolaborasi tim',
    'pricing.enterprise.desc': 'Tim besar, perusahaan, atau organisasi yang membutuhkan lebih banyak kekuatan dan fleksibilitas.',
    'pricing.enterprise.feature1': 'Hingga 5 automasi aktif',
    'pricing.enterprise.feature2': '10.000 operasi per bulan',
    'pricing.enterprise.feature3': '3 integrasi bebas ( misalnya: WhatsApp + Email + Google Sheets )',
    'pricing.enterprise.feature4': 'Dukungan Setup Workflow',
    'pricing.enterprise.feature5': 'Dukungan via Whtasapp/Email',
    // 'pricing.enterprise.feature6': 'Akses API penuh',
    // 'pricing.enterprise.feature7': 'Manajemen tim lanjutan',
    // 'pricing.enterprise.feature8': 'Pengembangan kustom',
    // 'pricing.enterprise.feature9': 'Jaminan SLA',
    // 'pricing.enterprise.feature10': 'Manajer sukses dedicated',
    'pricing.starter.price' : 'Rp 120.000', // $15
    'pricing.pro.price' : 'Rp 300.000', // $25
    'pricing.enterprice.price' : 'Rp 450.000', // $80
    'pricing.month' : '/bulan',

    // Contact
    'contact.title': 'Siap Mengubah Alur Kerja Anda?',
    'contact.subtitle': 'Hubungi kami hari ini dan temukan bagaimana Floonic dapat mengefisienkan proses bisnis Anda.',
    'contact.benefits.trial': 'Uji coba gratis 14 hari',
    'contact.benefits.trialDesc': 'Coba semua fitur tanpa risiko, tanpa kartu kredit.',
    'contact.benefits.onboarding': 'Onboarding personal',
    'contact.benefits.onboardingDesc': 'Dapatkan bantuan menyiapkan alur kerja otomatisasi pertama Anda.',
    'contact.benefits.cancel': 'Batalkan kapan saja',
    'contact.benefits.cancelDesc': 'Tanpa kontrak jangka panjang atau komitmen yang diperlukan.',
    'contact.form.name': 'Nama Lengkap',
    'contact.form.email': 'Alamat Email',
    'contact.form.company': 'Nama Perusahaan',
    'contact.form.message': 'Bagaimana kami dapat membantu?',
    'contact.form.submit': 'Mulai Sekarang',
    'contact.form.privacy': 'Dengan mengirimkan formulir ini, Anda menyetujui',
    'contact.form.privacyLink': 'Kebijakan Privasi',
    'contact.success.title': 'Terima kasih!',
    'contact.success.message': 'Kami telah menerima pesan Anda dan akan segera menghubungi Anda. Sementara itu, periksa kotak masuk Anda untuk informasi lebih lanjut tentang memulai dengan Floonic.',

    // Footer
    'footer.description': 'Otomatisasi alur kerja yang kuat untuk bisnis dari semua ukuran. Hubungkan alat Anda, otomatiskan pekerjaan Anda, dan fokus pada yang penting.',
    'footer.product': 'Produk',
    'footer.company': 'Perusahaan',
    'footer.features': 'Fitur',
    'footer.pricing': 'Harga',
    'footer.security': 'Keamanan',
    'footer.integrations': 'Integrasi',
    'footer.api': 'API',
    'footer.about': 'Tentang Kami',
    'footer.blog': 'Blog',
    'footer.careers': 'Karir',
    'footer.contact': 'Kontak',
    'footer.partners': 'Mitra',
    'footer.copyright': 'Hak cipta dilindungi.',
    'footer.privacy': 'Kebijakan Privasi',
    'footer.terms': 'Ketentuan Layanan',
    'footer.cookies': 'Kebijakan Cookie',

    // Testimonials
    'testimonials.title': 'Apa Kata Pelanggan Kami',
    'testimonials.subtitle': 'Ribuan bisnis menggunakan Floonic untuk mengefisienkan operasi mereka dan menghemat waktu. Ini yang mereka katakan.',
    'testimonials.quote1': 'Floonic telah mengubah proses bisnis kami. Kami telah mengotomatiskan seluruh alur kerja onboarding pelanggan, menghemat berjam-jam kerja manual setiap hari.',
    'testimonials.author1': 'Sarah Johnson',
    'testimonials.role1': 'Direktur Operasional',
    'testimonials.company1': 'TechNova',
    'testimonials.quote2': 'Pembuat alur kerja visual sangat intuitif. Dalam beberapa hari, tim marketing kami dapat membuat alur kerja otomatisasi yang kompleks tanpa bantuan developer.',
    'testimonials.author2': 'Mark Davis',
    'testimonials.role2': 'Manajer Marketing',
    'testimonials.company2': 'GrowthBox',
    'testimonials.quote3': 'Kami telah mencoba beberapa platform otomatisasi, tapi tidak ada yang sebanding dengan kemudahan penggunaan dan fleksibilitas Floonic. ROI-nya luar biasa untuk bisnis e-commerce kami.',
    'testimonials.author3': 'Jennifer Lee',
    'testimonials.role3': 'Direktur E-commerce',
    'testimonials.company3': 'Urban Retail',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Get browser language
    const browserLang = navigator.language.toLowerCase();
    
    // Set initial language based on browser preference
    if (browserLang.startsWith('id')) {
      setLanguage('id');
    }
    
    // Store language preference
    const storedLang = localStorage.getItem('preferred-language');
    if (storedLang === 'en' || storedLang === 'id') {
      setLanguage(storedLang);
    }
  }, []);

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('preferred-language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};