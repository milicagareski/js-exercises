
let input = document.querySelector('.input');
let btn = document.querySelector('.btn')
let result = document.querySelector('.result');


btn.addEventListener('click', descentingOrder)

// function descentingOrder (arr) {
//  let newArray = [];
//  let swap;

// for(let i = 0; i < arr.length; i++) {
//   for(let j = i+1; j < arr.length; j++) {
//     if(arr[i] < arr[j]) {
//      let temp = arr[i];
//      arr[i] = arr[j];
//      arr[j] = temp
//     }
//   }
// }
//  console.log(arr);
//  }

function descentingOrder (array) {
 array = input.value;
 let arr = array.split(" ");
 console.log(arr);
 let swap;
 do {
  swap = false;
  for (let i = 0; i < arr.length; i++){
    arr[i] = Number (arr[i])
    if(arr[i] < arr[i+1]) {
     let temp = arr[i];
     arr[i] = arr[i+1];
     arr[i+1] = temp;
     swap = true
    }
   }
 }
 while(swap);
result.innerHTML = arr
}

  

