import React from "react";

import "./Feedback.css";

export default function Feedback(props) {
  return (
    <div className="feedback">
      <p>{props.feedbackMessage}</p>
    </div>
  );
}
