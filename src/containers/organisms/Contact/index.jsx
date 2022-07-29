import React from "react";
import Buttons from "../../../components/atoms/Buttons";
import { BsArrowUpRight } from "react-icons/bs";
import "./index.scss";
export default function Contact() {
  return (
    <section className="contact container-section" id="contact">
      <h3>Contact</h3>
      <p>Don’t be surprised if the result is above your expectation.</p>
      <Buttons
        customClass={"contact__button"}
        tipe="button"
        text={`Start a Project `}
        icon={<BsArrowUpRight />}
      />
    </section>
  );
}
