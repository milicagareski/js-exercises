let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');



btn.addEventListener('click', linearSearch )


function linearSearch(array,el){
 array = input1.value;
 let newArray = array.split(" ");
 el = input2.value;
 let element = el.toString().toLowerCase()
 let finalResult = []
 let count = 0;
 
   for( let i = 0; i< newArray.length; i++) {
         if(newArray[i] === element) {
          count =  finalResult.push(i)
          }   
   }
 if(count !== 0){
   result.innerHTML = ` The element has index of ${finalResult}`
 }
 else {
  result.innerHTML = `not found`
 }
}



// function linearSearch (arr,el) {
//  let array = arr.toString();
//  let newArray = array.split("")
//  let element = el.toString();
//  // let check;

//     for( let i = 0; i< newArray.length; i++) {
//          if(newArray[i] === element) {
//           return i;
//           }       
//    }
//    return -1
// }




