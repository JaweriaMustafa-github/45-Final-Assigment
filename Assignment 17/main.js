"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Assignment no 17
let favLocation = ["Turkey", "Saudi Arab", "Malaysia", "Pakistan", "Switzerland"];
// print in original order
console.log("Original order:", favLocation);
// Print array in alphabetical order without modifying the actual list.
console.log("Alphabetical order:", favLocation.slice().sort());
// array is still in its original order by printing it.
console.log("Original order:", favLocation);
//  Print array in reverse alphabetical order without changing the order of the original list
console.log("Reverse Alphabetical order:", favLocation.slice().sort().reverse());
// Show that array is still in its original order by printing it again.
console.log("Original order:", favLocation);
// Reverse the order of list. Print the array to show that its order has changed.
console.log("Reverse order changed");
favLocation.reverse();
console.log(favLocation);
//  Reverse the order of list again. Print the list to show it’s back to its original order.
console.log("Original order:");
favLocation.reverse();
console.log(favLocation);
//  Sort the array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
favLocation.sort();
console.log("Alphabetical order:", favLocation);
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order
//  has changed.
favLocation.sort().reverse();
console.log("Reverse Alphabetical order:", favLocation);
