import React from "react";

import "./Feedback.css";

export default function Feedback(props) {
	/** 
   * Below, we'll use the guessCount to generate a key so that React treats the feedback message 
   * as a DOM change, even when a guess does not change the feedback text.
   * This is necessary for consistent aural feedback via aria-live.
  */
	const key = props.guessesArray;

	let guessAgain;
	if (key != 0) {
		guessAgain = <span className="visuallyhidden">Guess again!</span>;
	}
  return (
    <div className="feedback"
    	key={key}
    	id="feedback"
    	role="status"
    	aria-live="assertive"
    	aria-atomic="true"
    >
      <p>{props.feedbackMessage}</p>
    </div>
  );
}
