let state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    city: "",
    zipCode: "",
    petName: ""

};

console.log("bonjour le monde!");

let saveBtn = document.getElementById("saveButton");
let firsNameInput = document.getElementById("fname");
let lastNameInput = document.getElementById("lname");
let phoneNumberInput = document.getElementById("phone-number");
let emailInput = document.getElementById("email");
let cityInput = document.getElementById("city");
let zipCodeInput = document.getElementById("zipCode");
let petNameInput = document.getElementById("pet-name");

function handleSave() {
    console.log("Save button clicked");
    state.firstName = firstNameInput.value;
    state.lastName = lastNameInput.value;
    state.phoneNumber = phoneNumberInput.value;
    state.email = emailInput.value;
    state.city = cityInput.value;
    state.zipCode = zipCodeInput.value;
    state.petName = petNameInput.value;

    console.log("Add name:" + state.firstName);
    console.log(state);

    firstNameInput.value = "";
    lastNameInput.value = "";
    phoneNumberInput.value = "";
    emailInput.value = "";
    cityInput.value = "";
    zipCodeInput.value = "";
    petNameInput.value = ""

}

let user = petOwner(state.firstName, state.lastName, state.phoneNumber, state.email, state.city, state.zipCode, state.petName);
user.status();
user.render();

saveBtn.addEventListener("click", handleSave);

