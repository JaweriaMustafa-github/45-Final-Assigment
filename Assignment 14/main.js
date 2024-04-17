"use strict";
// Assignment 14
let guestList = ["Linta", "Haya", "Fiza"];
// Invite each guest for dinner
// guestList.forEach(guest => {
//     console.log(`Dear ${guest}, I want to invite you to dinner today!`);
// });
// map
// invite guest
// let invitation : string[] = guestList.map(guest => `Dear ${guest}, I want to invite you to dinner today!`)
// console.log(invitation);
// // for each
// invitation.forEach(invitations => {
//     console.log(invitations);
// });
// print the name who can not make the dinner
let unableToMakeDinner = guestList.splice(1, 1)[0];
console.log(`${unableToMakeDinner} cann't make the dinner`);
// push
guestList.push("Anaya");
// print a message
guestList.forEach(guests => {
    console.log(`Dear ${guests}, you are cordially invited to the dinner`);
});
