/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Controller } from "swiper";

export default function ListPortofolio({ portofolios }) {
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

  return (
    <div className="portfolio__list">
      <Swiper
        modules={[Thumbs, Controller]}
        thumbs={{
          swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
        }}
        ref={slider1}
      >
        {portofolios.map((portofolio) => (
          <SwiperSlide key={portofolio.id}>
            <div className="portfolio__list-item">
              <figure>
                <figcaption>
                  <p>{portofolio.projectName}</p>
                  <a href={portofolio.url} rel="noreferrer noopener">
                    See Details Projects
                  </a>
                </figcaption>
                <img src={portofolio.urlImage} alt={portofolio.url} />
              </figure>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="portfolio__list-thumbnail">
        <Swiper
          modules={[Thumbs, Controller]}
          slidesPerView={2}
          onSwiper={setActiveThumb}
          spaceBetween={10}
          breakpoints={{
            834: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1366: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {portofolios.map((portofolio) => (
            <SwiperSlide key={portofolio.id}>
              <img src={portofolio.urlImage} alt={portofolio.url} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="portfolio__list-feedback">
        <Swiper modules={[Thumbs, Controller]} ref={slider3}>
          {portofolios.map((portofolio) => (
            <SwiperSlide key={portofolio.id}>
              <div className="portfolio__list-feedback-item">
                <p className="feedback">{portofolio.feedback}</p>
                <div className="feedback-respondent">
                  <h4>{portofolio.positionRespondent}</h4>
                  <p>{portofolio.respondent}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
