import React from "react";

// export default class FeedbackForm extends React.Component {
//   constructor(props) {
//     super(props);

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     const name = e.target.value;
//     this.props.onChange(name);
//   }

//   render() {
//     return (
//       <div>
//         <select
//           id="feedbacks"
//           onChange={this.handleChange}>

//           <option value="cold">cold</option>
//           <option value="hot">hot</option>
//           <option value="kinda hot">kinda hot</option>
//         </select>
//       </div>
//     );
//   }
// }

export default function Validation(props) {
  return (
    <div className="Validation">
      <p onClick={props.click}>{props.validationMessage}</p>
    </div>
  );
}

// const difference = Math.abs(guess - this.state.correctAnswer);

// let validationMessage;

//       if(difference >= 50) {
//         validationMessage = 'Ice Cold';
//       }

//       else if(difference >= 30) {
//         validationMessage = 'Cold'
//       }

//       else if(difference >= 10) {
//         validationMessage = 'Kinda Hot'
//       }

//       else if(difference >= 1) {
//         validationMessage = 'Hot'
//       }

//       else {
//         validationMessage = "You got it right!";
//       }
//     }
