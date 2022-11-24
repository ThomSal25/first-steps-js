function isPalindrome(str) {
  // Your code
  // console.log(str);
  str = str.toLocaleLowerCase();
  // console.log(str);
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    // console.log(str)
    newStr += str[i];
    // console.log(newStr, str);
    
  }
  // if (str === newStr) {
  //   return true;
  // } else {
  //   return false;
  // }

  return str === newStr
  

  
}
