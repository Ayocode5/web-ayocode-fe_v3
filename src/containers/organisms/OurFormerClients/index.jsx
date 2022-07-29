import React from "react";
import ListClient from "../../../components/molecules/ListClient";
import { useSelector } from "react-redux";

import "./index.scss";

import "./index.scss";
export default function OurFormerClients() {
  const { dataLanguage } = useSelector((state) => state.navbar);
  const { clients } = dataLanguage;

  return (
    <section className="clients container-section">
      <h3 className="section__title">{clients.title}</h3>
      <p className="section__subtitle">{clients.subTitle}</p>
      <ListClient listClient={clients.data} />
    </section>
  );
}
