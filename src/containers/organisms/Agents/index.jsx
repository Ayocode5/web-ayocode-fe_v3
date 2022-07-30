import React from "react";
import { useSelector } from "react-redux";
import ListAgent from "../../../components/molecules/ListAgent";
import "./index.scss";

export default function Agents() {
  const { dataLanguage } = useSelector((state) => state.navbar);
  const { teams } = dataLanguage;
  return (
    <section className="agents container-section" id="about">
      <h3 className="section__title">{teams.title}</h3>
      <p className="section__subtitle">{teams.subTitle}</p>
      <ListAgent listAgent={teams.data} />
    </section>
  );
}
