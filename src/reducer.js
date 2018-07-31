const initialState = {
  secretNum: Math.floor(Math.random() * 100) + 1,
  currGuess: null,
  prevGuess: [],
  tutorial: false,
  feedback: 'Take a Guess!'
}

export const reducer = (state=initialState, action) => {
  if(action.type === 'MAKE_GUESS') {
    return Object.assign({}, state, {
      currGuess: action.guess,
      prevGuess: [...state.prevGuess, action.guess]
    })
  } else if(action.type === 'GET_FEEDBACK') {
    let feedback;
      if (state.currGuess === undefined) {
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
      return Object.assign({}, state, {
        feedback: feedback
      })
    } else if(action.type === 'TOGGLE_TUTORIAL') {
        return Object.assign({}, state, {
          tutorial: action.tutorial
        })
    } else if(action.type === 'NEW_GAME') {
        return Object.assign({}, state, {
          secretNum: Math.floor(Math.random() * 100) + 1,
          currGuess: null,
          prevGuess: [],
          tutorial: false
        })
    }
      return state;
    }
