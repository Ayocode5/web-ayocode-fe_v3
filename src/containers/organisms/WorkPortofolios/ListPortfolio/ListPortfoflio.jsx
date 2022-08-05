/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import ItemPortfolio from "../ItemPortfolio/ItemPortfolio";
import Feedback from "../Feedback/Feedback";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Controller } from "swiper";

import "./ListPortfolio.modules.scss";
export default function ListPortfolio({ portfolios }) {
  const [activeThumb, setActiveThumb] = useState();
  const slider1 = useRef(null);
  const slider3 = useRef(null);

  /* Use this function if need condition slider at hover in first load */
  // const handlRemoveClass = () => {
  //   const hovers = document.querySelectorAll(".hover");
  //   hovers.forEach((hover) => {
  //     hover.addEventListener("mouseleave", () => {
  //       hover.classList.remove("hover");
  //     });
  //   });
  // };

  useEffect(() => {
    const sliderSwiper1 = slider1.current.swiper;
    const sliderSwiper3 = slider3.current.swiper;
    if (sliderSwiper1.controller && sliderSwiper3.controller) {
      sliderSwiper1.controller.control = sliderSwiper3;
      sliderSwiper3.controller.control = sliderSwiper1;
    }
  }, []);

  const configSwiperPortfolio = {
    modules: [Thumbs, Controller],
    thumbs: {
      swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
    },
    ref: slider1,
  };

  const configSwiperThumb = {
    modules: [Controller, Thumbs],
    slidesPerView: "auto",
    onSwiper: setActiveThumb,
    spaceBetween: 10,
    breakpoints: {
      834: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  };

  const configSwiperFeedback = {
    modules: [Thumbs, Controller],
    ref: slider3,
  };

  return (
    <div className="portfolio__list">
      <Swiper {...configSwiperPortfolio}>
        {portfolios.map((portfolio) => (
          <SwiperSlide key={portfolio.id}>
            <ItemPortfolio {...portfolio} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="portfolio__list-thumbnail">
        <Swiper {...configSwiperThumb}>
          {portfolios.map((portofolio) => (
            <SwiperSlide key={portofolio.id}>
              <img src={portofolio.urlImage} alt={portofolio.url} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="portfolio__list-feedback">
        <Swiper {...configSwiperFeedback}>
          {portfolios.map((portfolio) => (
            <SwiperSlide key={portfolio.id}>
              <Feedback {...portfolio} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
