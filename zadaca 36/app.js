let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');

btn.addEventListener('click', descendingOrder )


function descendingOrder (numbers) {
  numbers = input.value 
  let num = numbers.toString();
  let array = num.split("");
  let newArray = [];

  for(let i = 0; i <array.length; i++) {
    array[i] = Number(array[i])
    for(let j = i+1; j< array.length; j++){
      array[j] = Number(array[j])
      if(array[j] < array[i]){
      let temp = array[j]
       array[j] = array[i];
       array[i] = temp
      }
    }
    }
    for(let j = array.length -1; j >= 0; j--) {
          newArray.push(array[j])
      }
      result.textContent = `The reverse order of this array is "${newArray}"` 
}


// function descendingOrder(numbers) {
//   numbers = input.value 
//   let num = numbers.toString();
//   let array = num.split("");
//   let newArray = [];

//    for(let i = 0; i < array.length; i++) {
//       array[i] = Number (array[i]);
//    }
//   array.sort();
//       for(let j = array.length -1; j >=0; j--) {
//           newArray.push(array[j])
//       }
//       result.textContent = `The reverse order of this array is "${newArray}"` 
//     }

