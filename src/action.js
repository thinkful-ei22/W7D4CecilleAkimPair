const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess) => ({
  type: MAKE_GUESS,
  guess
})

const GET_FEEDBACK = 'GET_FEEDBACK';
export const getFeedback = (feedback) => ({
    type: GET_FEEDBACK,
    feedback
})

const TOGGLE_TUTORIAL = 'TOGGLE_TUTORIAL';
export const toggleTutorial = (tutorial) => ({
  type: TOGGLE_TUTORIAL,
  tutorial
})

const NEW_GAME = 'NEW_GAME';
export const newGame = (reset) => ({
  type: NEW_GAME,
  reset
})
