import React from "react";

import "./GuessesFeedback.css";

export default function GuessesFeedback(props) {
  const guessesArray = props.guesses.map((guess, index) => (
    <span key={index}>{guess} </span>
  ));

  return (
    <div className="">
      <h4 className="count">Guess #{props.guesses.length}!</h4>
      <div className="green">{guessesArray} </div>
    </div>
  );
}
