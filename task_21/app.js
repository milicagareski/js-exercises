let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');


btn.addEventListener('click', countTheNumbers)

function countTheNumbers(n) {
  n = input.value;
  n = n.toString();
  let count = 0;
  for (let i = 0; i <= n.length; i++){
    count = i
  }
    result.innerHTML = count
}


