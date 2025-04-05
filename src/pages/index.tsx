import About from '../components/About';
import Accommodation from '../components/Accommodation';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import GettingThere from '../components/GettingThere';
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
      <div className="bg-background grid gap-y-4">
        <div className="relative bg-background w-full sm:max-w-7xl lg:max-w-full mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <Header />
              <MainHero />
            </div>
          </div>
          <div className="h-[400px] md:h-auto lg:h-auto">
            <MainHeroImage />
          </div>
        </div>
        <Canvas />
        <LazyShow>
          <>
            <Venue />
            <Canvas />
          </>
        </LazyShow>
        <LazyShow>
          <>
            <GettingThere />
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
