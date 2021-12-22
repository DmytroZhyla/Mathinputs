const form  = document.getElementsByTagName('form')[0];
const firstnumber = document.getElementById('firstnumber');
const secondnumber = document.getElementById('secondnumber');
const firstnumberError = document.querySelector('#firstnumber + span.error');
const secondnumberError = document.querySelector('#secondnumber + span.error');

firstnumber.addEventListener('input', function (event) {
  if (firstnumber.validity.valid) {
    firstnumberError.textContent = '';
    firstnumberError.className = 'error'; 
  } else {
    showError();
  }
});

secondnumber.addEventListener('input', function (event) {
    if (secondnumber.validity.valid) {
    secondnumberError.textContent = '';
    secondnumberError.className = 'error'; 
    } else {
      showError();
    }
  });
form.addEventListener('submit', function (event) {
  if(!firstnumber.validity.valid || !secondnumber.validity.valid) {
    showError();
    event.preventDefault();
  }
  else{
    onSubmit();
  }
});

function showError() {
  if(firstnumber.validity.valueMissing) {
    firstnumberError.textContent = 'You  shoud type some numbers'
    firstnumberError.className = 'error active'; 
  }
  if(secondnumber.validity.valueMissing) {
    secondnumberError.textContent = 'You  shoud type some numbers'
    secondnumberError.className = 'error active'; 
  }

}

function onSubmit() {
let selectindx = document.getElementById("operation").options.selectedIndex;
    let result
    switch (selectindx) {
        case 0:
          result = +firstnumber.value + +secondnumber.value;
          break;
        case 1:
            result = firstnumber.value - secondnumber.value;
            break;
        case 2:
            result = firstnumber.value * secondnumber.value;
            break;
        case 3:
            result = firstnumber.value / secondnumber.value;
            break;
      }
      result = Math.round(result);
      alert(`Your result :${result}`);
}
