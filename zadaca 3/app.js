let inputOne = document.getElementById('inputOne');
let inputTwo = document.getElementById('inputTwo');
let inputThree = document.getElementById('inputThree');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');


btn.addEventListener('click', theBigestNum)

function theBigestNum(){
let a = Number(inputOne.value);
let b = Number(inputTwo.value);
let c = Number(inputThree.value);

// first way

if(a>b && a>c){
  result.innerHTML = a
 }
 else if( b >a && b >c ){
  result.innerHTML = b
}
else if (c > a && c > b) {
result.innerHTML = c
}

// second way
// let array = [a,b,c];
// result.innerHTML = Math.max.apply(null,array)


// third way
// let array = [a,b,c];
// result.innerHTML = Math.max(...array)

}


// DA PRASAM ZA VO EDEN INPUT KAKO MOZI DA SE NAPRAJ

// function bigestNum(array){
//  let a;
//  let b;
//  let c;
//  input.array 
//   if(a>b && a>c){
//   result.innerHTML = a
//  }
//  else if( b >a && b >c ){
//   result.innerHTML = b
// }
// else{
//   result.innerHTML = c
// }
// }





// const numbers = [1,3,2];

// const firstTry = Math.max(...numbers);
// console.log(firstTry);

// const secondTry = Math.max.apply(null, numbers);
// console.log(secondTry);


