
let input = document.querySelector('.input');
let btn = document.querySelector('.btn')
let result = document.querySelector('.result');


// btn.addEventListener('click', )

function factoriel (num) {
  
  if (num === 1) {
       return 1
    }
  let finalResult = num * factoriel(num -1);
  return finalResult
  }




 console.log(factoriel(6))
