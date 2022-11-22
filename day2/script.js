function greet(username) {
  console.log("Hi " + username);
}

greet("Thomas");

function greet(username) {
  return "Hi " + username;
}
console.log(greet("Chris"));

// 01) log out your favorite music artist / band name and song
/*store the name and the song in a variable
 create a variable that combines both as new string with a seperator like a space or comma.
 variable names should be camelCase*/

const favArtist = "Cynthia Nickschas & Friends";
const favSong = "Tanz";
const space = " - ";

console.log(favArtist + space + favSong);

/* 02) Fix the following code snippets
Wrong result: Expected 3 not undefined
let currentUsers;
currentUsers = 1;
currentUsers = 1;
currentUsers = 1;
console.log(currentUsers);*/

let currentUsers = 0;
currentUsers += 1;
currentUsers += 1;
currentUsers += 1;
console.log(currentUsers);

/*01) Logical Operators
01.1) Compare two conditions
Given:
console.log(25 / 5); // Result: 5
console.log(50 / 10); // Result: 5
Coding Task:
Create one console.log that returns true 
when both division results are equal to 5*/

console.log(25 / 5 === 5 && 50 / 10 === 5);

/*01.2) The opposite value
Given:
let isActive = true;
Coding Task:
Use the logical not Operator to override the 
isActive variable value with the opposite of 
it's current value.*/

let isActive = true; //1xtoggle --> false 2xtoggle --> true ....

function toggle() {
  isActive = !isActive; //toggle --> change on/off
}

toggle();
toggle();

console.log(isActive);

/*02) Functions
02.1) Create a welcome function
function welcome() {}

console.log(welcome());
Coding Task:
 Create a function that returns a welcome message
 to a user. Use two parameters. The result should
 be dynamic. Hi Max, Welcome Frank, Servus Jan.
 Ensure that both parameters exists and they are 
 strings. If not just return "Hello Guest.".*/

function welcome(message, name) {
  if (message !== "" && name !== "") {
    return message + " " + name;
  } else {
    return "Hello Guest";
  }
}

console.log(welcome("Moin", ""));
console.log(welcome("Hi", "Max"));

//Alternative
// function welcome(message="Hi", person="Max") {
// //   message = "Hi";
// //   person = "Max";
// let result = message +" "+ person;

//   if (
//     message !== undefined &&
//     person !== undefined &&
//     typeof message === "string" &&
//     typeof person === "string"
//   ) {
//     return result;
//   } else {
//     return "Hello Guest.";
//   }
// }
// console.log(welcome());
// console.log(welcome("Moin", "Joe"));

/*02) Functions
02.2) Firstname lastname
Given:
let fullName = "";

function setFirstName() {}

function setLastName() {}

function getFullName() {}

console.log(getFullName());
Coding Task:
 Create two functions setFirstName, setLastName to set the first and 
 last name to the fullName variable.
 Add a parameter on both, and check if the parameter exists and is a 
 string.
 Check if the fullName is empty. If it's empty, create a console.log 
 with a warning.
 Create one function getFullName that returns the fullName variable.
 Check if the fullName is empty.
 Ensure that setFirstName and setLastName was executed before.*/

let fullName = "";
let isSetFirstNameExecuted = false;
let isSetLastNameExecuted = false;
// fullName = setFirstName("Thomas") + setLastName("Salmann");

function setFirstName(fName) {
  //Add a parameter on both, and
  if (fName !== undefined && typeof fName === "string") {
    //check if the parameter exists and is a string
    // return fName;
    fullName += fName;
    isSetFirstNameExecuted = true;
    console.log("Test");
  }
}

function setLastName(lName) {
  //Add a parameter on both, and
  if (lName !== undefined && typeof lName === "string") {
    //check if the parameter exists and is a string
    // return lName;
    fullName += lName;
    isSetLastNameExecuted = true;
  }
}

// if (fullName === undefined) {
//   //Check if the fullName is empty
//   console.log("Achtung, Eintrag fehlt!"); //If it's empty, create a console.log with a warning
// }

function getFullName() {
  console.log(isSetFirstNameExecuted);
  console.log(isSetLastNameExecuted);
    if (fullName === "") {
        if (isSetFirstNameExecuted === false || isSetLastNameExecuted === false) {
          return "Vor- oder Nachname fehlt!"
      }
    //Check if the fullName is empty
    return "Achtung, Eintrag fehlt!"; //If it's empty, create a console.log with a warning
    }
    else {
    return fullName;
    //   console.log("Test2");
  }
}
setFirstName("Thomas");
setLastName();
console.log(getFullName());
