const form = document.getElementById('form');
const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener('submit', e => {
  e.preventDefault();

  const firstNameValue = form['fname'].value;
  const lastNameValue = form['lname'].value;
  const emailValue = form['email'].value;
  const passwordValue = form['password'].value;
  
  validateFirstName(firstNameValue);

  validateLastName(lastNameValue);

  validateEmail(emailValue);

  validatePassword(passwordValue);
})

function validatePassword(passwordValue) {
  if (passwordValue === '') {
    addErrorMessage(password, 'O campo "Senha" não pode estar vazio');
  } else {
    removeErrorMessage(password);
  }
}

function validateEmail(emailValue) {
  if (emailValue === '') {
    addErrorMessage(email, 'O campo "Email" não pode estar vazio');
  } else if (!emailValue.match(emailPattern)) {
    addErrorMessage(email, 'Este email não é válido');
  } else {
    removeErrorMessage(email);
  }
}

function validateLastName(lastNameValue) {
  if (lastNameValue === '') {
    addErrorMessage(lname, 'O campo "Sobrenome" não pode estar vazio');
  } else {
    removeErrorMessage(lname);
  }
}

function validateFirstName(firstNameValue) {
  if (firstNameValue === '') {
    addErrorMessage(fname, 'O campo "Nome" não pode estar vazio');
  } else {
    removeErrorMessage(fname);
  }
}

function addErrorMessage(field, message) {
  const formControl = field.parentNode;
  formControl.classList.add('error');

  const span = formControl.querySelector('span');
  span.innerText = message;
}

function removeErrorMessage(field) {
  const formControl = field.parentNode;
  formControl.classList.remove('error');

  const span = formControl.querySelector('span');
  span.innerText = '';
}
