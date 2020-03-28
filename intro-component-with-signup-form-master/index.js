// function
// check if the email is valid
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// check form values
function submitForm(e) {
  e.preventDefault();

  // check if the first name is empty
  if(!firstName.value) {
    // add the error class to its parent node
    firstName.parentElement.classList.add('error');
  } else {
    // remove the error class if is valid
    firstName.parentElement.classList.remove('error');
  }

  // check if the last name is empty
  if(!lastName.value) {
    lastName.parentElement.classList.add('error');
  } else {
    lastName.parentElement.classList.remove('error');
  }

  // check the email
  if(!email.value || !validateEmail(email.value)) {
    email.parentElement.classList.add('error');
    email.value = '';
  } else {
    email.parentElement.classList.remove('error');
  }

  // check the password
  if(!password.value) {
    password.parentElement.classList.add('error');
  } else {
    password.parentElement.classList.remove('error');
  }
}

// clear the error class if user is typing
function clearError(e) {
  e.target.parentElement.classList.remove('error');
}

// event listener
form.addEventListener('submit', submitForm);
firstName.addEventListener('keydown', clearError);
lastName.addEventListener('keydown', clearError);
email.addEventListener('keydown', clearError);
password.addEventListener('keydown', clearError);
