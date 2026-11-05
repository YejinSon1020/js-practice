/* Q1.
console.log(Number('123')); // 123  
console.log(Number("")); // 0
console.log(Number("Hello")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null));  // 0
console.log(Number(undefined)); // NaN

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean(NaN)); // false

console.log(String(123)); // "123"
console.log(String(true)); // "true"
*/


const MathScore = "20" ;
const EngScore = "30" ;

let totalScore = Number(MathScore) + Number(EngScore);
console.log("Total Score: " + totalScore);
