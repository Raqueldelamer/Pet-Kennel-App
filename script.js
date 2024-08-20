let state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    city: "",
    zipCode: 0,
    petName: ""

};

console.log("bonjour le monde!");

let saveBtn = document.getElementById("saveButton");
let firsNameInput = document.getElementById("fname");
let lastNameInput = document.getElementById("lname");
let phoneNumberInput = document.getElementById("phone-number");
let emailInput = document.getElementById("email");
let cityInput = document.getElementById("city");
let zipCodeInput = document.getElementById("zipcode");
let petNameInput = document.getElementById("pet-name");

function handleSave() {
    console.log("Save button when clicked");
    let firstName = firstNameInput;
    state.firstName = firstName;
    
    state.lastName = lastNameInput;
    state.phoneNumber = phoneNumberInput;
    state.email = emailInput;
    state.city = cityInput;
    state.zipCode = zipCodeInput;
    state.petName = petNameInput;

    
    console.log("Added name" + state.name);
    console.log(state);
    firstNameInput.value = "",
    lastNameInput.value = "",
    phoneNumberInput.value = "",
    emailInput.value = "",
    cityInput.value = "",
    zipCodeInput.value = "",
    petNameInput.value = ""

}

saveBtn.addEventListener("click", handleSave);