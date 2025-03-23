import React from 'react';

import { useLanguage } from '../hooks/language-context/useLanguageContext';

const ThingsToDo = () => {
  const { translations } = useLanguage();
  const { thingsToDo } = translations;
  const { title, subTitle, description, items: thingsToDoList } = thingsToDo;

  return (
    <div className={`py-12 bg-background`} id="thingsToDo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase text-center">
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
            {subTitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto text-center">
            {description}
          </p>
        </div>

        <div className="mt-10">
          {/* Wrapping thingsToDo items in a grid of cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {thingsToDoList.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
              >
                {/* Main image */}
                <div
                  className="w-full h-[200px] sm:h-[250px] lg:h-[300px] bg-cover bg-center rounded-lg mb-4"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>

                {/* Card Content */}
                <div className="text-center mt-12">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    {item.description}
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

export default ThingsToDo;
