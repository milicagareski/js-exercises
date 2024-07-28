let input = document.querySelector('.input');
let btn = document.querySelector('.btn')
let result = document.querySelector('.result')

btn.addEventListener('click', primeFactors )

function primeFactors (number) {
num = input.value;
let array = [];
let newArray = [];
let primeFactors = []

  for( let i = 2; i <= num; i++) {
      if(num % i === 0) {
      array.push(i);
      }
  }

  for(let i = 0; i < array.length; i++) {
     for(let j = 2; j < array[i]; j++) {
    
        if(array[i] % j === 0) {
            if(!newArray.includes(array[i])){
            newArray.push(array[i])}
        }
     }
  }

  for(let i = 0; i < array.length; i++) {
    if( !newArray.includes (array[i])) {
        primeFactors.push(array[i])
    }
}
result.innerHTML = `Prime faktors for this number are ${primeFactors}`
console.log(newArray);
console.log(array);
console.log(primeFactors);
}
primeFactors(19643)






