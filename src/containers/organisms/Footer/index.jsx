import React from "react";
import {
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoWhatsapp,
  IoMailOutline,
} from "react-icons/io5";
import WaveAnimation from "../../../components/atoms/WaveAnimation";
import SocialMedia from "../../../components/atoms/SocialMedia";

import "./index.scss";
import useMediaQuery from "../../../hooks/useMediaQuery";

export default function Footer() {
  const isTablet = useMediaQuery(834);

  return (
    <footer id="footer">
      <div className="footer">
        <div className="footer__copyright">
          <span>© 2022 Ayocode.id | All Right Reserved</span>
        </div>
        <div className="footer__socialmedia">
          <span>Follow Us On : </span>
          <ul className="footer__socialmedia-list">
            <li>
              <SocialMedia
                customClass={"footer__icon-instagram"}
                icon={<IoLogoInstagram size={16} />}
                link="https://www.instagram.com"
              />
            </li>
            <li>
              <SocialMedia
                customClass={"footer__icon-wa"}
                icon={<IoLogoWhatsapp size={16} />}
                link="https://www.whatsapp.com"
              />
            </li>
            <li>
              <SocialMedia
                customClass={"footer__icon-gmail"}
                icon={<IoMailOutline size={16} />}
                link="https://www.gmail.com"
              />
            </li>
            <li>
              <SocialMedia
                customClass={"footer__icon-youtube"}
                icon={<IoLogoYoutube size={16} />}
                link="https://www.youtube.com"
              />
            </li>
          </ul>
        </div>
      </div>
      {isTablet ? <WaveAnimation /> : null}
    </footer>
  );
}
