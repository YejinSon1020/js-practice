//Q1
/*
const user = {
    name: "Yejin",
    age: 29,
    company: "Agoda",
    isWorking: true
};

console.log(user.name);
console.log(user["age"]);

user.age = 10;
user.city = "Daegu";
delete user.isWorking;

console.log(user.age);
console.log(user.city);
console.log(user.isWorking);
console.log("company" in user);
console.log("isWorking" in user);
*/

//Q2

const product = {
    name: "HotelBooking",
    price: 150000,
    category: "Accomodation",
    available: true
}

for (let key in product){
    console.log(product[key]);
}

for (let key in product){
    console.log(key + ":" + product[key]);
}