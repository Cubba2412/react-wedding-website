import React from 'react';

import Divider from './Divider';
import { useLanguage } from '../hooks/language-context/useLanguageContext';

const handleStrikethrough = (text: string) => {
  // Replace ~~ with <del> tags for strikethrough
  return text
    .split('~~')
    .map((part, index) =>
      index % 2 === 1 ? <del key={index}>{part}</del> : part
    );
};

const Traditions = () => {
  const { translations } = useLanguage();
  const { traditions } = translations;
  const { title, subTitle, sections } = traditions;

  return (
    <section className="bg-background py-8" id="traditions">
      <div className="container max-w-5xl mx-auto m-8 lg:text-center">
        <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
          {title}
        </h2>
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-primary">
          {subTitle.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />

        {/* Render each section */}
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {/* Render Section Header */}
            <h2 className="text-3xl font-bold text-primary mb-4">
              {section.title}
            </h2>

            {/* Render each item in the section */}
            {section.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`flex flex-wrap ${
                  itemIndex % 2 ? 'flex-col-reverse sm:flex-row' : ''
                }`}
              >
                <div className="w-full sm:w-1/2 p-6">
                  {itemIndex % 2 !== 0 && (
                    <img
                      className="h-auto w-auto"
                      src={item.img}
                      alt={item.title}
                    />
                  )}
                  {itemIndex % 2 === 0 && (
                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                      {item.title}
                    </h3>
                  )}
                  {itemIndex % 2 === 0 && (
                    <p className="text-gray-600 whitespace-pre-line">
                      {handleStrikethrough(item.description)}
                    </p>
                  )}
                </div>
                <div className="w-full sm:w-1/2 p-6 flex justify-center items-center">
                  {itemIndex % 2 === 0 && (
                    <img
                      className="h-auto w-auto"
                      src={item.img}
                      alt={item.title}
                    />
                  )}
                  {itemIndex % 2 !== 0 && (
                    <div>
                      <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-8 whitespace-pre-line">
                        {handleStrikethrough(item.description)}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Traditions;
