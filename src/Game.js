import React, { Component } from "react";
import './Game.css';
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
      guesses: [],
      correctAnswer: Math.round(Math.random() * 100) + 1
    };

    this.newGuess = this.newGuess.bind(this);
    // this.changeFeedback = this.changeFeedback.bind(this);
    // this.displayHelp = this.displayHelp.bind(this) this can be used in place of arrow functions below
  }

  // changeFeedback(newValidationMessage) {
  //   this.setState({
  //     validationMessage: newValidationMessage
  //   });
  // }

  displayHelp(display) {
    this.setState({
      displayHelp: display
    });
  }

  restartGame() {
    this.setState ({
      guesses: [],
      feedback: "Make a guess!",
      correctAnswer: Math.floor(Math.random()*100) + 1
    });
  }

  newGuess(newGuess) {
    var guessesCopy = [...this.state.guesses]; //add a new guess in an array of old guesses
    guessesCopy.push(newGuess);
      // or -> guessCopy = [...this.state.guesses, newGuess]
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
      <div className="game">
        <Header className="form-header" displayHelp={display => this.displayHelp(display)} 
                restartGame={() => this.restartGame()}/>
        <Feedback className="feedback"
          feedbackMessage={this.state.feedback}
          // onClick={this.changeFeedback}
        />
        <GuessForm count={this.state.guesses.length} newGuess={this.newGuess} />

        {this.state.displayHelp ? (
          <InfoSection displayHelp={display => this.displayHelp(display)} />
        ) : null}
      </div>
    );
  }
}
