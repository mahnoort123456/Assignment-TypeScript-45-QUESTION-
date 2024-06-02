let SeeingtheWorld : string[] = ["Japan" , "Turkey" , "France" , "Paris" , "Dubai"];
console.log("Original order:", SeeingtheWorld);

console.log("Alphabetical order:", [...SeeingtheWorld].sort());

console.log("Original order:", SeeingtheWorld);

console.log("Reverse alphabetical order:", [...SeeingtheWorld].sort().reverse());

console.log("Original order:", SeeingtheWorld);

SeeingtheWorld.reverse();
console.log("Reversed order:", SeeingtheWorld);

SeeingtheWorld.reverse();
console.log("Original order:", SeeingtheWorld);

SeeingtheWorld.sort();
console.log("Alphabetical order:", SeeingtheWorld);

SeeingtheWorld.reverse();
console.log("Reverse alphabetical order:", SeeingtheWorld);