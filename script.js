const form = document.querySelector('.form');
const inputField = document.querySelector('.form__email');
const submitBtn = document.querySelector('.form__btn');

form.addEventListener('click', e => {
  if(e.target == submitBtn) {
    if(!validEmail(inputField.value) || inputField.value == '') {
      e.preventDefault();

      form.classList.add('invalid');
    }
  }
});

function validEmail(input) {
  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;

  if(!emailRegex.test(input.trim())) {
    return false;
  }

  return true;
}

inputField.addEventListener('blur', () => {
  console.log('blur');
  if(form.classList.contains('invalid')) {
    if(inputField.value !== "" && validEmail(inputField.value)) {
      console.log('clear');
      form.classList.remove('invalid');
    }
  }
});