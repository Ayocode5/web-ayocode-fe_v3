import React from "react";

import "./Feedback.modules.scss";
export default function Feedback({ feedback, positionRespondent, respondent }) {
  return (
    <div className="portfolio__list-feedback-item">
      <p className="feedback">{feedback}</p>
      <div className="feedback-respondent">
        <h4>{positionRespondent}</h4>
        <p>{respondent}</p>
      </div>
    </div>
  );
}
