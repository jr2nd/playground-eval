const answer = document.querySelector('#answer');
const numbers = document.querySelectorAll('.key_number');
const clear = document.querySelector('#equals')
for (let i = 0; i < numbers.length; i++)
  numbers[i].addEventListener('click', function() {
    answer.innerHTML += this.innerHTML
  });

