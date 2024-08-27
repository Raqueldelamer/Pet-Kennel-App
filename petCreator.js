console.log("Hello from petCreator.js! ");

function createPet(nameInput, ageInput, speciesInput, energyInput, happinessInput) {
    let pet = {
        name: nameInput,
        age: ageInput,
        species: speciesInput,
        energy: energyInput,
        happiness: happinessInput,

        status() {
            console.log(`Pet name: ${this.name}, Species: ${this.species}, Energy: ${this.energy}, Happiness: ${this.happiness}.`);
        },
        
        toHTML() {
            return `
            <div class="d-flex justify-content-center">
            <div class="card w-20">
            <div class="card-body">
            <p class="card-text">Name: ${this.name} : </p>
                <p>Age: ${this.age} : </p>
                <p>Species: ${this.species} : </p>
            </div>
            </div>
            `
        },

        play() {
            this.energy -= 15;
            this.happiness += 10;
            //console.log(`After playing with ${this.name} energy is ${this.energy} and happiness is ${this.happiness}.`);
        },
        feed() {
            this.energy += 20;
            this.happiness += 30;
           // console.log(`After feeding ${this.name}, energy level is now ${this.energy}, and happiness level is ${this.happiness}.`);
        }
    }
    console.log("created pet..");
    pet.status();
    return pet;
}
let pet1 = createPet("Minou", "", "", 100, 60);
let pet2 = createPet("Sheba", "", "", 100, 50);
let pet3 = createPet("Orpheo", "", "", 100, 50);

