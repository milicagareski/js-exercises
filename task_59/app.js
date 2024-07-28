let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');


btn.addEventListener('click', allElements )


function allElements(array1,array2){
  array1 = input1.value;
  let arr1 = array1.split(" ");

  array2 = input2.value;
  let arr2 = array2.split(" ");

  let newArray = []

  for(let i = 0; i < arr1.length; i++){
    if(!newArray.includes(arr1[i])){
      newArray.push(arr1[i])
    }
        for(let j = 0; j < arr2.length; j++){
           if(!newArray.includes(arr2[j])){
           newArray.push(arr2[j])
           }
        }
  }
    newArray.sort(function(a,b){
    return a-b
    })
      result.textContent = `unija za ovie dve nizi e ${newArray}`
}

