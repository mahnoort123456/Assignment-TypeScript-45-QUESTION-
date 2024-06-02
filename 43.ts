let Unchanged_magicians: string[] = ["Alice", "David", "Chris"];

function make_great(magic: string[]): string[] {
    let unchangedMagicians = [];
    magic.forEach(magic => {
        greatMagicianes.push(`${magic} the Great`);
    });
    return greatMagicianes;
}

let greatMagicianes = make_great(magic.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(Unchanged_magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicianes);