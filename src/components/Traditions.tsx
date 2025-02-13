import React from 'react';

import Divider from './Divider';
import config from '../config/index.json';

const Traditions = () => {
  const { traditions } = config;
  const { title, subTitle, items } = traditions;
  return (
    <section className="bg-background py-8" id="venue">
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
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex flex-wrap ${
              index % 2 ? 'flex-col-reverse sm:flex-row' : ''
            }`}
          >
            <div className="w-full sm:w-1/2 p-6">
              {index % 2 !== 0 && (
                <img
                  className="h-auto w-auto"
                  src={item.img}
                  alt={item.title}
                />
              )}
              {index % 2 === 0 && (
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  {item.title}
                </h3>
              )}
              {index % 2 === 0 && (
                <p className="text-gray-600 whitespace-pre-line">
                  {item.description}
                </p>
              )}
            </div>
            <div className="w-full sm:w-1/2 p-6 flex justify-center items-center">
              {index % 2 === 0 && (
                <img
                  className="h-auto w-auto"
                  src={item.img}
                  alt={item.title}
                />
              )}
              {index % 2 !== 0 && (
                <div>
                  <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-8 whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Traditions;
