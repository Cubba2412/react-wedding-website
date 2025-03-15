import React from 'react';

import { useLanguage } from '../hooks/language-context/useLanguageContext';

const Accommodation = () => {
  const { translations } = useLanguage();
  const { accommodation } = translations;
  const {
    title,
    subtitle,
    description,
    items: accommodationList,
  } = accommodation;

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

        <div className="mt-10">
          {/* Wrapping accomodation in a grid of cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodationList.map((feature) => (
              <a
                key={feature.name}
                href={feature.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
              >
                {/* Main Image of the hotel */}
                <div
                  className="w-full h-[200px] sm:h-[250px] lg:h-[300px] bg-cover bg-center rounded-lg mb-4"
                  style={{ backgroundImage: `url(${feature.image})` }}
                ></div>

                {/* Card Content */}
                <div className="text-center mt-12">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
