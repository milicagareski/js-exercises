let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result1');

let input2 = document.querySelector('.input2');
let btn2 = document.querySelector('.btn2');
let result2 = document.querySelector('.result2');


btn.addEventListener('click',toFahrenheit);
btn2.addEventListener('click', toCelsius)


function toFahrenheit(){
 let a = Number(input.value)
 const finalResult = (a * 9 / 5) + 32;
 result.innerHTML = finalResult;
};

function toCelsius() {
 let b = Number(input2.value)
 let finalResult2 = (b - 32) * 5/9;
 result2.textContent = finalResult2
}



