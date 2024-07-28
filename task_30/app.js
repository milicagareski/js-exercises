let btn = document.querySelector('.btn');
let result = document.querySelector('.result');


btn.addEventListener('click', three )




function three (x) {
x = "***********";
let array = x.split("");

for(let i = array.length; i > 1; i-=2) {
array.splice(array.length-2, 2);
array.unshift(" ");
let finalResult = array.join("");
console.log(finalResult);
result.innerHTML = finalResult
}
}


