import React from 'react';

import { useLanguage } from '../hooks/language-context/useLanguageContext';

const MainHero = () => {
  const { translations } = useLanguage();

  const { mainHero } = translations;
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 text-center sm:text-center lg:text-left sm:text-5xl md:text-6xl">
          <span className="block xl:inline">{mainHero.title}</span>
          <br className="hidden lg:block" />
          <span className={`block text-primary xl:inline`}>
            {mainHero.subtitle}
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {mainHero.description}
        </p>
        <br />
        <h1 className="text-xl tracking-tight font-extrabold text-gray-900 sm:text-xl md:text-2xl">
          <span className={`block text-gray-900 xl:inline`}>
            {mainHero.primaryAction.text}
          </span>
        </h1>
      </div>
    </main>
  );
};

export default MainHero;
