"use strict";
let guestes = ["Mahnoor", "Ushneha", "Nabiya", "Alishbah"];
console.log('Sorry! Unfortunately, I can only invite two people for dinner.');
if (guestes.length > 2) {
    let removedguest = guestes.pop();
    console.log(`I'm Apologies, ${removedguest}, I can't invite you to dinner.`);
}
guestes.forEach(guestes => {
    console.log(`Dear ${guestes}, you're still invited to dinner.`);
});
guestes.splice(0, guestes.length);
console.log(guestes); // Shows an empty list
