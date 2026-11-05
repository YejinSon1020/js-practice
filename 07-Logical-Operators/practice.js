//Q1
/*
console.log(true || false); // true
console.log(false || false); // false
console.log(true && false); // false
console.log(true && true); // true
console.log(!true); // false
console.log(!false); // true

let age = 25;
let hasMembership = false;

if (age >= 18 && hasMembership) {
    console.log("You are eligible for the special offer.");
} else {
    console.log("You are not eligible for the special offer.");
}

if (age >= 18 || hasMembership) {
    console.log("You are eligible for our services.");
}
*/
//Q2

const age = 15;
const hasDrink = false;
const hasMemberCard = true; 

if (age >= 12 && (hasDrink || hasMemberCard)) {
    console.log("You can enter the coffee shop.");
} else {
    console.log("You cannot enter the coffee shop.");
}   