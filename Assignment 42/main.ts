let magicians : string[] = ["John", "Vlad" , "David"];

function make_great (magicians : string[]): string[] {
    let greatMagicians : string[] = [];
    magicians.forEach((magician)=> {
        greatMagicians.push(`  ${magician} the Great!   `);
    });
    return greatMagicians;
}

function show_magicians(magicians : string[]) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

let greatMagicians : string[] = make_great([...magicians])


console.log("Original magicians:");
show_magicians(magicians); //shows original names
console.log("\n Great magicians:");
show_magicians(greatMagicians); //shows modified names
