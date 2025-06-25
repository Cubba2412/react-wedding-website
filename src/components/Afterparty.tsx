import React from 'react';

import { useLanguage } from '../hooks/language-context/useLanguageContext';

const AfterParty = () => {
  const { translations } = useLanguage();
  const { afterParty } = translations;
  const { title, subtitle, description } = afterParty;

  return (
    <div className={`py-12 bg-background`} id="accommodation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase text-center">
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
            {subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AfterParty;
