function createPetOwner(firstName, lastName, phoneNumber, email, city, zipCode, petName) {
    let petOwner = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        city: city,
        zipCode: zipCode,
        petName: petName,
        status: function() {
            console.log(`First Name: ${this.firstName} Last Name: ${this.lastName} Phone Number: ${this.phoneNumber} 
                Email: ${this.email} City: ${this.city} Zip Code: ${this.zipCode} Pet Name: ${this.petName}`);
        },
        
        render: function(){
            let petOwnerFirstName = document.getElementById("firstNameOutput");
            petOwnerFirstName.textContent = this.firstName;
            let petOwnerLastName = document.getElementById("lastNameOutput");
            petOwnerLastName.textContent = this.lastName;
            let phoneNumber = document.getElementById("phoneNumberOutput");
            phoneNumber.textContent = this.phoneNumber;
            let email = document.getElementById("emailOutput");
            email.textContent = this.email;
            let city = document.getElementById("cityOutput");
            city.textContent = this.city;
            let zipCode = document.getElementById("zipCodeOutput");
            zipCode.textContent = this.zipCode;
            let petName = document.getElementById("petNameOutput");
            petName.textContent = this.petName;

        }
    };
    return petOwner;
}

// let p1 = createPetOwner("Raquel", "Marie", "8889990000", "r@gmail.com", "New Orleans", "70115", "Minou");
// console.log(p1);
// p1.status();