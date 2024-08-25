console.log("Hello from pets.js!");

let state = {
    petName: "",
    petAge: "",
    petSpecies: "",
    
};

let pets = [];
pets.push(createPet("Minou", "3", "cat"));
pets.push(createPet("Sheba", "2", "cat"));
pets.push(createPet("Orpheo", "1", "cat"));


let submitBtn = document.getElementById("submitButton");
let petNameInput = document.getElementById("petName");
let petAgeInput = document.getElementById("petAge");
let petSpeciesInput = document.getElementById("petSpecies");

    petNameInput.value = "";
    petAgeInput.value = "";
    petSpeciesInput.value = ""

function handleSubmit() {
    console.log("Submit button clicked");
    state.petName = petNameInput.value;
    state.petAge = petAgeInput.value;
    state.petSpecies = petSpeciesInput.value;
    pets.push(createPet(state.petName, state.petAge, state.petSpecies));
    renderPets();
    console.log(pets);
    console.log(state);
    
    localStorage.setItem("petName", state.petName);   //saved in local storage
    localStorage.setItem("petAge", state.petAge);
    localStorage.setItem("petSpecies", state.petSpecies);   
    
}

function renderPets() {
    let html = "";
    let output = document.getElementById("petOutput");
    
    for(let i=0; i<pets.length; i++){
        console.log(pets[i]);    
        html += pets[i].toHTML();
    }

    output.innerHTML = html;
    
}

submitBtn.addEventListener("click", handleSubmit);