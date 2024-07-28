let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');

btn.addEventListener('click', checkTheNumber )

const x = 10

function checkTheNumber (n) {
 n = Number (input.value)
 if(n < 0){
  result.innerHTML = `The number is negative`
 }
 else if (n > 0) {
    result.innerHTML = `The number is positive`
 }
 else {
  result.innerHTML =`0 is neither positive or negative number`
 }
}



