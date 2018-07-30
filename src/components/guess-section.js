import React from "react";

import GuessForm from "./guess-form";

import "./guess-section.css";

export default class GuessSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <h2 id="feedback">
          {props.getFeedback(this.props.currGuess, this.props.secretNum)}
        </h2>
        <GuessForm addGuess={props.makeGuess} />
      </section>
    );
  }
}
