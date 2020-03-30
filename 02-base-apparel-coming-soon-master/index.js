// check if the email is valid
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// check the form
function formCheck(e) {
  e.preventDefault();
  const emailValue = email.value;

  if(!validateEmail(emailValue)) {
    form.classList.add('error');
    return;
  }

  email.value = '';
}


// event listener
email.addEventListener('keydown', () => {
  form.classList.remove('error');
});
form.addEventListener('submit', formCheck);
