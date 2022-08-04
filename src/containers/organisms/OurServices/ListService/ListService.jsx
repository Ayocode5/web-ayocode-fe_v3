/* eslint-disable no-undef */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import CardService from "../CardService/CardSevice";

import "./ListService.modules.scss";
export default function ListService({ services }) {
  // check window width is greater than 834px
  const isTablet = useMediaQuery(834);

  const optionsSlider = {
    spaceBetween: 50,
    slidesPerView: 1,
    modules: [Pagination],
    allowTouchMove: true,
    rewind: true,
    pagination: {
      clickable: true,
    },
  };

  return (
    <div className="services__list">
      {isTablet ? (
        <Swiper {...optionsSlider}>
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <CardService {...service} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <>
          {services.map((service) => (
            <CardService key={service.id} {...service} />
          ))}
        </>
      )}
    </div>
  );
}
