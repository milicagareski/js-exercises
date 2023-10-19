let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');


btn.addEventListener('click', deleteDuplicates)

function deleteDuplicates(arr) {
arr = input.value;
let array = arr.split("");
let newArray = [];

for(let i = 0;i < array.length; i++){
        if(!newArray.includes(array[i])) 
        {
          newArray.push(array[i])
        }
           }
result.innerHTML = `The unique array is ${newArray}`
  }




