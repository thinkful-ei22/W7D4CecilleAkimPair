import React from "react";

import Header from "./header";
import GuessSection from "./guess-section";
import GuessCount from "./guess-count";
import GuessList from "./guess-list";
import InfoModal from "./info-modal";

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secretNum: Math.floor(Math.random() * 100) + 1,
      currGuess: undefined,
      prevGuess: [],
      tutorial: false
    };
  }

  addGuess(e) {
    const parsedGuess = parseInt(e.target.userGuess.value, 10);
    if (parsedGuess > 100 || parsedGuess < 0) {
      return alert("Please choose a number from 0-100");
    }
    this.setState({
      currGuess: parsedGuess,
      prevGuess: [...this.state.prevGuess, parsedGuess]
    });
  }

  onFeedbackGiven(boolean) {
    this.setState({
      feedback: boolean
    });
  }

  openTutorial() {
    this.setState({
      tutorial: true
    });
  }

  closeTutorial() {
    this.setState({
      tutorial: false
    });
  }

  reset() {
    this.setState({
      secretNum: Math.floor(Math.random() * 100) + 1,
      currGuess: undefined,
      prevGuess: [],
      tutorial: false
    });
  }

  render() {
    console.log(this.state);
    console.log(this.state.secretNum);

    const currGuess = this.state.currGuess;
    const secretNum = this.state.secretNum;
    const prevGuess = this.state.prevGuess;

    if (this.state.tutorial === true) {
      return <InfoModal closeTutorial={() => this.closeTutorial()} />;
    }
    return (
      <div>
        <Header
          openTutorial={() => this.openTutorial()}
          reset={() => this.reset()}
        />
        <GuessSection
          addGuess={e => {
            e.preventDefault();
            this.addGuess(e);
          }}
          currGuess={currGuess}
          secretNum={secretNum}
        />
        <GuessCount count={prevGuess.length} />
        <GuessList guesses={this.state.prevGuess} />
      </div>
    );
  }
}
