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
  * go to the repository fork the Mr.Rogers-Neighborhood- and clone it to your personal computer
  * go to the [GitHub](will add at end) pages like and open the web application there

### Known Bugs
There are currently no known bugs in this application

### Tests
Describes: userInput()

Test: It should return false if there is no information inputted
Code:
const number = ""
userInput (number)
Expected Output: this is not a valid input

Test: It should return false if input has a letter
Code:
const number = "a"
userInput (number)
Expected Output: this is not a valid input

Test: It should return true when the input is a number
Code:
const number = "1"
userInput (number)
Expected Output: this is a valid input

Describes: stringInput()

Test: It should turn the input 3 into a single array starting at 0 increasing to 3
Code:
const number = "3"
stringInput (number)
Expected Output: [0, 1, 2, 3]

Test: It should turn each array value into a string
Code:
const number = "3"
stringInput (number)
Expected Output: ["0", "1", "2", "3"]

Describes changeInput ()

Test: It should return Beep! when number is 1
Code:
const number = "1"
changeInput (number)
Expected Output: "Beep!"

Test: It should return Boop! when number is 2
Code:
const number = "2"
changeInput (number)
Expected Output: "Boop!"

Test: It should return Won't you be my neighbor? when number is 3
Code:
const number = "3"
changeInput (number)
Expected Output: "Won't you be my neighbor?"

Test: It should return number when user inputs a number that is not 1
Code:
const number = "4"
changeInput (number)
Expected Output: "4"

Test: It should return Beep! when any number includes 1
Code:
const number = "10"
changeInput (number)
Expected Output: "Beep!"

Test: It should return Boop! when any number includes 2
Code:
const number = "22"
changeInput (number)
Expected Output: "Boop!"

### License
[GNU](https://choosealicense.com/licenses/gpl-3.0/) Copyright (c) 08/19/2022 Athea DeLing