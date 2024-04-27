// Assignment 43

function make_sandwich (...items : string[]) {
    console.log(`Making a sandwich with : ${items.join(" , ")}.`);
}
make_sandwich("ham" , "cheese");
make_sandwich("chicken" , "lettuce" , "tomato");
make_sandwich("mustard" , "chicken" , "coleslaw");