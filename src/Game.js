import React, { Component } from "react";
// import './Guess.css';
import Header from "./Header";
import Validation from "./FeedbackForm";
import SubmitForm from "./SubmitForm";
import InfoSection from "./InfoSection";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: 0,
      guess: [],
      currentCount: 0,
      correctAnswer: Math.round(Math.random() * 100) + 1
    };

    this.changeGuess = this.changeGuess.bind(this);
    this.changeFeedback = this.changeFeedback.bind(this);
    this.changeCount = this.changeCount.bind(this);
  }

  makeGuess(guess) {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({ feedback: "Please enter a valid number" });
      return;
    }

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
  // changeGuess(event) {
  //     this.setState({
  //       currentGuess: event.target.value
  //     });
  //   }

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
  changeGuess(newGuess) {
    this.setState({
      guess: newGuess
    });
  }

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

  render() {
    return (
      <div>
        <Header />
        <Validation onClick={this.changeFeedback} />
        <SubmitForm
          value={this.state.guess}
          onChange={this.changeGuess}
          value={this.state.count}
          onChange={this.changeCount}
        />
        <InfoSection />
      </div>
    );
  }
}
