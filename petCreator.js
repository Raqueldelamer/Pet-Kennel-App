console.log("Hello from petCreator.js! ");

function createPet(nameInput, speciesInput, energyInput, happinessInput) {
    let pet = {
        name: nameInput,
        species: speciesInput,
        energy: energyInput,
        happiness: happinessInput,

        status() {
            console.log(`Pet name: ${this.name}, Species: ${this.species}, Energy: ${this.energy}, Happiness: ${this.happiness}.`);
        },
        play() {
            this.energy -= 15;
            this.happiness += 10;
            console.log(`After playing with ${this.name} energy is ${this.energy} and happiness is ${this.happiness}.`);
        },
        feed() {
            this.energy += 20;
            this.happiness += 30;
            console.log(`After feeding ${this.name}, energy level is now ${this.energy}, and happiness level is ${this.happiness}.`);
        }
    }

    return pet;
}
let pet1 = createPet("Minou", "Cat", 20, 30);
let pet2 = createPet("Sheba", "Cat", 20, 30);
let pet3 = createPet("Orpheo", "Cat", 40, 30);
let pet4 = createPet("Twinkle", "Cat", 10, 30);

let catKennel = [];
catKennel.push(pet1);
catKennel.push(pet2);
catKennel.push(pet3);
catKennel.push(pet4);
catKennel.forEach(pet => pet.feed());
catKennel[0].play()                        // play more with pet 1
console.table(catKennel)



for (let i=0; i < catKennel.length; i++) {       // conditional feeding according to energy level
    console.log(`${catKennel[i].name} has the energy level of ${catKennel[i].energy} and is indicating that it wants to be fed`)

    if(catKennel[i].energy < 50) {    //conditional if cat energy level is < 50 , feed them
    
        catKennel[i].feed();

}   else  {                           // else if more than 50 , do not feed

    console.log(`But ${catKennel[i].name} has energy level of ${catKennel[i].energy} and doesn't need to feed.`)
}                                    
}
console.table(catKennel)