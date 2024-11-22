const formData = {
    email:"",
    message: "" 
};

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
localStorage.getItem(JSON.stringify(formData));


form.addEventListener("input", onFormInput);

function onFormInput(event){

event.preventDefault();

const value = event.target.value;
localStorage.setItem(localStorageKey,value)

};


