const answer = document.querySelector('#answer');
const numbers = document.querySelectorAll('.key_number');
const equals = document.querySelector('#key_equals');
const decimal = document.querySelector('#key_decimal')
const backspace = document.querySelector('#key_backspace');

for (let i = 0; i < numbers.length; i++)
  numbers[i].addEventListener('click', function() {
    answer.innerHTML += this.innerHTML;
  });//numbers
equals.addEventListener('click', function() {
  answer.innerHTML = eval(answer.innerHTML)
});//equals
decimal.addEventListener('click', function() {
if(parseFloat(answer.innerHTML) === parseInt(answer.innerHTML)){ 
answer.innerHTML += this.innerHTML;
});//decimal
backspace.addEventListener('click', function() {});//backspace
