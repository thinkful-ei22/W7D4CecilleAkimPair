import React from "react";

import Header from "./header";
import GuessSection from "./guess-section";
import GuessCount from "./guess-count";
import GuessList from "./guess-list";
import InfoModal from "./info-modal";
import { makeGuess } from "../action.js";
import { connect } from "react-redux";

class Game extends React.Component {
  makeGuess(guess) {
    this.props.dispatch(makeGuess(guess))
  }

  // toggleTutorial() {
  //   this.state.tutorial
  //     ? this.setState({ tutorial: false })
  //     : this.setState({ tutorial: true });
  // }
  //
  // reset() {
  //   this.setState({
  //     secretNum: Math.floor(Math.random() * 100) + 1,
  //     currGuess: undefined,
  //     prevGuess: [],
  //     tutorial: false
  //   });
  // }

  render() {
    const currGuess = this.props.currGuess;
    const secretNum = this.props.secretNum;
    const prevGuess = this.props.prevGuess;
    if (this.props.tutorial === true) {
      return <InfoModal toggleTutorial={() => this.toggleTutorial()} />;
    }
    return (
      <div>
        <Header
          toggleTutorial={() => this.toggleTutorial()}
          reset={() => this.reset()}
        />
        <GuessSection
          makeGuess={guess => this.makeGuess(guess)}
          getFeedback={(currGuess, secretNum)}
          currGuess={currGuess}
          secretNum={secretNum}
        />
        <GuessCount count={prevGuess.length} />
        <GuessList guesses={prevGuess} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  secretNum: state.secretNum,
  currGuess: state.currGuess,
  prevGuess: state.prevGuess,
  tutorial: state.tutorial
})

export default connect(mapStateToProps)(Game);
