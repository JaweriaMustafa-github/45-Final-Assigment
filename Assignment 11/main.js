"use strict";
// Assignment 11
// array
// Defines an array of names:
Object.defineProperty(exports, "__esModule", { value: true });
let names = ["Hira", "Haya", "Anaya", "Hoorain", "Fozia", "Shiza"];
// question 11
// for loop
for (let i = 0; i < names.length; i++) {
    console.log(`Hello, ${names[i]} how are you today?`);
}
// for each
names.forEach(name => {
    console.log(`Hello ${name}, would you like to learn some basics of typescript today?`);
});
// for of loop
for (const friends of names) {
    console.log(`Hi dear ${friends}! What are you doing?`);
}
