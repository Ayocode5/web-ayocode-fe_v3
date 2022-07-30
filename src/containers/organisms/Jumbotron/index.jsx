import React from "react";
import { useSelector } from "react-redux";
import {
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoMailOutline,
} from "react-icons/io5";
import { BsArrowUpRight } from "react-icons/bs";
import Tagline from "../../../components/atoms/Tagline";
import SocialMedia from "../../../components/atoms/SocialMedia";
import Buttons from "../../../components/atoms/Buttons";
import color from "../../../assets/scss/_color.scss";
import "./index.scss";

export default function Jumbotron() {
  // get language from redux state
  const { dataLanguage } = useSelector((state) => state.navbar);
  const { jumbotron } = dataLanguage;
  return (
    <section className="jumbotrons">
      <Tagline text={jumbotron.tagline} />
      <div className="jumbotrons__wrap-div">
        <div className="jumbotrons__list-sosial-media">
          <SocialMedia
            customClass={"jumbotrons__icon-instagram"}
            icon={<IoLogoInstagram color={color.iconPrimary} size={24} />}
            link="https://www.instagram.com"
          />
          <SocialMedia
            customClass={"jumbotrons__icon-wa"}
            icon={<IoLogoWhatsapp color={color.iconPrimary} size={24} />}
            link="https://www.whatsapp.com"
          />
          <SocialMedia
            customClass={"jumbotrons__icon-gmail"}
            icon={<IoMailOutline color={color.iconPrimary} size={24} />}
            link="https://www.gmail.com"
          />
        </div>
        <Buttons
          customClass={"jumbotrons__button-start"}
          text={`${jumbotron.button} `}
          icon={<BsArrowUpRight />}
        />
      </div>
    </section>
  );
}
