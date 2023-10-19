let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let input3 = document.querySelector('.input3');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');

btn.addEventListener('click', areaOfTriangle)




function areaOfTriangle (a,b,c) {
 a = Number( input1.value);
 b = Number (input2.value);
 c = Number( input3.value); 
 let s = (a + b + c) / 2;
 let area = s*[(s-a)*(s-b)*(s-c)];
 let finalResult  =  Math.sqrt(area).toFixed(2)
 result.innerHTML = `The area of triancle is ${finalResult}`
}

