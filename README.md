# Mr.Rogers Neighborhood

### Contributors
  * Athea DeLing

### Description
This is a web application takes a users inputted number and changes those specific numbers with 1 in to the word cute.

### Technologies Used
  * HTML
  * CSS
  * JavaScript

### Setup Instructions
There are a couple ways you can choose to setup this web application you can,
  * go to the repository fork the Mr.Rogers-Neighborhood- and clone it to your personal computer.
  * Once you open it click on index.html to then open on your default browser.
  * go to the [GitHub](will add at end) pages like and open the web application there

### Known Bugs
There are currently no known bugs in this application

### Tests
Describes: userInput()

Test: It should return an error message if there is no information inputted
Code:
const number = ""
userInput(number)
Expected Output: this is not a valid input

Test: It should return an error message if input has a letter
Code:
const number = "a"
userInput(number)
Expected Output: this is not a valid input

Test: It should return the number when the input is a number
Code:
const number = "1"
userInput(number)
Expected Output: "1"

Describes: stringInput()

Test: It should turn the input 3 into a single array starting at 0 increasing to 3
Code:
const number = "3"
stringInput(number)
Expected Output: [0, 1, 2, 3]

Test: It should turn each array value into a string
Code:
const number = "3"
stringInput(number)
Expected Output: ["0", "1", "2", "3"]

Describes changeInput()

Test: It should return Beep! when number is 1
Code:
const number = "1"
changeInput(number)
Expected Output: "Beep!"

Test: It should return Boop! when number is 2
Code:
const number = "2"
changeInput(number)
Expected Output: "Boop!"

Test: It should return Won't you be my neighbor? when number is 3
Code:
const number = "3"
changeInput(number)
Expected Output: "Won't you be my neighbor?"

Test: It should return number when user inputs a number that is not 1
Code:
const number = "4"
changeInput(number)
Expected Output: "4"

Test: It should return Beep! when any number includes 1
Code:
const number = "10"
changeInput(number)
Expected Output: "Beep!"

Test: It should return Boop! when any number includes 2
Code:
const number = "20"
changeInput(number)
Expected Output: "Boop!"

Test: It should return Won't you be my neighbor? when any number includes 3
Code:
const number = "30"
changeInput(number)
Expected Output: "Won't you be my neighbor?"

Test: It should return Boop! when there is a 2 or a 1 in a number
Code:
const number = "12"
changeInput(number)
Expected Output: "Boop!"

Test: It should return Won't you be my neighbor? when there is a 1, 2, or 3 in a number
Code:
const number = "123"
changeInput(number)
Expected Output: "Won't you be my neighbor?"

Describes: totalInput()

Test: It should return an array containing strings from 0 up to the value entered. With values containing 3 it should return "Won't you be my neighbor?". If the number contains 2 it should return "Boop!". If the number contains 1 it should return "Beep!".
Code:
const number = "5"
totalInput(number)
Expected Output: ["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5"]

### License
[GNU](https://choosealicense.com/licenses/gpl-3.0/) Copyright (c) 08/19/2022 Athea DeLing