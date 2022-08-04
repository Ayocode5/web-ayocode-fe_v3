import React from "react";
import "./ItemPortfolio.modules.scss";

export default function ItemPortfolio({ id, projectName, url, urlImage }) {
  return (
    <div className="portfolio__list-item">
      <figure>
        <figcaption>
          <p>{projectName}</p>
          <a href={url} rel="noreferrer noopener">
            See Details Projects
          </a>
        </figcaption>
        <img src={urlImage} alt={projectName} />
      </figure>
    </div>
  );
}
