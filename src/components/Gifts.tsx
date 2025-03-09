import React from 'react';

import { useLanguage } from '../hooks/language-context/useLanguageContext';

// import { Action, InteractivityProps } from 'lottie-react';
// import dynamic from 'next/dynamic'; // Import dynamic from Next.js

// import giftBoxAnimation from '../../public/assets/animations/gift-box.json';

// Dynamically import the Lottie component with ssr: false
// const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// const interactivity = {
//   mode: 'scroll' as InteractivityProps['mode'],
//   actions: [
//     {
//       visibility: [0, 0.2] as [number, number],
//       type: 'stop' as Action['type'],
//       frames: [0] as [number],
//     },
//     {
//       visibility: [0.2, 0.8] as [number, number],
//       type: 'seek' as Action['type'],
//       frames: [0, 100] as [number, number], // Adjust frame range based on animation length
//     },
//     {
//       visibility: [0.8, 1.0] as [number, number],
//       type: 'loop' as Action['type'],
//       frames: [100, 150] as [number, number], // Adjust frame range for looping segment
//     },
//   ],
// };

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
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            {gifts.title}
          </h2>
          <p className="px-6 mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl bg-white/30 backdrop-blur-md p-4 rounded-lg inline-block">
            {gifts.subTitle}
          </p>
        </div>

        {/* Gift Content Section */}
        <div className="mt-10 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-8">
          {/* Left Animation */}
          <div className="w-48 h-48 flex items-center justify-center">
            {/* <Lottie
              animationData={giftBoxAnimation}
              interactivity={interactivity}
            /> */}
          </div>

          {/* Text Content */}
          <div className="relative bg-white p-6 max-w-md rounded-lg shadow-lg text-center flex items-center">
            <p className="text-base sm:text-lg leading-relaxed text-gray-600 whitespace-pre-line">
              {gifts.description}
            </p>
          </div>

          {/* Right Animation */}
          <div className="w-48 h-48 flex items-center justify-center">
            {/* <Lottie
              animationData={giftBoxAnimation}
              interactivity={interactivity}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
