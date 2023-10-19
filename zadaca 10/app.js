let input = document.querySelector('.input');
let btn = document.querySelector('.btn')
let result = document.querySelector('.result')

btn.addEventListener('click', fibonacciSequence)


function fibonacciSequence (n){
  n = input.value;
  let array = [0,1];
  for(let i = 2; i < n; i++){
    array[i] = array[i-1] + array[i -2]
    console.log(array[i]);
  }
  result.innerHTML = array;
}






