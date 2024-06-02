"use strict";
let HelloAdmin = ["mahnoor", "mahi", "maha", "maya", "madiha"];
HelloAdmin.forEach(HelloAdmin => {
    if (HelloAdmin === "mahnoor") {
        console.log("Hello mahnoor, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${HelloAdmin}, thank you for logging in again.`);
    }
});
