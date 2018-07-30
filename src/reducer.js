const initialState = {
  secretNum: Math.floor(Math.random() * 100) + 1,
  currGuess: undefined,
  prevGuess: [],
  tutorial: false,
  feedback: ''
}

export const reducer = (state=initialState, action) => {
  if(action.type === 'MAKE_GUESS') {
    return Object.assign({}, state, {
      prevGuess: [...state.prevGuess, action.guess]
    })
  } else if(action.type === 'GET_FEEDBACK') {
    return Object.assign({}, state, {
      feedback: action.feedback
    })
  }
  return state;
}
