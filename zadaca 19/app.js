let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');

btn.addEventListener('click', decimalToBinary)


// function decimalToBinary(number) {
//  number = Number (input.value)
//  let finalResult = number.toString(2)
//  result.innerHTML = `The binary of this number is ${finalResult}`
// } 

function decimalToBinary (decimalNumber) {
 decimalNumber = input.value;
 if (decimalNumber === 0) {
  result.innerHTML = `The number is 0`
 } 
 let binary = "";
 while ( decimalNumber > 0) {
  let remainder = decimalNumber % 2;
  binary = remainder + binary;
  decimalNumber = Math.floor( decimalNumber / 2) 
  result.innerHTML = `The binary od this decimal is ${binary}` }
}

decimalToBinary(10)