/*Q1. Identify all errors in the code below and explain the reasons.

const 1name = "Yejin";
let AGE = 28;
AGE = 29;

const COMPANY = "Agoda";
COMPANY = "Google";

var let = "hello";

A1. cannot start with number, 
A2. We cannot declare the variables that already declared with "const"
A3. "let" is reserved words

Q2. Review the conditions below and write code to declare the correct variables.

Conditions:
1. The name is "Son Ye-jin," a value that never changes.
2. The age is 28, but it may change after the birthday passes.
3. The favorite food is "Pizza," but it is subject to change.
4. The company name is "AGODA" and must be declared as a constant.
   (Follow the convention of writing constants in uppercase letters.)

Output Example:
Name: Son Ye-jin
Age: 28
Food: Pizza
Company: AGODA

A. */

const name = "Son, Yejin" ;
let age = 28 ;
let food = "pizza" ;
const COMPANY = "AGODA" ;

console.log("이름: "+ name);
console.log("나이: " + age);
console.log("음식: "+ food);
console.log("회사: " + COMPANY);