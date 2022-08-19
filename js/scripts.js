// Business Logic

function userInput(number) {
  if ((number.length === 0) || (!Number(number))) {
    return "this is not a valid input";
  }
  return "this is a valid input";
}

// function countingInput(number) {
//   const countingArray = [String(index)];
//   for (let index = 0; index <= number.length; index += 1) {
//   }
//   return countingArray;
// }

function stringInput(number) {
  const stringArray = number.split("");
}