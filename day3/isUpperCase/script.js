function isUpperCase(word) {
  // your code here
  if (typeof word === "string") {
    if (word === word.toLocaleUpperCase()) {
      return true;
    } else {
      return false;
    }
    
  }
}

// function isUpperCase(word) {
//   if (word === undefined) {
//     return;
//   } else if (word === word.toLocaleUpperCase()) {
//     return true;
//   } else {
//     return false;
//   }
// }
