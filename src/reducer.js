const initialState = {
  secretNum: Math.floor(Math.random() * 100) + 1,
  currGuess: null,
  prevGuess: [],
  tutorial: false,
}

export const reducer = (state=initialState, action) => {
  if(action.type === 'MAKE_GUESS') {
    return Object.assign({}, state, {
      currGuess: action.guess,
      prevGuess: [...state.prevGuess, action.guess]
    })
  } else if(action.type === 'TOGGLE_TUTORIAL') {
    return Object.assign({}, state, { tutorial: !state.tutorial })
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
