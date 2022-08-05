import React from "react";

import "./Brand.modules.scss";

export default function Brand({ logoImage, logoText }) {
  return (
    <>
      {logoImage && logoText ? (
        <>
          <img
            className="image-brand"
            src={logoImage}
            alt={`logo-${logoImage}`}
          />
          <h1 className="text-brand">{logoText}</h1>
        </>
      ) : logoImage ? (
        <img
          className="image-brand"
          src={logoImage}
          alt={`logo-${logoImage}`}
        />
      ) : (
        <h1 className="text-brand">{logoText}</h1>
      )}
    </>
  );
}
