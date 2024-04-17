// Assignment 12
// array

let transportationMode : string[] = ["Motorcycle", "Car", "Bicycle", "Bus", "Private jet"];
// for loop
for (let i = 0; i < transportationMode.length; i++) {
   console.log(`I have a dream to own: ${transportationMode[i]}`);
};

// for each

transportationMode.forEach(transports => {
    console.log(`I have a dream to own ${transports}!`)
});

// for of loop

for (const vehicles of transportationMode) {
    console.log(`I have a dream to own ${vehicles}.`);
};