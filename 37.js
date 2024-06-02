"use strict";
function make_shirt(size = "large", message = "I love DAD!") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt(); // Default large and message
make_shirt("medium"); // Default message, medium size
make_shirt("small", "I LOVE CODING");
make_shirt("NORMAL", "I LOVE TYPESCRIPT");
