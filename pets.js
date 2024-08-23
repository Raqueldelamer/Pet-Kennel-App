console.log("Hello from pets.js!");

let state = {
    petName: "",
    petAge: "",
    petSpecies: "",
    

};

let submitBtn = document.getElementById("submitButton");
let petNameInput = document.getElementById("petName");
let petAgeInput = document.getElementById("petAge");
let petSpeciesInput = document.getElementById("petSpecies");

function handleSubmit() {
    console.log("Submit button clicked");
    state.petName = petNameInput.value;
    state.petAge = petAgeInput.value;
    state.petSpecies = petSpeciesInput.value;
    

    console.log("Add name:" + state.petName);
    console.log(state);

    petNameInput.value = "";
    petAgeInput.value = "";
    petSpeciesInput.value = ""

}



submitBtn.addEventListener("click", handleSubmit);