// Assignment 28
//  Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements
//  that check for certain fruits in your array.

// 1.Make a array of your three favorite fruits and call it favorite_fruits.

// 2.Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is
//  in your array, the if block should print a statement, such as You really like bananas!

let favourite_fruits : string[] = ["Mango", "Orange", "Apricot"];

if (favourite_fruits.includes("Mango")) {
    console.log("You really like Mango");
} 
if (favourite_fruits.includes("Orange")) {
    console.log("You really like Orange");
}
if (favourite_fruits.includes("Apricot")) {
    console.log("You really like Apricot");
}
if (favourite_fruits.includes("Apples")) {
    console.log("You really like Apple");
}
if (favourite_fruits.includes("Banana")) {
    console.log("You really like Banana");
}