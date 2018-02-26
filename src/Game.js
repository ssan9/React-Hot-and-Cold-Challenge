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
      displayHelp: false,
      guesses: [34, 43],
      correctAnswer: Math.round(Math.random() * 100) + 1
    };

    this.newGuess = this.newGuess.bind(this);
    this.changeFeedback = this.changeFeedback.bind(this);
    this.changeCount = this.changeCount.bind(this);
  }

  makeGuess(guess) {
    guess = parseInt(guess, 10);

    const difference = Math.abs(guess - this.state.correctAnswer);

    //   let feedback;
    //   if (difference >= 50) {
    //     feedback = "You're Ice Cold...";
    //   } else if (difference >= 30) {
    //     feedback = "You're Cold...";
    //   } else if (difference >= 10) {
    //     feedback = "You're Warm.";
    //   } else if (difference >= 1) {
    //     feedback = "You're Hot!";
    //   } else {
    //     feedback = "You got it!";
    //   }
    // }
    let validationMessage;

    if (difference >= 50) {
      validationMessage = "Ice Cold";
    } else if (difference >= 30) {
      validationMessage = "Cold";
    } else if (difference >= 10) {
      validationMessage = "Kinda Hot";
    } else if (difference >= 1) {
      validationMessage = "Hot";
    } else {
      validationMessage = "You got it right!";
    }
  }

  //   changeFeedback(newValidationMessage) {
  //     this.setState({
  //       validationMessage: newValidationMessage
  //     });
  //   }

  //   changeCount(newCount) {
  //     this.setState({
  //       currentCount: newCount
  //     });
  //   }

  //   render() {
  //     return (
  //       <div>
  //         <Header />
  //         <Validation onClick={this.changeFeedback} />
  //         <SubmitForm value={this.state.currentGuess} changed={this.changeGuess}
  //                      value={this.state.currentCount} click={this.changeCount} />
  //         <InfoSection />
  //       </div>
  //     );
  //   }
  // }

  changeFeedback(newValidationMessage) {
    this.setState({
      validationMessage: newValidationMessage
    });
  }

  changeCount(newCount) {
    this.setState({
      count: newCount
    });
  }
  displayHelp(display) {
    this.setState({
      displayHelp: display
    });
  }

  newGuess(newGuess) {
    this.setState({
      guesses: [...this.state.guesses, newGuess]
    });
  }

  render() {
    return (
      <div>
        <Header displayHelp={display => this.displayHelp(display)} />
        <Feedback
          feedbackMessage={"FEEDBACK_HERE"}
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
