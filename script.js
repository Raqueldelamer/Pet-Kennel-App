let state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    city: "",
    zipCode: 0,
    petsName: ""

};

console.log("bonjour le monde!");

let saveBtn = document.getElementById("saveButton");
let firsNameInput = document.getElementById("fname");
let lastNameInput = document.getElementById("lname");
let phoneNumberInput = document.getElementById("phone-number");
let city = document.getElementById("city");
let zipCodeInput = document.getElementById("zipcode");
let petNameInput = document.getElementById("pet-name");

function handleSave() {
    console.log("save button when clicked");
    let name = nameInput.value;
    state.name = name;
    
    console.log("Added name" + state.name);

    state.birthday = birthdayInput.value;
    state.zipCode = zipCodeInput.value;

    console.log(state);

}
saveBtn.addEventListener("click", handleSave);