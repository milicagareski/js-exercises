let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');

btn.addEventListener('click', selectionSort)


// function selectionSort(array) {
// let swap = false;
//  for(let i = 0; i < array.length; i++) {
//   for(let j = i+1; j < array.length; j++) {
//     if(array[j] < array[i]) {
//       let temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//       swap = true;
//     }
//   }
//  }
 
//  console.log(array);
// }

function selectionSort(arr) {
 arr = input.value;
 let array = arr.split(" ");

   for(let i = 0; i < array.length; i++) {
     array[i] = Number(array[i]);
     let lowestNumber = i;
     
       for(let j = i+1; j < array.length; j++) {
            array[j] = Number(array[j]);
            if(array[j] < array[lowestNumber]) {
            lowestNumber = j
            }
      }

   if(lowestNumber !== i) {
      [array[i], array[lowestNumber]] = [array[lowestNumber], array[i]]
   }
 }
  result.textContent = array
}


