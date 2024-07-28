
let input = document.querySelector('.inputText');
let btn = document.querySelector('.btn')
let result = document.querySelector('.result');


btn.addEventListener('click',EvenOrOdd)

function EvenOrOdd(number){
 if (input.value % 2 === 0) {
  result.innerHTML = 'This is even number';
 }
 else {
  result.innerHTML = 'This is odd number';
 }
}



