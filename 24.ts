// Equality with strings
console.log("Testing equality with strings:");
console.log("mango" == "mango"); // True
console.log(`"mango" == "Mango"`); // False

//Using the lower case function
console.log("Testing with lower case:");
console.log("Mango".toLowerCase() == "mango"); // True

 //Numerical tests
console.log("Numerical tests:");
console.log(29 > 14); // True
console.log(29 < 14); // False

//Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true); // True


// Test whether an item is in a array
let fruits : string[] = ["strawberry", "mango", "cherry"];
console.log("Is 'mango' in fruits?");
console.log(fruits.includes("mango")); // True

// Test whether an item is not in a array
console.log("Is 'apple' not in fruits?");
console.log(!fruits.includes("apple")); // True