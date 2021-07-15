const answer = document.querySelector('#answer');
const numbers = document.querySelectorAll('.key_number');
const clear = document.querySelector('#key_clear');
const equals = document.querySelectorAll('#key_equals');
const backspace = document.querySelectorAll('#key_backspace');

for (let i = 0; i < numbers.length; i++)
  numbers[i].addEventListener('click', function() {
    answer.innerHTML += this.innerHTML;
  });
clear.addEventListener('click', function() {});
equals.addEventListener('click', function() {});
backspace.addEventListener('click', function() {});
