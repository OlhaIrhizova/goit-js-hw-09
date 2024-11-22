let formData = {
    email:"",
    message: "" 
};

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        formData = JSON.parse(savedData);
        document.querySelector('[name="email"]').value = formData.email;
        document.querySelector('[name="message"]').value = formData.message;
    }
});


form.addEventListener("input",(event) =>{

const { name, value } = event.target;

    if (name in formData) {
        formData[name] = value;
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }
});



form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (formData.email === "" || formData.message === "") {
        alert('Fill please all fields');
        return;
    }
    console.log(formData);
    
localStorage.removeItem('feedback-form-state');
    formData = { email: "", message: "" };
    form.reset();
});