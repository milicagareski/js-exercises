let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');

btn.addEventListener('click', armstrongNumer)

function armstrongNumer(n) {
n = input.value;
let number = n.toString();
let count = 0;
for (let i = 0; i < number.length; i++){
    let newNumber = Number(number[i]);
  let sum = (Math.pow (newNumber, number.length));
  count = count + sum;
  finalResult = count.toString()
}
if (finalResult === n) {
  result.innerHTML = `This is armstrong number`
}
else {
    result.innerHTML = `This is NOT armstrong number`
}
}



