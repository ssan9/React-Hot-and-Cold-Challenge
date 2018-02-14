import React from 'react';

export function SubmitForm(props) {
  <form onSubmit={props.changeGuess}>
    <input type="number" id="guess" value={props.value} name="guess" min="1" max="100" autoComplete="off" aria-labelledby="number-guess" required
     placeholder="Enter Your Guess" onChange={e => props.onChange(e.target.value)} />
    <button type="submit">Guess</button>
    <h4>Guess #{props.count}!</h4>
  </form>
  
};