import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import AnimatedCursor from "react-animated-cursor";

import Jumbotron from "../../organisms/Jumbotron";
import OurServices from "../../organisms/OurServices";
import WaveAnimation from "../../../components/atoms/WaveAnimation";
import WorkPortofolios from "../../organisms/WorkPortofolios";
import OurFormerClients from "../../organisms/OurFormerClients";
import Agents from "../../organisms/Agents";
import Contact from "../../organisms/Contact";
import { configAnimationCursor } from "../../../utils/utils";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import "./index.scss";
import NavigationFooter from "../../organisms/NavigationFooter";

export default function Home() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 992 });

  const [language, setLanguage] = useState("Eng");

  useEffect(() => {
    localStorage.getItem("lang")
      ? setLanguage(localStorage.getItem("lang"))
      : localStorage.setItem("lang", "Eng");
  }, [language]);

  return (
    <>
      {isDesktopOrLaptop ? (
        <>
          {/* Desktop */}
          <AnimatedCursor {...configAnimationCursor} />
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
