import React from "react";

import GuessForm from "./guess-form";

import "./guess-section.css";

export default class GuessSection extends React.Component {
  constructor(props) {
    super(props);
  }

  feedback(currGuess, secretNum) {
    console.log(`BANANA currGuess = ${currGuess}, secretNum ${secretNum}`);
    if (currGuess === undefined) {
      return "Make a Guess!";
    } else if (currGuess === secretNum) {
      return "Nailed It!";
    } else if (
      Math.abs(currGuess - secretNum) <= 5 ||
      Math.abs(secretNum - currGuess) <= 5
    ) {
      return "Hot!";
    } else if (
      Math.abs(currGuess - secretNum) <= 10 ||
      Math.abs(secretNum - currGuess) <= 10
    ) {
      return "Kinda Hot.";
    } else if (
      Math.abs(currGuess - secretNum) <= 15 ||
      Math.abs(secretNum - currGuess) <= 15
    ) {
      return "Less than warm.";
    } else {
      return "Cold...";
    }
  }

  render() {
    return (
      <section>
        <h2 id="feedback">
          {this.feedback(this.props.currGuess, this.props.secretNum)}
        </h2>
        <GuessForm addGuess={this.props.addGuess} />
      </section>
    );
  }
}
