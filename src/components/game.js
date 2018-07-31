import React from "react";

import Header from "./header";
import GuessSection from "./guess-section";
import GuessCount from "./guess-count";
import GuessList from "./guess-list";
import InfoModal from "./info-modal";
import { makeGuess, toggleTutorial, newGame } from "../action.js";
import { connect } from "react-redux";

class Game extends React.Component {
  render() {
    if (!this.props.tutorial) {
      return (
        <div>
          <Header
            handleTutorialOn={tutorial => this.props.dispatch(toggleTutorial(true))}
            handleReset={() => this.props.dispatch(newGame())}
          />
          <GuessSection
            handleGuess={guess => this.props.dispatch(makeGuess(guess))}
            feedback={this.props.feedback}
          />
          <GuessCount count={this.props.prevGuess.length} />
          <GuessList guesses={this.props.prevGuess} />
        </div>
      );
    } else {
      return (
        <InfoModal
              handleTutorialOff={tutorial => this.props.dispatch(toggleTutorial(false))}
        />
      )
    }
  }
}

const getFeedback = state => {
  let feedback;
  if (state.currGuess === null) {
    feedback = "Make a Guess!";
  } else if (state.currGuess === state.secretNum) {
    feedback = "Nailed It!";
  } else if (
    Math.abs(state.currGuess - state.secretNum) <= 5 ||
    Math.abs(state.secretNum - state.currGuess) <= 5
  ) {
    feedback = "Hot!";
  } else if (
    Math.abs(state.currGuess - state.secretNum) <= 10 ||
    Math.abs(state.secretNum - state.currGuess) <= 10
  ) {
    feedback = "Kinda Hot.";
  } else if (
    Math.abs(state.currGuess - state.secretNum) <= 15 ||
    Math.abs(state.secretNum - state.currGuess) <= 15
  ) {
    feedback = "Less than warm.";
  } else {
    feedback = "Cold...";
  }
  return feedback;
}

const mapStateToProps = state => ({
  secretNum: state.secretNum,
  currGuess: state.currGuess,
  prevGuess: state.prevGuess,
  tutorial: state.tutorial,
  feedback: getFeedback(state),
});

export default connect(mapStateToProps)(Game);
