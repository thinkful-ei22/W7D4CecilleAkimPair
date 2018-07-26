import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currGuess: 0,
      prevGuess: [10, 20, 30, 40]
    }
  }

  addGuess(e) {
    const parsedGuess = parseInt(e.target.userGuess.value, 10);
    this.setState({
      currGuess: parsedGuess,
      prevGuess: [...this.state.prevGuess, parsedGuess]
    })
  }

  onFeedbackGiven(boolean) {
    this.setState({
      feedback: boolean
    })
  }

  render() {
    console.log(this.state)
    return (
        <div>
            <Header />
            <GuessSection addGuess={(e) => {
              e.preventDefault()
              this.addGuess(e)}
            } />
            <GuessCount count={3} />
            <GuessList guesses={this.state.prevGuess} />
        </div>
    );
  }

}
