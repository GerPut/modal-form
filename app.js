const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// Toggle nav
toggle.addEventListener('click', () =>
  document.body.classList.toggle('show-nav')
);

// Show modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// Hide modal on outside click
window.addEventListener('click', e =>
  e.target == modal ? modal.classList.remove('show-modal') : false
);



// Validation

//Variables

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordmatch = document.getElementById('passwordmatch');

//Functions
function showError(input, message) {
  const Register = input.parentElement;
  Register.className = "register error"
  const small = Register.querySelector('small')
  small.innerText = message
}

function showSuccess(input) {
  const Register = input.parentElement;
  Register.className = "register success"

}

//Check username
function validateUsername(username) {
  const re = /^[A-Za-z]+$/
  return re.test(String(username).toLowerCase());
}
//Check email
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}




//Evenlisteners
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (username.value === "") {
    showError(username, 'Username is required')
  } else if (!validateUsername(username.value)) {
    showError(username, 'Username is not valid. Numbers not allowed')
  }
  else {
    showSuccess(username)
  }
  if (email.value === "") {
    showError(email, 'Error Email is required')
  } else if (!validateEmail(email.value)) {
    showError(email, 'Email is not valid')
  } else {
    showSuccess(email)
  }
  if (password.value === "") {
    showError(password, 'Error Password is required')
  } else {
    showSuccess(password)
  }

  if (passwordmatch.value === "") {
    showError(passwordmatch, 'Error Password is required')
  }
  else if (passwordmatch.value !== password.value) {
    showError(passwordmatch, 'Error Passwords should match')
  } else {
    showSuccess(passwordmatch)
  }
});
