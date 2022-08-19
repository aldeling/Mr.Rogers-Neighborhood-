// Business Logic

function userInput(number) {
  if ((number.length === 0) || (!Number(number))) {
    return "this is not a valid input";
  }
  return "this is a valid input";
}

function countingInput(number) {
  let countingArray = [];
  for (let index = 0; index <= 3; index += 1) {
    countingArray.push(index);
  }
}
