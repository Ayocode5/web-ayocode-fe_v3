import React from "react";

export default function Tagline({ text }) {
  return (
    <div className="tagline">
      <div className="tagline-brand">
        <span>---------</span>
        <span> &nbsp;&nbsp;Ayocode.id</span>
      </div>
      <h2 className="tagline-text">
        <span>{text}</span>
      </h2>
    </div>
  );
}
