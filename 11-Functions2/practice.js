//Q1
/*
console.log(sayHi("Yejin"));

function sayHi(name) {
    return "Hi, " + name;
}

// => no error

console.log(sayBye("Yejin"));

const sayBye = function(name) {
    return "Bye, " + name;
}
// => error

*/

//Q2

let add = (a, b) => a + b;

let greet = (name) => "Hello, " + name;

let square = (x) => x * x;

let printHello = () => {
    console.log("Hello!");
};

console.log(add(3,5));
console.log(greet("Yejin"));
console.log(square(4));
printHello();