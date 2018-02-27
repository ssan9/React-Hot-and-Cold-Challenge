import React from "react";

	export default function Feedback(props) {
	  return (
	    <div className="feedback">
	      <p onClick={props.click}>{props.feedbackMessage}</p>
	    </div>
	  );
	}

