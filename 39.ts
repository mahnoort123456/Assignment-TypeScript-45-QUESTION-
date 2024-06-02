function cityCountryName (city: string, country: string): string {
    return `${city}, ${country}`;
}
console.log(cityCountryName("Lahore", "Pakistan"));
console.log(cityCountryName("Tokyo", "Japan"));
console.log(cityCountryName("Paris", "France"));
cityCountryName("Angora", "")