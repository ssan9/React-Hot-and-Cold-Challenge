import React, { Component } from "react";
// import './Guess.css';
import Header from "./Header";
import Feedback from "./Feedback";
import GuessForm from "./GuessForm";
import InfoSection from "./InfoSection";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: "Make a guess!",
      displayHelp: false,
      guesses: [34, 43],
      correctAnswer: Math.round(Math.random() * 100) + 1
    };

    this.newGuess = this.newGuess.bind(this);
    this.changeFeedback = this.changeFeedback.bind(this);
  }

  changeFeedback(newValidationMessage) {
    this.setState({
      validationMessage: newValidationMessage
    });
  }

  displayHelp(display) {
    this.setState({
      displayHelp: display
    });
  }

  newGuess(newGuess) {
    var guessesCopy = [...this.state.guesses];
    guessesCopy.push(newGuess);

    const difference = Math.abs(newGuess - this.state.correctAnswer);

    let feedback;
    if (difference >= 50) {
      feedback = "You're Ice Cold...";
    } else if (difference >= 30) {
      feedback = "You're Cold...";
    } else if (difference >= 10) {
      feedback = "You're Warm.";
    } else if (difference >= 1) {
      feedback = "You're Hot!";
    } else {
      feedback = "You got it!";
    }

    this.setState({
      guesses: guessesCopy,
      feedback: feedback
    });
  }

  render() {
    return (
      <div>
        <Header displayHelp={display => this.displayHelp(display)} />
        <Feedback
          feedbackMessage={this.state.feedback}
          onClick={this.changeFeedback}
        />
        <GuessForm count={this.state.guesses.length} newGuess={this.newGuess} />

        {this.state.displayHelp ? (
          <InfoSection displayHelp={display => this.displayHelp(display)} />
        ) : null}
      </div>
    );
  }
}
