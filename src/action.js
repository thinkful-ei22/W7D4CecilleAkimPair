const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess) => ({
  type: MAKE_GUESS,
  guess
})

const GET_FEEDBACK = 'GET_FEEDBACK';
export const getFeedback = (currGuess, secretNum) => ({

    if (currGuess === undefined) {
      return "Make a Guess!";
    } else if (currGuess === secretNum) {
      return "Nailed It!";
    } else if (
      Math.abs(currGuess - secretNum) <= 5 ||
      Math.abs(secretNum - currGuess) <= 5
    ) {
      return "Hot!";
    } else if (
      Math.abs(currGuess - secretNum) <= 10 ||
      Math.abs(secretNum - currGuess) <= 10
    ) {
      return "Kinda Hot.";
    } else if (
      Math.abs(currGuess - secretNum) <= 15 ||
      Math.abs(secretNum - currGuess) <= 15
    ) {
      return "Less than warm.";
    } else {
      return "Cold...";
    }
})
