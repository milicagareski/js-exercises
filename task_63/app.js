let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');


btn.addEventListener('click', subsetOfArray)


function subsetOfArray (array1, array2){

  array1 = input1.value;
  let arr1 = array1.split(" ");

  array2 = input2.value;
  let arr2 = array2.split(" ")


  let newArray = []; 
  let finalResult;

   if (arr1.length < arr2.length ) {
          [arr1,arr2] = [arr2,arr1]    
   }

      for(let i = 0; i < arr1.length; i++)
        for(let j = 0; j < arr2.length; j++) {
           if(arr2[j] === arr1[i]) {
           arr2.shift()
        }       
      }  

      if(arr2.length === 0) {
           finalResult = `the one array IS subset of the other`
      }
      else {
           finalResult = `the one array is NOT subset of the other`
      }
  result.textContent = finalResult
}
