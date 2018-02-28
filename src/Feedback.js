import React from "react";

import "./Feedback.css";

	export default function Feedback(props) {
	  return (
	    <div className="feedback">
	      <p onClick={props.click}>{props.feedbackMessage}</p>
	    </div>
	  );
	}

