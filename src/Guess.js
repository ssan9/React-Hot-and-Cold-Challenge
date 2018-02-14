import React, { Component } from 'react';
import './Guess.css';
import Header from './header';
import FeedbackForm from './feedback-form.css';
import SubmitForm from './Hello';
import InfoSection from './info-section';

export default class Guess extends React.Component {
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
      this.setState({ feedback: 'Please enter a valid number' });
      return;
    }

const difference = Math.abs(guess - this.state.correctAnswer);

let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }

changeGuess(newGuess) {
    this.setState ({
      guess: newGuess
    })
  }

changeFeedback(newFeedback) {
    this.setState({
      feedback: newFeedback
    })
  }

  changeCount(newCount) {
    this.setState ({
      count: newCount
    })
  }

  render() {
    return (
      <div>
        <header />
          <FeedbackForm onClick={this.changeFeedback} />
          <SubmitForm value={this.state.guess} onChange={this.changeGuess}  />
          <SubmitForm value={this.state.count} onChange={this.changeCount}  />  
      </div>  
    )
  }

}