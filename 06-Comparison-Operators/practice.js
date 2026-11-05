// Q1.

console.log( 1 == "1" ); // true
console.log( 1 === "1" ); // false
console.log(1 !== 2); // true
console.log("a" > "b"); // false
console.log("a" < "b"); // true

let score = 75;

if (score >=90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else {
    console.log("D");
}

// Q2.

let age = prompt("How old are you?", 0);
age = Number(age);

if (age >= 19) {
    console.log("You are an adult.");
} else if (age >= 14 && age <= 18) {
    console.log("You are a teenager.");
} else {
    console.log("You are a child.");        
}