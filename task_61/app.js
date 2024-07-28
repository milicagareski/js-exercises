const btn = document.querySelector('.btn');
const input = document.querySelector(".input")
const result = document.querySelector('.result')

btn.addEventListener("click", sortArray)

let x = [3,16,6,12,4,2]

function sortArray (arr) {
 for(let i= 0; i < arr.length; i++) {

  let currentElement = arr[i];
  let lastIndex = i - 1;
  
  while (lastIndex >= 0 && arr[lastIndex] > currentElement) {
   arr[lastIndex + 1] = arr[lastIndex];
   lastIndex --
  }
  arr[lastIndex + 1] = currentElement
 }
return(arr);
}


console.log(sortArray(x))

