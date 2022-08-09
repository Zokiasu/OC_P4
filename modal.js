function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".cross");
const fistForm = document.querySelector("#form")
const modalFormResponse = document.querySelector(".formResponse");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal event
function closeModal() {
  modalbg.style.display = "none";
}
// close eventForm and open modal validationForm 
function launchFormResponse(){
  fistForm.style.display = "none";
  modalFormResponse.style.display = "block";
}

// DOM Elements
const form = document.querySelector('#form');
const first = document.querySelector('#first');
const last = document.querySelector('#last');
const email = document.querySelector('#email');
const birthdate = document.querySelector('#birthdate');
const quantity = document.querySelector('#quantity');
const conditionsOfUse = document.querySelector('#conditionsOfUse');
const locations = document.querySelector("#locations");

// Error messages
const ErrFirst = "Le champ prénom a un minimum de 2 caractères";
const ErrLast = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
const ErrEmail = "L'adresse électronique n'est pas valide.";
const ErrBirthdate = "Vous devez entrer votre date de naissance.";
const ErrQuantity ="Vous devez entrer votre nombre de participation.";
const ErrLocations ="Vous devez choisir une ville.";
const ErrConditionofUse = "Vous devez vérifier que vous acceptez les conditions.";

//Reset form
function cleanModal() {
  form.submit();
}

// Submit form
form.addEventListener('submit', e => {
  e.preventDefault();
  validateInputs();
});

// Set error message
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const showError = inputControl.querySelector('.error');
  showError.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

// Removing error message
const setSuccess = element => {
  const inputControl = element.parentElement;
  const showError = inputControl.querySelector('.error');
  showError.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const validateInputs = () => {
  first.value.trim() === '' ? setError(first, ErrFirst) : setSuccess(first);
  last.value.trim() === '' ? setError(last, ErrLast) : setSuccess(last);
  email.value.trim() === '' ? setError(email, ErrEmail) : setSuccess(email);
  birthdate.value.trim() === '' ? setError(birthdate, ErrBirthdate) : setSuccess(birthdate);
  quantity.value.trim() === '' ? setError(quantity, ErrQuantity) : setSuccess(quantity);
  conditionsOfUse.checked === false ? setError(conditionsOfUse, ErrConditionofUse) : setSuccess(conditionsOfUse);
  locations.value === '' ? setError(locations, ErrLocations) : setSuccess(locations);

  if(first.value.trim() !== '' && last.value.trim() !== '' && email.value.trim() !== '' && birthdate.value.trim() !== '' && quantity.value.trim() !== '' && conditionsOfUse.checked === true && locations.value !== ''){
    launchFormResponse();
    const btnCleaner = document.querySelector('.closeFormResponse');
    btnCleaner.addEventListener("click", cleanModal);
  }
}

