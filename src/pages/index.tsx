import About from '../components/About';
import Accommodation from '../components/Accommodation';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Gifts from '../components/Gifts';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import ThingsToDo from '../components/ThingsToDo';
import Traditions from '../components/Traditions';
import Venue from '../components/Venue';
import { LanguageProvider } from '../hooks/language-context/LanguageContext';

const App = () => {
  return (
    <LanguageProvider>
      <div className={`bg-background grid gap-y-16 overflow-hidden`}>
        <div className={`relative bg-background`}>
          <div className="max-w-7xl mx-auto">
            <div
              className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
            >
              <Header />
              <MainHero />
            </div>
          </div>
          <MainHeroImage />
        </div>
        <Canvas />
        <LazyShow>
          <>
            <Venue />
            <Canvas />
          </>
        </LazyShow>

        <LazyShow>
          <Gifts />
        </LazyShow>

        <LazyShow>
          <>
            <Traditions />
            <Canvas />
          </>
        </LazyShow>
        <LazyShow>
          <ThingsToDo />
        </LazyShow>
        <LazyShow>
          <Accommodation />
        </LazyShow>
        <LazyShow>
          <>
            <Canvas />
            <About />
          </>
        </LazyShow>
        <Analytics />
      </div>
    </LanguageProvider>
  );
};

export default App;
