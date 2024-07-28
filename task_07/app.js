let input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', IsPrime)
function IsPrime (number){
  number = input.value;
  let prime = true;
  if(number === 1){
   result.innerHTML =`The number is one`
  }
  else if (number > 1){
   for(let i =2; i < number; i++){
    if (number % i === 0) {
     prime = false
    }
 }
 if(prime){
 result.innerHTML =`This is prime number`;
}
else{
 result.innerHTML =`This is not prime number`;
}
}
else{
result.innerHTML =`The number is less than one and is not prime number`;
}

}


