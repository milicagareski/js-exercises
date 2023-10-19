// const input = document.querySelector('.input');
// const btn = document.querySelector('.btn');
// const result = document.querySelector('.result');

let x = [12,1,3,11,13,2];

let y = [12,1,3,11,13,2];

let z = [12,1,3,11,13,2];


console.log(`selection sort`);

function selectionSort (arr) {


for(let i = 0; i < arr.length; i++) {
 let lowest = i;
  for(let j = i+1; j < arr.length; j++) {
   if(arr[lowest] > arr[j]) {
   lowest = j
   }
   if(i !== lowest) {
    let temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp
    console.log(arr);

   }
  }
}
}

selectionSort(z)

console.log(`insertion sort` );

function insertionSort(arr) {

 for(let i = 0; i < arr.length; i++) {
  let current = arr[i];
  let lastElement = i - 1;
  while(lastElement >= 0 && arr[lastElement] > current) {
   arr[lastElement + 1] = arr[lastElement];
   lastElement --
  }
  arr[lastElement + 1] = current;
     console.log(arr);

}
console.log(arr);
}

insertionSort(x)

console.log(`bubble sort`);
function bubbleSort (arr) {

 for(let i = 0 ; i< arr.length; i++) {
   for(let j = 0 ; j< arr.length; j++) {
    // console.log(arr[i], arr[j]);
     if(arr[j] > arr[j+1])  {
      let temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp
       console.log(arr);

     }
   }
 }
}

bubbleSort(y)