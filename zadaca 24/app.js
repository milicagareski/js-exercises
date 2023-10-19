let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');

let btn = document.querySelector('.btn');
let result = document.querySelector('.result');



btn.addEventListener('click', changeTheNumbers)


// function changeTheNumbers(a,b) {
// a = Number (input1.value);
// b = Number (input2.value);
// let array = [a,b];
// let newArray = array.reverse()
// input1.value = newArray[0];
// input2.value = newArray[1];
// result.innerHTML = `Reverse order of numbers is ${newArray}`
//  }


function changeTheNumbers(a,b) {
a = Number (input1.value);
b = Number (input2.value);
let array = [a,b];
let newArray = []
for(let i = (array.length -1); i >= 0; i--) {
  newArray.push(array[i])
}
input1.value = newArray[0];
input2.value = newArray[1]
result.innerHTML = `Reverse order of numbers is ${newArray}`
}


