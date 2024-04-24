// Assignment 29
//  Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code
//  that will print a greeting to each user after they log in to a website. Loop through the array, and print a 
// greeting to each user:

// 1.If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// 2.Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let usernames : string[] = ["admin", "Hira", "Ali", "Urwa", "Noor"];

usernames.forEach((username) => {
    if (username === "admin") {
        console.log("Hello Admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, Thank you for logging in again.`);
    }
});