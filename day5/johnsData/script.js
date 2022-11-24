const johnsData = {
  firstName: "John",
  surName: "Doe",
  age: 28,
  city: "Hamburg",
  children: ["Mia", "Fynn"],
  hobbies: ["Football", "Playing Guitar"],
};

function fullName(fName) {
  // your code here
  fName = johnsData.firstName + " " + johnsData.surName;
  return fName;
}

// console.log(Object.entries(johnsData))

function changeJohnsData(propName, propValue) {
  // Your code here
  // console.log(Object.keys(johnsData))
  // console.log(Object.values(johnsData))
  // console.log(Object.entries(johnsData))

  // console.log(propName)
  // console.log(johnsData[propName])
  // console.log(propValue)
  johnsData[propName]=propValue

  if (propName !== propValue) {
    return console.log("Sorry the passed in argument doesn't exists as a property in the johnsData object")
    
  } 
  
}
