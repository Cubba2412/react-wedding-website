import React, { useEffect, useState } from 'react';

import Divider from './Divider';
import { useLanguage } from '../hooks/language-context/useLanguageContext';

const renderDescriptionWithLinks = (text?: string) => {
  if (!text) return null;
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  // Split the text by spaces, but keep the spaces in the array
  const parts = text.split(/(\s+)/); // Keep spaces as separate parts

  return parts.map((part, index) => {
    // Check if the part is a URL
    if (urlRegex.test(part)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline break-all"
        >
          {part}
        </a>
      );
    }
    return <span key={index}>{part}</span>;
  });
};

const GettingThere = () => {
  const { translations, language } = useLanguage();
  const { gettingThere } = translations;
  const [firstItem] = gettingThere.items;

  const [zoom1, setZoom1] = useState(6);
  const [zoom2, setZoom2] = useState(6);
  const [center1, setCenter1] = useState([53.7899929, 18.09]);
  const [center2, setCenter2] = useState([52.91, 17.0567199]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // small screen
        setZoom1(6);
        setCenter1([54.1899929, 17.4]);
        setZoom2(7);
        setCenter2([52.815, 17.5567199]);
      } else if (width < 1024) {
        // medium screen
        setZoom1(6);
        setCenter1([53.9999929, 18.2]);
        setZoom2(6);
        setCenter2([53.1, 17.6567199]);
      } else if (width < 1280) {
        // large screen
        setZoom1(6);
        setCenter1([54.1999929, 18.1]);
        setZoom2(6);
        setCenter2([53.21, 17.5567199]);
      } else {
        // large screen
        setZoom1(6);
        setCenter1([54.1999929, 16.3]);
        setZoom2(6);
        setCenter2([53.31, 17.2567199]);
      }
    };

    handleResize(); // run on mount
    window.addEventListener('resize', handleResize); // watch window size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className="bg-background py-8 px-2 flex items-center justify-center"
      id="getting-there"
    >
      <div className={`container max-w-8xl mx-[32px] m-8 lg:text-center`}>
        <h2 className="text-base text-primary font-semibold tracking-wide uppercase text-center">
          {gettingThere.title}
        </h2>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {gettingThere.subTitle.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12">
          {/* Left iframe */}
          <div className="flex-grow basis-[40%] flex justify-center">
            <iframe
              className="w-full h-64 border-0"
              frameBorder="0"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/directions?key=${
                process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
              }&origin=Gdańsk+Główny,Gdańsk,Poland&destination=Bydgoszcz+Główny,Bydgoszcz,Poland&mode=transit&zoom=${zoom1}&center=${center1.join(
                ','
              )}&language=${language}`}
              allowFullScreen
            ></iframe>
          </div>

          {/* Description in the center */}
          <div className="basis-[30%] text-center px-4 whitespace-pre-line">
            <p className="text-gray-600">
              {renderDescriptionWithLinks(firstItem?.description)}
            </p>
          </div>

          {/* Right iframe */}
          <div className="flex-grow basis-[40%] flex justify-center">
            <iframe
              className="w-full h-64 border-0"
              frameBorder="0"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/directions?key=${
                process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
              }&origin=Poznań+Główny,Poznań,Poland&destination=Bydgoszcz+Główny,Bydgoszcz,Poland&mode=transit&zoom=${zoom2}&center=${center2.join(
                ','
              )}&language=${language}`}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingThere;
