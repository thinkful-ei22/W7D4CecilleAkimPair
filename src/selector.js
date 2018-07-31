export const getFeedback = state => {
  let feedback;
  if (state.currGuess === null) {
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
  return feedback;
}
