let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');

btn.addEventListener('click', strongNumber)

// function factoriel(num) {
//   let count = 1;
//         for(let i = 1; i <= num; i++) {
//         count *= i;
//         }
// }

function strongNumber(number) {
  number = Number(input.value);
  let num = number.toString();
  let array = [];
  let newArray = [];
  let factoriel = 0;
  let finalResult;
      for (let i = 0; i < num.length; i++){
          array.push(Number(num[i]))
       } 
      for(let i = 0; i < array.length; i++) {
      let count = 1;
          for(let j = 1; j <= array[i]; j++ ) {
          count *= j;
          }
      newArray.push(count)
      }
  for(let i = 0; i < newArray.length; i++) {
    factoriel += newArray[i]
  }
      if(factoriel === number) {
          finalResult = `This is strong number`
      }
      else{
          finalResult = `This is NOT strong number`
      }
  result.innerHTML = finalResult
}

  





