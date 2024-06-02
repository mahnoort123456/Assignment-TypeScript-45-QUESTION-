"use strict";
function cities(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
cities("Islamabad");
cities("Karachi");
cities("Paris", "France");
cities("Angora", "Turkey");
