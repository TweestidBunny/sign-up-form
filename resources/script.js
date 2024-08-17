const pw = document.querySelector('#pwd');
const cpw = document.querySelector('#confPwd');
const pwMsg = document.querySelector('.pwMsg');
const cpwMsg = document.querySelector('.cpwMsg');

if (cpw.value === '') {
  cpw.setCustomValidity('Invalid Field');
  cpwMsg.textContent = 'Password Confirmation Required';
}

if (pw.value === '') {
  pwMsg.textContent = 'Password Required';
}

cpw.addEventListener('input', () => {
  if (cpw.value === '') {
    cpwMsg.textContent = 'Password Confirmation Required';
  }

  if (cpw.value !== pw.value || cpw.value === '') {
    cpw.setCustomValidity('Invalid field');
  } else {
    cpw.setCustomValidity('');
  }
  if (cpw.value.length > 0 && cpw.value !== pw.value) {
    cpwMsg.textContent = 'Passwords Must Match';
    cpwMsg.classList.remove('good');
  } else if (cpw.value === pw.value) {
    cpwMsg.textContent = 'Passwords Match';
    cpwMsg.classList.add('good');
  }
});

pw.addEventListener('input', () => {

  if (pw.value.length < 8 || pw.value.length > 16) {
    pwMsg.classList.remove('good');
  }

  if (pw.value.length > 0 && pw.value.length < 8) {
    pwMsg.textContent = 'Must be at least 8 characters';
  } else if (pw.value.length > 16) {
    pwMsg.textContent = 'Must be less than 17 characters';
  } else if (pw.value === '') {
    pwMsg.textContent = 'Password Required';
  } else {
    pwMsg.textContent = 'Password Acceptable';
    pwMsg.classList.add('good');
  }
});