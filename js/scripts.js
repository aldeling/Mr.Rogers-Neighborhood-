// Business Logic

function userInput(number) {
  if ((number.length === 0) || (!Number(number))) {
    return "this is not a valid input";
  }
  return "this is a valid input";
}
