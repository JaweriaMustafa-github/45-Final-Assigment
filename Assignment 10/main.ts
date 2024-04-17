// Assignment 10
// array
// Defines an array of names:

let names : string[] = ["Hira", "Haya", "Anaya", "Hoorain", "Fozia", "Shiza"];

// loop

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// for each

names.forEach(name => {
    console.log(name);
    
});

// for of loop
for (const friends of names) {
    console.log(friends);
}