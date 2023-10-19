let input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', perfectNumber)

function perfectNumber(number){
  number = Number(input.value);
  let count = 0;
  let check = false
     for(let i = 1; i < number; i++){
         if(number % i === 0) {
            count += i
         }
     }
     if(count === number) {
        result.textContent = `This is perfect number`;
        check = true   
     } 
     if(!check) {
        result.innerHTML = `not`
     }
}


