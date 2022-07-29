import React from "react";

export default function SocialMedia({ icon, link, customClass }) {
  return (
    <a
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      className={customClass}
    >
      <div className="social-media-wrap-icon">{icon}</div>
    </a>
  );
}
