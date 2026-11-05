//Q1. case 1: break available
/*
let fruit = "banana";

switch (fruit) {
    case "apple":
        console.log("Apple");
        break;
    case "banana":
        console.log("Banana");
        break;
    case "orange":
        console.log("Orange");
        break;
    default:
        console.log("Unknown fruit");
}

//case 2: no break available

let num = 2;

switch(num) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    default:
        console.log("Unknown number");
}
*/


// Q2

let days = 13

switch(days) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6 || 7:
        console.log("Happy weekend")
        break;
    default : 
        console.log("Wrong input")
}