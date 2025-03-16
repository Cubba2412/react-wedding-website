import React from 'react';

import { useLanguage } from '../hooks/language-context/useLanguageContext';

const Gifts = () => {
  const { translations } = useLanguage();
  const { gifts } = translations;

  return (
    <div
      id="gifts"
      className="py-12 bg-cover bg-center bg-no-repeat -mt-16"
      style={{ backgroundImage: "url('/assets/images/cappadocia3.jpeg')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="lg:text-center text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase text-center">
            {gifts.title}
          </h2>
          <p className="px-6 mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl bg-white/30 backdrop-blur-md p-4 rounded-lg inline-block">
            {gifts.subTitle}
          </p>
        </div>

        {/* Gift Content Section */}
        <div className="mt-10 flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* Text Content */}
          <div className="relative bg-white p-6 max-w-md rounded-lg shadow-lg text-center flex items-center">
            <p className="text-base sm:text-lg leading-relaxed text-gray-600 whitespace-pre-line">
              {gifts.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
