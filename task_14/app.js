let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let input3 = document.querySelector('.input3');
let input4 = document.querySelector('.input4');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');


btn.addEventListener('click',getSummaryandAritmeticValue)


function getSummaryandAritmeticValue (a) {
 a =  [Number(input1.value), Number(input2.value), Number(input3.value), Number(input4.value)];
   let sum = 0;
 for(let i of a){
  sum += i
  console.log(sum);
 }
 let aritmeticValue = sum / a.length;
 result.innerHTML =  ` The summary of numbers is ${sum}, and their aritmetic value is ${aritmeticValue}`
 };








