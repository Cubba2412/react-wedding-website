import React, { Fragment } from 'react';

import { Menu, Transition } from '@headlessui/react';

import { useLanguage } from '../hooks/language-context/useLanguageContext';

const LanguageSwitcher: React.FC<{ className: string }> = ({ className }) => {
  const { language, setLanguage, languages } = useLanguage();

  return (
    <div className={`relative ${className}`}>
      <Menu>
        <Menu.Button className="w-5 h-5 font-medium text-gray-500 hover:text-gray-900 whitespace-nowrap">
          <div>
            <img
              src={`/assets/svgs/flags/${language}.svg`}
              width="20"
              height="20"
              alt="language selector flag"
            />
          </div>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Menu.Items
            className="mt-2 bg-white shadow-lg flex flex-col p-2 rounded-md z-50 w-auto
              lg:absolute lg:left-0 lg:top-full lg:mt-2 lg:w-auto
              md:fixed md:block md:mt-2 md:w-full"
          >
            {languages.map((lang: string) => (
              <Menu.Item key={lang}>
                <button
                  className={`block p-1 space-y-1 hover:opacity-75 focus:outline-none rounded-md ${
                    language === lang ? 'bg-gray-200' : ''
                  }`}
                  onClick={() => setLanguage(lang)}
                >
                  <img
                    src={`/assets/svgs/flags/${lang}.svg`}
                    width="24"
                    height="24"
                    alt={`${lang} flag`}
                  />
                </button>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default LanguageSwitcher;
