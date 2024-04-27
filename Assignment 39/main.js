function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(make_album("First artist", "The first album"));
console.log(make_album("Second artist", "The second album"));
console.log(make_album("Third album", "The third album", 12));
