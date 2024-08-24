console.log("Hello from pets.js!");

let state = {
    petName: "",
    petAge: "",
    petSpecies: "",
    
};

// renderPets(){
//    let pet1NameInput = document.getElementById("pet1NameOutput");
//    pet1NameInput.textContent = this.pet1Name;
//    let pet2NameInput = document.getElementById("pet2NameOutput");
//    pet2NameInput.textContent = this.pet2Name;
//    let pet3NameInput = document.getElementById("pet3NameOutput");
//    pet3NameInput.textContent = this.pet3Name;


   // pet = {
     //   name: nameInput,
      //  species: speciesInput,
     //   energy: energyInput,
     //   happiness: happinessInput,
    // let pet1 = createPet("Minou", "Cat", 20, 30);
   // let pet2 = createPet("Sheba", "Cat", 20, 30);
   //  let pet3 = createPet("Orpheo", "Cat", 40, 30);

// return pet1;

let submitBtn = document.getElementById("submitButton");
let petNameInput = document.getElementById("petName");
let petAgeInput = document.getElementById("petAge");
let petSpeciesInput = document.getElementById("petSpecies");

function handleSubmit() {
    console.log("Submit button clicked");
    state.petName = petNameInput.value;
    state.petAge = petAgeInput.value;
    state.petSpecies = petSpeciesInput.value;
    

    console.log("Add Name: " + state.petName);
    //console.log("Add Age:" + state.petAge);
    console.log(state);

    petNameInput.value = "";
    petAgeInput.value = "";
    petSpeciesInput.value = ""
}
// let user2 = createPet(state.firstName, state.lastName, state.phoneNumber, state.email, state.city, state.zipCode, state.petName);
// user2.status();
// user2.render();

submitBtn.addEventListener("click", handleSubmit);