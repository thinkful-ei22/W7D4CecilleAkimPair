import React from "react";

import GuessForm from "./guess-form";

import "./guess-section.css";

export default function GuessSection(props) {
    return (
      <section>
        <h2 id="feedback">{props.getFeedback}</h2>
        <GuessForm handleGuess={props.handleGuess} />
      </section>
    );
}
