"use strict";
let magic = ["navid", "saeed", "laziz"];
function make_greates(magic) {
    for (let i = 0; i < magic.length; i++) {
        magic[i] = magic[i] + " the Great Magicians";
    }
}
make_greates(magic); // Modifies the original array
console.log(magic);
