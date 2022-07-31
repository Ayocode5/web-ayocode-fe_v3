/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./index.scss";
export default function NavigationFooter() {
  return (
    <section className="nav-footer container-section" id="nav-footer">
      <h3>Ayocode.id</h3>
      <p>Your Best Agency Solution, Based in Jakarta Barat</p>
      <hr />
      <ul className="nav-footer__list">
        <li>
          <a className="nav-footer__link" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="nav-footer__link" href="#about">
            About Us
          </a>
        </li>
        <li>
          <a className="nav-footer__link" href="#services">
            Services
          </a>
        </li>
        <li>
          <a className="nav-footer__link" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a className="nav-footer__link" href="#blog">
            Blog
          </a>
        </li>
      </ul>
    </section>
  );
}
