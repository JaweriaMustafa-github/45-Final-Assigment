// Assignment 39

function make_album(artist : string , title : string , tracks? : number) {
    let album = {artist , title};
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}

console.log(make_album("First artist" , "The first album"));
console.log(make_album("Second artist" , "The second album"));
console.log(make_album("Third album" , "The third album" , 12));
