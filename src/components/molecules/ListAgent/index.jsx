import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import { IoLogoWhatsapp, IoLogoInstagram } from "react-icons/io5";
import { GoMail } from "react-icons/go";

export default function ListAgent({ listAgent }) {
  return (
    <div className="agents__list">
      <Swiper
        modules={[Scrollbar]}
        slidesPerView={4}
        scrollbar={{
          hide: false,
        }}
        spaceBetween={20}
      >
        {listAgent.map((agent) => (
          <SwiperSlide key={agent.id}>
            <div className="agents__list-item">
              <div className="agents__list-item-overlay">
                <p>{agent.desc}</p>
                <div className="agents__list-socialmedia">
                  <a
                    href={agent.socialMedia.whatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoWhatsapp />
                  </a>
                  <a
                    href={agent.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoInstagram />
                  </a>
                  <a
                    href={agent.socialMedia.gmail}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GoMail />
                  </a>
                </div>
              </div>
              <img src={agent.urlImage} alt={agent.desc} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
