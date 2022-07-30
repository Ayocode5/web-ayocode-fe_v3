import React from "react";
import { useSelector } from "react-redux";
import OurServiceList from "../../../components/molecules/OurServiceList";
import "./index.scss";

export default function OurServices() {
  const { dataLanguage } = useSelector((state) => state.navbar);
  const { services } = dataLanguage;
  return (
    <section className="services container-section" id="services">
      <h4 className="section__title">{services.title}</h4>
      <p className="section__subtitle">{services.subTitle}</p>
      <OurServiceList services={services.data} />
    </section>
  );
}
