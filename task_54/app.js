let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');

btn.addEventListener('click', abudantNumber  )


function abudantNumber (number) {
  number = Number(input.value);
  let array = [];
  let count = 0;
  let finalResult;
    for(let i = 1; i < number; i++){
       if(number % i === 0) {
       array.push(i)
       }
    }
    for(let j = 0; j < array.length; j++){
       count+= array[j]
     }
    if(count > number) {
    finalResult = `This is abudant number`
    }
    else{
    finalResult = `This is NOT abudant number`
     }
  result.innerHTML = finalResult
}

  