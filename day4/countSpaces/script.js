function countSpaces(str) {
  // your code
  if (typeof str === "string") {
    const spaces = str.split(" ");
    // console.log(spaces)
    // console.log(spaces.length)
    return spaces.length - 1;
    // return str.length;
  }
}
