import React from 'react';

import { useLanguage } from '../hooks/language-context/useLanguageContext';

const MainHeroImage = () => {
  const { translations } = useLanguage();
  const { mainHero } = translations;

  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="h-[400px] w-full object-cover sm:h-72 md:h-[400px] lg:h-full object-[25%_38%] md:object-[25%_33%] lg:object-cover"
        src={mainHero.img}
        alt="happy team image"
      />
    </div>
  );
};

export default MainHeroImage;
