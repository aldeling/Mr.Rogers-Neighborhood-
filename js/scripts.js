// Business Logic

function userInput(number) {
  if ((number.length === 0) || (!Number(number))) {
    return "this is not a valid input";
  }
  return "this is a valid input";
}

function stringInput(number) {
  const stringArray = [];
  for (let index = 0; index <= number; index += 1) {
    stringArray.push(index)
   }
   return stringArray;
}

// function changeInput(number) {
//   document.getElementById(input)
//   if (stringArray === 1) {
//     stringArray = "Beep!"
//   }
// }