import React from "react";

export default class GuessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: 0
    };
  }

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.newGuess(this.state.guess);
        }}
      >
        <input
          type="number"
          id="guess"
          value={this.props.value}
          name="guess"
          min="1"
          max="100"
          autoComplete="off"
          aria-labelledby="number-guess"
          required
          placeholder="Enter Your Guess"
          onChange={e => this.setState({ guess: Number(e.target.value) })}
        />

        <button type="submit">Guess</button>
        <h4>Guess #{this.props.count}!</h4>
      </form>
    );
  }
}

// onChange={e => props.onChange(e.target.value)}
//        onChange={props.changed}
//        onClick={props.count}
//      />
