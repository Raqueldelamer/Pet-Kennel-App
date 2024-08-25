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
let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let phoneNumberInput = document.getElementById("phoneNumber");
let emailInput = document.getElementById("email");
let cityInput = document.getElementById("city");
let zipCodeInput = document.getElementById("zipCode");
let petNameInput = document.getElementById("petName");

function handleSave() {
    console.log("Save button clicked");
    state.firstName = firstNameInput.value;
    state.lastName = lastNameInput.value;
    state.phoneNumber = phoneNumberInput.value;
    state.email = emailInput.value;
    state.city = cityInput.value;
    state.zipCode = zipCodeInput.value;
    state.petName = petNameInput.value;

    localStorage.setItem("firstName", state.firstName);   //saved in local storage
    localStorage.setItem("lastName", state.lastName);
    localStorage.setItem("phoneNumber", state.zipCode );
    localStorage.setItem("email", state.email);
    localStorage.setItem("city", state.city);
    localStorage.setItem("zipCode", state.zipCode);
    localStorage.setItem("petName", state.petName);

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


let user = createPetOwner(state.firstName, state.lastName, state.phoneNumber, state.email, state.city, state.zipCode, state.petName);
user.status();
user.render();

saveBtn.addEventListener("click", handleSave);

