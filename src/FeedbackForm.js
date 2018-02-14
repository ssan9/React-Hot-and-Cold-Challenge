import React from 'react';

export class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(feedback);
  }

  render() {
    return (
      <div>
        <select
          id="feedbacks"
          onChange={this.handleChange}>

          <option value="cold">cold</option>
          <option value="hot">hot</option>
          <option value="kinda hot">kinda hot</option>
        </select>
      </div>
    );
  }
}