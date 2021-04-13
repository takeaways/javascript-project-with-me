const form = document.querySelector("form");
const passwordConfirm = document.querySelector("#password1");
const password = document.querySelector("#password");
const messageContainer = document.querySelector('.message-container');
const message = document.querySelector("#message");


let isValid = false;
function validateForm(){
    //Using Contraint API
    isValid = form.checkValidity();
    message.textContent = "Please fill out all fields"
    message.style.color = "red"
    messageContainer.style.borderColor = "red"
}

function processFormData(e){
    e.preventDefault();
    validateForm();
}
// event listener;
form.addEventListener('submit', processFormData);