import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ReactCountryFlag from 'react-country-flag';
import { ChevronDown } from 'lucide-react';

interface Language {
  code: 'en' | 'id';
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: 'GB' },
  { code: 'id', name: 'Indonesia', flag: 'ID' },
];

const LanguageSwitch: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
      >
        <ReactCountryFlag
          countryCode={currentLanguage.flag}
          svg
          className="rounded-sm"
          style={{
            width: '1.2em',
            height: '1.2em',
          }}
        />
        <span className="text-gray-700">{currentLanguage.name}</span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-40 bg-white rounded-md shadow-lg py-1 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-2 px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
                language === lang.code ? 'bg-gray-50' : ''
              }`}
            >
              <ReactCountryFlag
                countryCode={lang.flag}
                svg
                className="rounded-sm"
                style={{
                  width: '1.2em',
                  height: '1.2em',
                }}
              />
              <span className="text-gray-700">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitch;