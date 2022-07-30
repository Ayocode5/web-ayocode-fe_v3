import React from "react";
import ListPortofolio from "../../../components/molecules/ListPortofolio";
import "./index.scss";
import { useSelector } from "react-redux";

export default function WorkPortofolios() {
  const { dataLanguage } = useSelector((state) => state.navbar);
  const { portofolios } = dataLanguage;
  return (
    <section className="portfolio container-section" id="portfolio">
      <h3 className="section__title">{portofolios.title}</h3>
      <p className="section__subtitle">{portofolios.subTitle}</p>
      <ListPortofolio portofolios={portofolios.data} />
    </section>
  );
}
