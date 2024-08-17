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

  pwLength = pw.value.length;

  if (pwLength < 8 || pwLength > 16) {
    pwMsg.classList.remove('good');
  }

  if (pwLength > 0 && pwLength < 8) {
    pwMsg.textContent = 'Must be at least 8 characters';
  } else if (pwLength > 16) {
    pwMsg.textContent = 'No more than 16 characters';
  } else if (pw.value === '') {
    pwMsg.textContent = 'Password Required';
  }

  if (pwLength >= 8 && pwLength <= 16) {
    if (checkLtrs(pw.value)) {
      pwMsg.textContent = 'Password Acceptable';
      pwMsg.classList.add('good');
    } else {
      pwMsg.textContent = 'Password Must Fit Format';
    }
  }
});

function checkSpcChars(item) {
  const spcChar = ['!', '?', '*', '&', '$', '%']

  return spcChar.includes(item);

}

function checkForLetter(item) {
  const ltrs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  return ltrs.includes(item.toLowerCase());
}

function checkLtrs(str) {

  let ltr = 0;
  let cLtr = 0;
  let spc = 0;
  let num = 0;

  for (let i = 0; i < str.length; i++) {
    if (+str[i] >= 0) {
      num++;
    } else if (checkSpcChars(str[i])) {
      spc++;
    } else if (checkForLetter(str[i])) {
      if (str[i].toUpperCase() === str[i]) {
        cLtr++;
      } else {
        ltr++;
      }
    }
  };

  if ((ltr * cLtr * spc * num) > 0) return true;
}