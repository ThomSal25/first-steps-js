console.log("Hallo Welt"); //erste Eingabe

// float ist Kommawert z.B. 1.3

// 01) Write a String that logs out your full name
/*  Use the concatenation operator to concatenate each 
 letter of your name into a string one by one */

console.log(
  "T" +
    "h" +
    "o" +
    "m" +
    "a" +
    "s" +
    " " +
    "S" +
    "a" +
    "l" +
    "m" +
    "a" +
    "n" +
    "n"
);

/*Basic Operators with Strings
01) Fix the following code snippets
Wrong result: Expected a Number 2 recieved 22
console.log("2" + 2);*/
console.log("2");

/*Wrong result: Output should be true. Make it work.
console.log("test" == "TEST");*/
console.log("test" !== "TEST");

/*Basic Operators with Numbers
01) log a statement that returns 20
 result should be 20
 use all of the 4 Arithmetic operators to get the result*/
console.log((10 * 10) / 4 - 8 + 3);

/*02) Fix the following code snippets
Wrong result: Expected 555 not 855
console.log(600 + 510 / 2);*/
console.log((600 + 510) / 2);

/*Wrong result: Expected false not true
console.log("333" == 333);*/
console.log("333" === 333);

/*Wrong result: Expected true cause both values are greater than or equal
console.log(50 + 2 > 52);*/
console.log(50 + 2 >= 52);

/*Miroboard
1) Erstelle 4 Funktionen, jeweils addieren, subtrahieren, multiplizieren & dividieren von 2 Werten
2) Jede Funktion hat 2 Parameter a & b
3) Jede Funktion soll ihr Ergebnis in den devtools loggen
4) Es soll eine Variable geben, die jeweils mit dem Ergebnis der Funktion 
    aktualisiert wird, wenn eine der 4 Funktionen ausgeführt wird
5) Es soll eine Funktion reset geben, die die Ergebnis-Variable auf 0 zurücksetzt
6) Es soll eine Funktion geben die den aktuellen Wert als Resultat in die Konsole logged.*/

let result = 0;

function add(a, b) {
  result = a + b;
  // console.log(result);
}

function sub(a, b) {
  result = a - b;
  // console.log(result);
}

function multi(a, b) {
  result = a * b;
  // console.log(result);
}

function divi(a, b) {
  result = a / b;
  // console.log(result);
}

function reset() {
  result = 0;
}

function current() {
  console.log(result);
}


add(4, 8);
sub(8, 4);

reset();
current();

multi(5, 9);
current();
reset();
current();