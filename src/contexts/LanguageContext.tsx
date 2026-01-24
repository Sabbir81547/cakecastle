import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '@/data/translations';

type Language = 'en' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Detect if user is from Bangladesh based on timezone or navigator language
const detectDefaultLanguage = (): Language => {
  try {
    // Check navigator language first
    const navLang = navigator.language || (navigator as any).userLanguage;
    if (navLang?.startsWith('bn')) return 'bn';
    
    // Check timezone for Bangladesh (Asia/Dhaka)
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timezone === 'Asia/Dhaka') return 'bn';
    
    // Check if stored preference exists
    const stored = localStorage.getItem('cake-castle-lang');
    if (stored === 'en' || stored === 'bn') return stored;
    
    return 'en';
  } catch {
    return 'en';
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Initialize synchronously to avoid hydration issues
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('cake-castle-lang');
        if (stored === 'en' || stored === 'bn') return stored;
        
        const navLang = navigator.language || (navigator as any).userLanguage;
        if (navLang?.startsWith('bn')) return 'bn';
        
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timezone === 'Asia/Dhaka') return 'bn';
      } catch {
        // Ignore errors
      }
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('cake-castle-lang', lang);
  };

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export { translations };
