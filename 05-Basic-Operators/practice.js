let x = 10;

console.log(x % 3); // 1
console.log(x ** 2); // 100 

x++;
console.log(x); // 11

x--;
x--;
console.log(x); // 9    

console.log(10 % 2 === 0 ? "Even" : "Odd"); // Even 
console.log(7 % 2 === 0 ? "Even" : "Odd"); // Odd

//-----------------------------

let num = 1;

num ++;
num ++;
num ++;

console.log("현재 num: ", num);
console.log("num의 제곱: ", num ** 2);
console.log("num을 5로 나눈 나머지: ", num % 5);
console.log("num은 " + (num % 2 === 0 ? "짝수" : "홀수"));