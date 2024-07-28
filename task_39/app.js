let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');


btn.addEventListener('click', bubbleSort)


function bubbleSort(arr) {
   arr = input.value;
   let s = arr.toString();
   let array = s.split("");
   let newArray = [];
   let swapped;

   
   for(let i = 0; i < array.length; i++) {
      newArray.push(Number(array[i]));
   }

   do{
      swapped = false;

         for (let i = 0; i < newArray.length; i++) {
            if( newArray[i+1] < newArray[i]) {
            let temp = newArray[i];
            newArray[i] = newArray[i+1];
            newArray[i+1] = temp;
            swapped = true
            console.log(newArray);
          }
      }
      }

      while (swapped)
         result.innerHTML = `The sorted array is ${newArray}`
      


   
   // for (let i = 0; i < newArray.length; i++) {
   //    let swapped = false
   
   //    for (let j = 0; j < newArray.length - i - 1; j++) {
   //       if (newArray[j] > newArray[j + 1]) {
   //          let tmp = newArray[j]
   //          newArray[j] = newArray[j + 1]
   //          newArray[j + 1] = tmp
   //          swapped = true
   //          console.log(newArray);
   //       }
   //    }

   //    if (!swapped) {
   //       break
   //    }
   // }


   console.log(newArray)


//  for(let i = 0; i < newArray.length; i++) {
//    for( let j = i+1; j < newArray.length; j++) {
//       if(newArray[j] < newArray[i]) {
//          let temp = newArray[j]
//          newArray[j] = newArray[i];
//          newArray[i] = temp
//          swapped = true
//       }
//       else{
//          swapped = false
//       }
//    }
//  }
}



