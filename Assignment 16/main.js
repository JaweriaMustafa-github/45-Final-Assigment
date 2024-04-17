"use strict";
// Assignment 15
let guestList = ["Linta", "Fiza", "Anaya"];
// // question 15
// console.log("Great News! we found a biger table.");
// // add something in the beginning of the array
// // unshift()
// guestList.unshift("Anum");
// // splice()
// guestList.splice(Math.floor(guestList.length/2),0, "Hoorain")
// // push()
// guestList.push("Iqra");
// // foreach
// guestList.forEach(guests => {
//     console.log(`Dear ${guests}, You are cordially invited to dinner!`); 
// });
// question 16
// print message
console.log("Unfortunately! the new dinner table won't arrive so we can invite only 2 guests.");
// unshift 
guestList.unshift("Haya", "Anum");
// print message updted list
console.log("Updated guest list is :", guestList);
// remove guest from the list
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    if (removedGuest !== undefined) {
        console.log(`Sorry ${removedGuest}, We cann't invite you.`);
    }
}
// print a message to the remaining guests that you are invited.
// foreach
guestList.forEach(guests => {
    console.log(`Dear ${guests}! You are still invited to dinner.`);
});
// remove 2 names from the list
guestList.splice(0, guestList.length);
// print updated empty list
console.log("Updated list of guest is:", guestList);
