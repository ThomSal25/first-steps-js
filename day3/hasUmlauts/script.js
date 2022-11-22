function isUpperCase(word) {
  // your code
  if (typeof word === "string") {
    word = word.toLocaleLowerCase();
    if (
      word.includes("ä") ||
      word.includes("ö") ||
      word.includes("ü") ||
      word.includes("ß")
    ) {
      return true;
    } else {
      return false;
    }
  }
}
