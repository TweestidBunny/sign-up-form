let pw = document.querySelector('#pwd');
let cpw = document.querySelector('#confPwd')
let inputs = document.querySelectorAll('input');

if (cpw.value === '' || cpw.value !== pw.value) {
  cpw.setCustomValidity('Invalid Field');
}

cpw.addEventListener('input', () => {
  if (cpw.value !== pw.value || cpw.value === '') {
    cpw.setCustomValidity('Invalid field');
  } else {
    cpw.setCustomValidity('');
  }
});