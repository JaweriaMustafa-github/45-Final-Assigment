// Assignment 41

let magicians : string[] = ["John", "Vlad" , "David"];

function show_magicians(magicians : string[]) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
function make_great(magicians : string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

make_great(magicians); //modifies the original array
show_magicians(magicians); //show modified names