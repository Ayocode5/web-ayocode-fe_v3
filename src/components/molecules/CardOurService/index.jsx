import React from "react";

export default function CardOurService({
  srcImg,
  title,
  desc,
  listBadage,
  id,
}) {
  // check window width is greater than 834px (tablet)
  // const isTablet = useMediaQuery(834);

  return (
    <div className={`services__item item-${id}`}>
      <div className="services__item-header">
        <img src={srcImg} alt={title} />
      </div>

      <div className="services__item-content">
        <h4>{title}</h4>
        <p>{desc}</p>
        <div className="services__item-list-badage">
          {listBadage.map((badage) => (
            <div key={badage.id} className="services__item-badage">
              <img src={badage.icon} alt={`badage-${id}`} />
              <p>{badage.descBadage}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
