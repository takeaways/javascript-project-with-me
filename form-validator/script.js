const form = document.querySelector("form");
const passwordConfirm = document.querySelector("#password1");
const password = document.querySelector("#password");
const messageContainer = document.querySelector('.message-container');
const message = document.querySelector("#message");


let isValid = false;
let passwordsMatch = false;

function validateForm(){
    //Using Contraint API
    isValid = form.checkValidity();
    if(!isValid){
        message.textContent = "Please fill out all fields"
        message.style.color = "red"
        messageContainer.style.borderColor = "red"
        return;
    }
    // check to so if passwords match
    if(passwordConfirm.value === password.value){
        passwordsMatch = true;
        password.style.borderColor = 'green';
        passwordConfirm.style.borderColor = 'green';
    }else{
        passwordsMatch = false;
        message.textContent ='Make sure passwords match'
        messageContainer.style.borderColor = "red";
        message.style.color = "red";
        password.style.borderColor = 'red';
        passwordConfirm.style.borderColor = 'red';  
        return;
    }
    // If form is valid and passwords match
    if(passwordsMatch && isValid){
        message.textContent = "Successfully Registered!"
        message.style.color = "green";
        messageContainer.style.color = "green"
    }
}

function processFormData(e){
    e.preventDefault();
    validateForm();
}
// event listener;
form.addEventListener('submit', processFormData);