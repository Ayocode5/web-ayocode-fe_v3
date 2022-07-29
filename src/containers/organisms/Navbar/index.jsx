/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { setIsOpen } from "../../../config/redux/reducers/navbarReducer";

import { BsArrowUpRight } from "react-icons/bs";
import Brand from "../../../components/atoms/Brand";
import ToggleSwitch from "../../../components/atoms/ToggleSwitch";
import Hamburger from "../../../components/atoms/Hamburger";
import Buttons from "../../../components/atoms/Buttons";

import imgLogoAyocode from "../../../assets/img/logos/logo-ayocode.svg";
import "./index.scss";

export default function NavigationBar() {
  /* selector redux state */
  const { dataLanguage, isOpen } = useSelector((state) => state.navbar);

  const dispatch = useDispatch();
  /* Check desktop screen min width 1366px */
  const isDesktop = useMediaQuery(1366);

  /* Get content language from redux state */
  const { navbar } = dataLanguage;

  useEffect(() => {
    if (isDesktop) dispatch(setIsOpen(false));
  }, [dispatch, isDesktop]);

  return (
    <>
      {isDesktop ? (
        <nav className={`navbars ${isOpen ? "navbars-open" : null}`}>
          <ul className="navbars__menu">
            <li className="navbars__item">
              <ToggleSwitch />
            </li>
          </ul>
          <ul className="navbars__menu">
            <li className="navbars__item">
              <a
                className="navbars__link"
                rel="noopener noreferrer"
                href="#about"
              >
                {navbar.menus[1]}
              </a>
            </li>
            <li className="navbars__item">
              <a
                className="navbars__link"
                rel="noopener noreferrer"
                href="#portofolio"
              >
                {navbar.menus[3]}
              </a>
            </li>
            <li className="navbars__item navbars__logo">
              <Brand logoImage={imgLogoAyocode} />
            </li>
            <li className="navbars__item">
              <a
                className="navbars__link"
                rel="noopener noreferrer"
                href="#services"
              >
                {navbar.menus[2]}
              </a>
            </li>
            <li className="navbars__item">
              <a
                className="navbars__link"
                rel="noopener noreferrer"
                href="#blog"
              >
                {navbar.menus[4]}
              </a>
            </li>
          </ul>
          <ul className="navbars__menu">
            <li className="navbars__item">
              <Buttons
                customClass={"navbars__button"}
                tipe="button"
                text={`${navbar.button} `}
                icon={<BsArrowUpRight />}
              />
            </li>
          </ul>
        </nav>
      ) : (
        <nav className={`navbars ${isOpen ? "navbars-open" : null}`}>
          <div className="navbars__logo navbars__toggler">
            <Brand logoImage={imgLogoAyocode} />
            <Hamburger />
          </div>

          <ul className="navbars__menu">
            <li className="navbars__item">
              <a className="navbars__link" rel="noopener noreferrer" href="#">
                {navbar.menus[0]}
              </a>
            </li>
            <li className="navbars__item">
              <a
                className="navbars__link"
                rel="noopener noreferrer"
                href="#about"
              >
                {navbar.menus[1]}
              </a>
            </li>
            <li className="navbars__item">
              <a
                className="navbars__link"
                rel="noopener noreferrer"
                href="#portofolio"
              >
                {navbar.menus[2]}
              </a>
            </li>
            <li className="navbars__item">
              <a
                className="navbars__link"
                rel="noopener noreferrer"
                href="#services"
              >
                {navbar.menus[3]}
              </a>
            </li>
            <li className="navbars__item">
              <a
                className="navbars__link"
                rel="noopener noreferrer"
                href="#blog"
              >
                {navbar.menus[4]}
              </a>
            </li>

            {isOpen ? (
              <>
                <li className="navbars__item">
                  <ToggleSwitch />
                </li>
                <li className="navbars__item">
                  <Buttons
                    customClass={"navbars__button"}
                    tipe="button"
                    text={`${navbar.button} `}
                    icon={<BsArrowUpRight />}
                  />
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
          {isOpen ? (
            <></>
          ) : (
            <ul className="navbars__menu">
              <li className="navbars__item">
                <ToggleSwitch />
              </li>
              <li className="navbars__item">
                <Buttons
                  customClass={"navbars__button"}
                  tipe="button"
                  text={`${navbar.button} `}
                  icon={<BsArrowUpRight />}
                />
              </li>
            </ul>
          )}

          <div className="navbars__bg-splash"></div>
        </nav>
      )}
    </>
  );
}
