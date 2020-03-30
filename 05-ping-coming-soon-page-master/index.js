// function
// check if the email is valid
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function submitForm(e) {
  e.preventDefault();

  if(!validateEmail(email.value)) {
    form.classList.add('error');
  }
}

// event listener
form.addEventListener('submit', submitForm);
email.addEventListener('keydown', () => {
  form.classList.remove('error');
});
