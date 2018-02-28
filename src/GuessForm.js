import React from "react";
import "./GuessForm.css";
import GuessesFeedback from "./GuessesFeedback";

export default class GuessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: ""
    };

    this.currentGuess = this.currentGuess.bind(this);
  }

  currentGuess(event) {
    this.setState({
      guess: event.target.value
    });
  }

  render() {
    return (
      <form
        className="guess-form"
        onSubmit={e => {
          e.preventDefault();
          this.props.newGuess(this.state.guess);
          this.setState({ guess: "" });
        }}
      >
        <input
          className="enter-guess"
          type="number"
          id="guess"
          value={this.state.guess} //to get the value of input field if given beforehand
          name="guess"
          min="1"
          max="100"
          autoComplete="off"
          aria-labelledby="number-guess"
          required
          placeholder="Enter Your Guess"
          onChange={this.currentGuess}
        />

        <button type="submit" className="guess-button">
          Guess
        </button>

        <GuessesFeedback guesses={this.props.guesses} />
      </form>
    );
  }
}
