let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');


btn.addEventListener('click', aritmeticMeanAndMedian)


function aritmeticMeanAndMedian (array) {
 array = input.value;
 let arr = array.split(" ");
 let count = 0;
 let median;
 arr.sort()

 for(let i = 0; i < arr.length; i++) {
     count += Number( arr[i] );  
 }
  let resultForAritmeticMean = count / arr.length;

  
  if(arr.length % 2 !== 0) {
      median = ((arr.length + 1) /2);
  }
  else {
      median = `${(Math.floor([(arr.length/2) + ((arr.length/2) + 1)] /2)) },${(Math.ceil([(arr.length/2) + ((arr.length/2) + 1)] /2))}`
  }
result.innerHTML = `Aritmetic mean for this array is ${resultForAritmeticMean} and median is number is position ${median} in array`
}


