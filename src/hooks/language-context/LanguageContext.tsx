import React, { createContext, useState, useEffect } from 'react';

import translationsDA from '../../config/index_DA.json';
import translationsEN from '../../config/index_EN.json';
import translationsPL from '../../config/index_PL.json';

// Infer type from JSON file
type TranslationsType = Omit<typeof translationsEN, 'gettingThere'> & {
  gettingThere?: typeof translationsEN.gettingThere;
};

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  translations: TranslationsType;
  languages: string[];
}

const translationsMap: Record<string, TranslationsType> = {
  en: translationsEN,
  da: translationsDA,
  pl: translationsPL,
};

const availableLanguages = Object.keys(translationsMap);

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] =
    useState<TranslationsType>(translationsEN);

  // Update translations when language changes
  useEffect(() => {
    setTranslations(translationsMap[language] || translationsEN);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        translations,
        languages: availableLanguages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export type { LanguageContextType, TranslationsType };
