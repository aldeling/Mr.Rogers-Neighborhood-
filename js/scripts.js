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
    const indexCopy = index;
    let stringNumber = indexCopy.toString();
    stringArray.push(stringNumber);
   }
   return stringArray;
}


function changeInput(number) {
  if (number.includes("3")) {
    return "Won't you be my neighbor?";
  } else if (number.includes("2")) {
    return "Boop!"
  } else if (number.includes("1")) {
    return "Beep!"
  }
  return number
}

// UI Logic

function handleFormSubmission() {
  event.preventDefault();
  window.addEventListener
}