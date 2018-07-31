const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess) => ({
  type: MAKE_GUESS,
  guess: parseInt(guess, 10)
})

const TOGGLE_TUTORIAL = 'TOGGLE_TUTORIAL';
export const toggleTutorial = () => ({
  type: TOGGLE_TUTORIAL,
})

const NEW_GAME = 'NEW_GAME';
export const newGame = (reset) => ({
  type: NEW_GAME,
  reset
})
