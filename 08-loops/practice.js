//Q1

/*
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
} output: 1, 2, 4, 5 
*/

/*
let num = 1;
while (num <= 10) {
    if (num % 3 === 0) {
        console.log(num);
    }
    num++;
}
*/

/*
let count = 0;
do {
    console.log("실행: " + count);
    count++; 
} while (count < 3);
 */

//Q2
let sum = 0;
for(let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
        sum += i;
    }
}   

console.log("짝수의 합: " + sum);