import React, { useState, useEffect } from 'react';
import useMediaQuery from '../../../hooks/useMediaQuery';
import AnimatedCursor from 'react-animated-cursor';
import Jumbotron from '../../organisms/Jumbotron';
import OurServices from '../../organisms/OurServices';
import WaveAnimation from '../../../components/atoms/WaveAnimation';
import WorkPortofolios from '../../organisms/WorkPortofolios';
import OurFormerClients from '../../organisms/OurFormerClients';
import Agents from '../../organisms/Agents';
import Contact from '../../organisms/Contact';
import NavigationFooter from '../../organisms/NavigationFooter';
import Particle from '../../../components/atoms/Particle';
import { configAnimationCursor } from '../../../utils/utils';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import './index.scss';

export default function Home() {
  const isDesktop = useMediaQuery(1366);

  const [language, setLanguage] = useState('Eng');

  useEffect(() => {
    localStorage.getItem('lang')
      ? setLanguage(localStorage.getItem('lang'))
      : localStorage.setItem('lang', 'Eng');
  }, [language]);

  return (
    <>
      {isDesktop ? (
        <>
          {/* Desktop */}
          <AnimatedCursor {...configAnimationCursor} />
          <Particle />
        </>
      ) : null}
      <WaveAnimation />
      <header className="header">
        <Jumbotron />
      </header>

      <main>
        <OurServices />
        <WorkPortofolios />
        <OurFormerClients />
        <Agents />
        <Contact />
        <NavigationFooter />
      </main>
    </>
  );
}
