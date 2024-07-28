let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');

let x =2;
let y = 3

btn.addEventListener('click', pithagoreanTheorem)

function pithagoreanTheorem(a,b){
a = Number (input1.value);
b =  Number (input2.value);
let c = (Math.sqrt (((a ** 2)) + (b ** 2))).toFixed(2)
result.innerHTML = `The result is ${c} `
};

