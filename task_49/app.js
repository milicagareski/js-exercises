let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

btn.addEventListener('click', commonElements )

function commonElements(array1,array2) {
 array1 = input1.value;
 let arr1 = array1.split(" ");
 console.log(arr1);

 array2 = input2.value;
 let arr2 = array2.split(" ");
 console.log(arr2);

 let newArray = [];

 for(let i = 0; i < arr1.length; i++) {
   for(let j = 0; j < arr2.length; j++) {
      if(arr1[i] === arr2[j]) {
       newArray.push(arr1[i])
      }
   }
 }
 newArray.sort(function(a,b){
  return a-b
 })
 result.innerHTML = `The common elements are ${newArray}`
}
