const form = document.querySelector("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const firstNameError = document.querySelector(".first-error");
const lastNameError = document.querySelector(".second-error");
const email = document.getElementById("email");
const invalidEmail = document.querySelector(".invalid-error");
const emptyEmail = document.querySelector(".empty-error");
const queryType = document.querySelectorAll("#query-type");
const queryError = document.querySelector(".query-error");
const message = document.getElementById("message");
const messageError = document.querySelector(".message-error");
const consent = document.getElementById("consent");
const consentError = document.querySelector(".consent-error");
const submitBtn = document.getElementById("submit");

let firstNameValue;
let lastNameValue;
let emailValue;
let queryValue;
let messageValue;
let consentValue;

firstName.addEventListener("input", (e) => {

    if (e.target.value !== "" && e.target.value.length >= 3 && /^[a-zA-Z]+$/.test(e.target.value)) {
        firstNameValue = e.target.value;
        firstNameError.classList.add("disabled");
        firstName.style.border = "1px solid grey"
    } else {
        firstNameError.classList.remove("disabled");
        firstName.style.border = "1px solid red"
    }
})

lastName.addEventListener("input", (e) => {

    if (e.target.value !== "" && e.target.value.length >= 3 && /^[a-zA-Z]+$/.test(e.target.value)) {
        lastNameValue = e.target.value;
        lastNameError.classList.add("disabled");
        lastName.style.border = ".1px solid grey"
    } else {
        lastNameError.classList.remove("disabled");
        lastName.style.border = "1px solid red"
    }
})

email.addEventListener("input", (e) => {
    const validEmailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (e.target.value === "") {
        invalidEmail.classList.add("disabled");
        emptyEmail.classList.remove("disabled");
        email.style.border = "1px solid red";
    } else if (validEmailPattern.test(e.target.value)) {
        emailValue = e.target.value;
        invalidEmail.classList.add("disabled");
        emptyEmail.classList.add("disabled");
        email.style.border = "1px solid grey";
    } else {
        invalidEmail.classList.remove("disabled");
        emptyEmail.classList.add("disabled");
        email.style.border = "1px solid red";
    }
})

queryType.forEach(query => {
    query.addEventListener("click", (e) => {
        queryValue = e.target.value;
        queryError.classList.add("disabled");
    })
})

message.addEventListener("input", (e) => {
    messageValue = e.target.value;
    messageError.classList.add("disabled");
})

consent.addEventListener("click", (e) => {
    if (consentValue !== "yes") {
        consentValue = e.target.value
        consentError.classList.add("disabled");
    } else {
        consentValue = "no"
    }
})


const handleSubmit = (e) => {
    
    if (!firstNameValue) {
        firstNameError.classList.remove("disabled");
        firstName.style.border = "1px solid red"
    }

    if (!lastNameValue) {
        lastNameError.classList.remove("disabled");
        lastName.style.border = "1px solid red";
    }

    if (!emailValue) {
        email.style.border = "1px solid red";
        emptyEmail.classList.remove("disabled");
    }
    
    if (!queryValue) queryError.classList.remove("disabled");
    if (!messageValue) {
        message.style.border = "1px solid red";
        messageError.classList.remove("disabled");
    }
    if (!consentValue || consentValue === "no") consentError.classList.remove("disabled");

    setTimeout(() => {
        if (!firstNameValue) {
            firstNameError.classList.add("disabled");
            firstName.style.border = "1px solid grey";
        }
    
        if (!lastNameValue) {
            lastName.style.border = "1px solid grey";
            lastNameError.classList.add("disabled");
        }
    
        if (!emailValue) {
            emptyEmail.classList.add("disabled");
            email.style.border = "1px solid grey";
        }
        if (!queryValue) queryError.classList.add("disabled");
        if (!messageValue) {
            messageError.classList.add("disabled");
            message.style.border = "1px solid grey";
        }

        if (!consentValue || consentValue === "no") consentError.classList.add("disabled");
    
    }, 2000);

    if (firstNameValue && lastNameValue && emailValue && queryValue && messageValue && consentValue === "yes") {
       showSuccessMessage();
    }

   
}


const showSuccessMessage = () => {
    const successMessage = document.createElement("div");
    successMessage.className = "success-div";
    successMessage.innerHTML = `
    <div class="success"><img src="./assets/images/icon-success-check.svg" alt="A success check mark" class="checkmark"> Message Sent!</div>
    <p class="thanks-msg">Thanks for completing the form. We'll be in touch soon!</p>
    `;
    
    document.body.prepend(successMessage);

    setTimeout(() => {
        successMessage.classList.add("disabled");
    },7000);

    form.reset();
    
}

submitBtn.addEventListener("click", handleSubmit);

