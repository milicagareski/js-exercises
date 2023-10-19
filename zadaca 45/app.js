let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');

btn.addEventListener('click', binarySearch)

function binarySearch(numbers, element) {
   numbers = input1.value;
   element = input2.value; 
   let array = numbers.split(" ");
         for(let i = 0; i < array.length; i++){
              array[i] = Number(array[i])
          }
      array.sort(function(a,b){
      return a - b
      })

   element = Number(element);
    
   let startIndex = 0;
   let endIndex = array.length -1;

    while(startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);  

      if(element === array[middleIndex]) {
         return result.textContent =`In sorted array, element is at index ${middleIndex}`;
      }    
      else if(element > array[middleIndex]) {
      startIndex = middleIndex + 1;
      }    
      else  {
      endIndex = middleIndex - 1;
       }  
     }
  result.innerHTML = "Target value not found in array";
}

