import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ListClient({ listClient }) {
  return (
    <div className="clients__list">
      <Swiper slidesPerView={"auto"}>
        {listClient.map((client) => (
          <SwiperSlide key={client.id}>
            <div className="clients__list-item">
              <img src={client.urlImage} alt={client.desc} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
