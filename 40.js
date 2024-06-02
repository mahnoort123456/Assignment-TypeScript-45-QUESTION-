"use strict";
function make_album(artistName, Albumtitle, numberOfTracks) {
    return { artistName, Albumtitle, numberOfTracks };
}
let first_album = make_album("Bilal abbas khan", "abdullahpur ka devdas", 13);
let second_album = make_album("Sarah khan", "abdullahpur ka devdas", 13);
let third_album = make_album("iqra aziz", "khuda or mohabbat", 36);
console.log(first_album);
console.log(second_album);
console.log(third_album);
