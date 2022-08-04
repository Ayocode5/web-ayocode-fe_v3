import React from "react";
import ListPortfolio from "./ListPortfolio/ListPortfoflio";
import { useSelector } from "react-redux";

import "./index.scss";
export default function WorkPortofolios() {
  const { dataLanguage } = useSelector((state) => state.navbar);
  const { portfolios } = dataLanguage;
  return (
    <section className="portfolio container-section" id="portfolio">
      <h3 className="section__title">{portfolios.title}</h3>
      <p className="section__subtitle">{portfolios.subTitle}</p>
      <ListPortfolio portfolios={portfolios.data} />
    </section>
  );
}
