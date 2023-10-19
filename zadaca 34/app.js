let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');


btn.addEventListener('click', countTheElements )


function countTheElements(n,e) {
n = input1.value;
e = input2.value;
let element = e.toString()
let numbers = n.toString();
let array = numbers.split("");
let count = 0;

for(let i = 0; i < array.length; i++) {
  if (element === array[i]) {
    count++;
  }
     }
     if(count > 0) {
              result.innerHTML = `The element occurs ${count} times`

     }
     else {
              result.innerHTML = `The element does not exist in this array`
     }
}
    