function cities(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
cities("Islamabad");
cities("Karachi");
cities("Paris", "France");
cities("Angora" , "Turkey");