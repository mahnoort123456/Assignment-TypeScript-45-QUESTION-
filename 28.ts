let StageOfLife: number = 16;

if (StageOfLife < 2) {
    console.log("The person is a baby.");
} else if (StageOfLife < 4) {
    console.log("The person is a toddler.");
} else if (StageOfLife < 13) {
    console.log("The person is a kid.");
} else if (StageOfLife < 20) {
    console.log("The person is a teenager.");
} else if (StageOfLife < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}