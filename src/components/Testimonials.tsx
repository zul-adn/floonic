import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, company, avatar, rating }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
      <blockquote className="text-gray-700 mb-6 flex-grow">"{quote}"</blockquote>
      <div className="flex items-center mt-auto">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src={avatar}
          alt={author}
        />
        <div className="ml-3">
          <div className="font-medium text-gray-900">{author}</div>
          <div className="text-sm text-gray-500">
            {role}, {company}
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      quoteKey: 'testimonials.quote1',
      author: t('testimonials.author1'),
      role: t('testimonials.role1'),
      company: t('testimonials.company1'),
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5
    },
    {
      quoteKey: 'testimonials.quote2',
      author: t('testimonials.author2'),
      role: t('testimonials.role2'),
      company: t('testimonials.company2'),
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5
    },
    {
      quoteKey: 'testimonials.quote3',
      author: t('testimonials.author3'),
      role: t('testimonials.role3'),
      company: t('testimonials.company3'),
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={t(testimonial.quoteKey)}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;