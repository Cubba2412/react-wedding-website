import React from 'react';

import Divider from './Divider';
import config from '../config/index.json';

const Venue = () => {
  const { venue } = config;
  const [firstItem, secondItem] = venue.items;

  return (
    <section className={`bg-background py-8`} id="venue">
      <div className={`container max-w-5xl mx-auto m-8 lg:text-center`}>
        <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
          {venue.title}
        </h2>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {venue.subTitle.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {firstItem?.title}
            </h3>
            <p className={`text-gray-600`}>{firstItem?.description}</p>
          </div>
          <div
            className={`w-full sm:w-1/2 p-6 flex justify-center items-center`}
          >
            <a href={firstItem?.href || '#'}>
              <img
                className="h-auto w-auto" // Ensure the image maintains its aspect ratio
                src={firstItem?.img}
                alt={firstItem?.title}
              />
            </a>
          </div>
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <a href={secondItem?.href || '#'}>
              <img
                className="h-6/6"
                src={secondItem?.img}
                alt={secondItem?.title}
              />
            </a>
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {secondItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8 whitespace-pre-line`}>
                {secondItem?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
