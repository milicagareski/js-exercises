let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');

let x = [1,2,3,12,13,14];
let y = [3,4,5,13,14,15];

btn.addEventListener('click', mutualElements )


function mutualElements (array1,array2){
 array1 = input1.value;
 let arr1 = array1.split(" ");

 array2 = input2.value;
 let arr2 = array2.split(" ");

 let newArray = []
    for(let i = 0; i < arr1.length; i++){
       arr1[i] = Number(arr1[i])
      for(let j = 0; j < arr2.length; j++) {
       arr2[j] = Number(arr2[j])
        if(arr1[i] === arr2[j]) {
        newArray.push(arr1[i])
    }
   }
}
result.innerHTML = `mutual elements for this two arrays are ${newArray}`
}



