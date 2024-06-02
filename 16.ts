let MoreGuests : string[] =["Mahnoor" , "Ushneha" , "Nabiya" , "Alishbah"];
console.log(`Great news! I found a bigger dinner table!`);

MoreGuests.unshift("muskan");
MoreGuests.splice(MoreGuests.length / 2, 0, "yaman");
MoreGuests.push("maheera");

MoreGuests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});