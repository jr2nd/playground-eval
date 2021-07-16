const answer = document.querySelector('#answer');
const numbers = document.querySelectorAll('.key_number');
const equals = document.querySelector('#key_equals');
const decimal = document.querySelector('#key_decimal');
const backspace = document.querySelector('#key_backspace');
const clear = document.querySelector('#key_clear');
const operators = document.querySelectorAll('.operator');
for (let i = 0; i < numbers.length; i++)
  numbers[i].addEventListener('click', function() {
    answer.innerHTML += this.innerHTML;
document.querySelector('#number1').value=this.innerHTML;
  }); //numbers

equals.addEventListener('click', function() {
  answer.innerHTML = eval(answer.innerHTML);
}); //equals
decimal.addEventListener('click', function() {
  for (let i = 0; i < answer.innerHTML.length; i++) {
    if (answer.innerHTML.charCodeAt(i) === 46) return;
  } //check for a decimal point already inthe string
  if (answer.innerHTML === '') {
    answer.innerHTML = 0;
  }
  if (isNaN(answer.innerHTML[answer.innerHTML.length - 1]))answer.innerHTML += '0';  //if entry is less than 1 pad with a zero before the decimal
  answer.innerHTML += '.';
}); //decimal
backspace.addEventListener('click', function() {
  let newAnswer = answer.innerHTML;
  answer.innerHTML = newAnswer.slice(0, newAnswer.length - 1);
}); //backspace
clear.addEventListener('click', function() {
  answer.innerHTML = '';
});
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', function() {
    if (answer.innerHTML === '') return;
    if (isNaN(answer.innerHTML[answer.innerHTML.length - 1])) return;
    if (answer.innerHTML[answer.innerHTML.length - 1] != '.')
      answer.innerHTML += this.innerHTML;
  });
}
