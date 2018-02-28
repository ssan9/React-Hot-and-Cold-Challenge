import React from "react";

import "./GuessForm.css";

export default class GuessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: ""
    };

    this.currentGuess = this.currentGuess.bind(this);
  }

  currentGuess(event) {
    console.log(this.input);
    this.setState({
      guess: event.target.value
    });
  }

  // onSubmit(event) {
  //     event.preventDefault();

  //     if (this.props.newGuess) {
  //       const value = this.input.value;
  //       this.props.newGuess(value);
  //     }
  //     this.input.value = '';
  //     this.input.focus();
  //   }

  render() {
    const guessesArray = this.props.guesses.map((guess, index) => <span key={index}>{guess} </span>);
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
          // onChange={e => this.setState({ guess: Number(e.target.value) })}
          // ref={(input) => this.input = input}
          onChange={this.currentGuess} // is it correct?
        />

        <button type="submit" className="guess-button">
          Guess
        </button>
        <h4 className="count">Guess #{this.props.count}!</h4>
        <div className="green">{guessesArray} </div>
      </form>
    );
  }
}

// onChange={e => props.onChange(e.target.value)}
//        onChange={props.changed}
//        onClick={props.count}
//      />