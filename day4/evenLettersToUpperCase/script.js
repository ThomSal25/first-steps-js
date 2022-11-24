function evenLettersToUpperCase(str) {
  // your code
  //   if (str && typeof str === "string") {
  //     //alle Buchstaben zu lower Case
  //     str = str.toLocaleLowerCase();

  //     let result = "";
  //     //for Schleife um jeden einzelnen Buchstaben umzuwandeln wenn nötig
  //     for (let i = 0; i <= str.length-1; i++) {
  //       // Code ausführen bei jeder geraden Zahl
  //       //wenn i gerade Zahl ist
  //       if (i % 2 === 1) {
  //         result += str[i].toLocaleUpperCase();
  //       } else {
  //         result += str[i];
  //       }
  //     }
  //     return result;
  //   }
  // }

  if (typeof str === "string") {
    str = str.toLocaleLowerCase();
    let status = 0;
    let newWord = "";
    for (i = 0; i < str.length; i++){
      status += 1

      // console.log(up)
      // console.log(str[i].toLocaleUpperCase())
      if (status===2) {
        status=1
        // console.log(up)
        newWord += str[i].toLocaleUpperCase();
        // console.log(str[i])

      } else {
        status= 2
      newWord += str[i]
      }
    }
    // console.log(up);
    // console.log(str);
    console.log(newWord)
    return newWord;
    
  }
}
