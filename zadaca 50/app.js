let input = document.querySelector('.input');
const btn = document.querySelector('.btn')
const result = document.querySelector('.result')


btn.addEventListener('click', majorityElement)


function majorityElement(array){
array = input.value;
let arr = array.split(" ")
let maxCount = 0;
let element;

for(let i = 0; i < arr.length; i++){
  let count = 0;
    for(let j = 0; j< arr.length; j++){
        if(arr[i] === arr[j]) {
          count++
        }
         if(count > maxCount) {
          maxCount = count;
          element = arr[i]
        }
    }
}

    if(maxCount > (arr.length / 2)) {
      result.textContent = `The majority element in this array is ${element}`;
    }
    else {
      result.textContent = `their is no majority element in this array`;
    }
    }

