let btn = document.querySelector('.btn');
let result = document.querySelector('.result');
let input = document.querySelector(".input")


btn.addEventListener('click', three )

function three (x) {
x = input.value;
let star = "*"
let array = [];

for(let i = 1 ; i <= x; i++){
 array.push(i)
}
for(let j = array.length-1 ; j>=0 ; j--){ 
  array[j] = star; 
}
for(let i = array.length-1; i > 0; i-=2){
 array.splice(array.length-2,2);
 array.unshift(" ");
 let finalResult = array.join("");
 const element = document.createElement("p");
 element.innerText = finalResult;
 document.querySelector(".result").appendChild(element)
 console.log(finalResult);
}
}


