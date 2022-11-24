// for

for (let i = 0; i < 8; i++) { // i++ --> i += 1 oder i= i+1
//   console.log("Hi" + i);
}

let foobarStr = "Foobar";

// -> obr
let count = 0

for (let u = 0; u < foobarStr.length; u++){
    if (/*ungeradeZahl*/ count === 1) {
        console.log(foobarStr[u])
        count = 0
    } else {
        count += 1;
    }
    
}

// let increment = 0

// while (increment < foobarStr.length) {
//     console.log(foobarStr[increment]);
//     increment += 1;
// }



//Array
const attendees = ["Chris", "Mi", "Thomas", "Nina"];
console.log(attendees)
attendees.push("Jana") // item am Ende hinzufügen
console.log(attendees)
attendees.pop() // letztes item entfernen
console.log(attendees)
attendees.shift() // erstes item entfernen
console.log(attendees)

const isMiInArray = attendees.includes("Mi") //Ist Mi in attendees
console.log(isMiInArray)

attendees.reverse()
console.log(attendees) // Reihenfolge umdrehen


console.log("Foobar".split())

const foobarToArray = "Foo bar".split(" ")
console.log(foobarToArray)
foobarToArray.reverse()
console.log(foobarToArray)


for (let item of attendees) {
    //let item = attendees [i]
}
