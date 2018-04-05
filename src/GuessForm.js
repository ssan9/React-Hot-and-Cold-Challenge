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
          this.props.newGuess(this.state.guess); //this.state because this is the parent component for guess. In stateful components props are paased as 'this.props'.
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

// We have passed the props from the parent component (Game) to the children
// guesses are defined in parent component and we are passing it to children using props Eg, GuessFeedback guesses here and in GuessesFeedback, as props.guesses.length
// GuessForm passes GuessFeedback component using props because it is not a parent component. 
