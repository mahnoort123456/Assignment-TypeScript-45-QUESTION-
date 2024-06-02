"use strict";
let current_users = ["mahnoor", "mahi", "maha", "maya", "madiha"];
let new_user = ["mahnoor", "hiba", "alishbah", "mahi"];
new_user.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
