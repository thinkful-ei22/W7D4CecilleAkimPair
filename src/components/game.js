import React from "react";

import Header from "./header";
import GuessSection from "./guess-section";
import GuessCount from "./guess-count";
import GuessList from "./guess-list";
import InfoModal from "./info-modal";
import { makeGuess, toggleTutorial, newGame } from "../action.js";
import { getFeedback } from "../selector.js";
import { connect } from "react-redux";

class Game extends React.Component {
  render() {
    if (!this.props.tutorial) {
      return (
        <div>
          <Header
            toggleTutorial={this.props.toggleTutorial}
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
          toggleTutorial={this.props.toggleTutorial}
        />
      )
    }
  }
}

const mapStateToProps = state => ({
  secretNum: state.secretNum,
  currGuess: state.currGuess,
  prevGuess: state.prevGuess,
  tutorial: state.tutorial,
  feedback: getFeedback(state),
});

const mapDispatchToProps = dispatch => ({
  toggleTutorial: () => dispatch(toggleTutorial())
})

export default connect(mapStateToProps, mapDispatchToProps)(Game);
