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
