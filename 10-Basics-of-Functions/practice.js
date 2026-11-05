//Q1
/*
function greet(name) {
    const message = "Hi, " + name + "!";
    return message;
}

function add(a, b){
    return a + b;
}

function sayHello() {
    const local = "i'm local funtion";
    console.log(local);
}

const result1 = greet("Yejin");
const result2 = add(10, 20);

console.log(result1);
console.log(result2);
*/

//Q2

function getMax(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

function profile(name, age){
    return "이름: " + name + ", 나이: " + age;
}

const result1 = getMax(10, 30);
const result2 = profile('Yejin', 20);

console.log(result1);
console.log(result2);