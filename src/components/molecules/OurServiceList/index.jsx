/* eslint-disable no-undef */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import useMediaQuery from "../../../hooks/useMediaQuery";

import CardOurService from "../CardOurService";

export default function OurServiceList({ services }) {
  // check window width is greater than 834px
  const isTablet = useMediaQuery(834);

  const optionsSlider = {
    spaceBetween: 50,
    slidesPerView: 1,
    modules: [Pagination],
    allowTouchMove: true,
    rewind: true,
  };
  return (
    <div className="services__list">
      {isTablet ? (
        <Swiper
          {...optionsSlider}
          pagination={{
            clickable: true,
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <CardOurService {...service} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <>
          {services.map((service) => (
            <CardOurService key={service.id} {...service} />
          ))}
        </>
      )}
    </div>
  );
}
