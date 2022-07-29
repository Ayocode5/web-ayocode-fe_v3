import React from "react";

export default function Buttons({ action, tipe, customClass, text, icon }) {
  return (
    <button
      type={tipe}
      onClick={() => action}
      className={customClass}
      variant="primary"
    >
      {text}
      {icon}
    </button>
  );
}
