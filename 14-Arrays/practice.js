//Q1
/*
const fruits = ["apple", "banana", "strawberry"];

console.log(fruits[0]);
console.log(fruits.length);

fruits.push("grape");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("watermelon");
console.log(fruits);

fruits.shift();
console.log(fruits);
*/

//Q2
const scores = [85, 92, 78, 96, 88, 71, 90];

let total = 0;

for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    total += scores;

    if (score >= 90) {
        console.log("Pass: " + score + ".");
    } else {
        console.log("Fail: " + score + ".");
    }
}

const average = total / scores.length;
console.log("Average score: " + average.toFixed(2) + ".");