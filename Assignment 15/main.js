// Assignment 15
var guestList = ["Linta", "Fiza", "Anaya"];
// question 15
console.log("Great News! we found a biger table.");
// add something in the beginning of the array
// unshift()
guestList.unshift("Anum");
// splice()
guestList.splice(Math.floor(guestList.length / 2), 0, "Hoorain");
// push()
guestList.push("Iqra");
// foreach
guestList.forEach(function (guests) {
    console.log("Dear ".concat(guests, ", You are cordially invited to dinner!"));
});
