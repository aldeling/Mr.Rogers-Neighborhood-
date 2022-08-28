// Business Logic

function userInput(number) {
  if ((number.length === 0) || (!Number(number))) {
    return "this is not a valid input";
  }
  return number;
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

function totalInput(number){
  const finalArray = [];
  const first = userInput (number);
  if (first === "this is not a valid input")
    return first;
  const second = stringInput (first);
  for (let index = 0; index <= second.length-1; index +=1) {
    const third = changeInput (second[index]);
    finalArray.push(third);
  }
  return finalArray
}

// UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  let userNumber = document.getElementById("number").value;
  document.getElementById("sentence").innerText = totalInput(userNumber);
}

window.addEventListener("load",function() {
  document.querySelector("form#messageForm").addEventListener("submit", handleFormSubmission);
});