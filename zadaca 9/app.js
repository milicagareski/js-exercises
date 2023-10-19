let input = document.querySelector('.input');
const btn = document.querySelector('.btn')
const result = document.querySelector('.result')


btn.addEventListener('click', factoriel)


function factoriel(number) {
 number = input.value
 count = 1;
 for (let i = number ; i >= 1; i--){
   count *= i
 }
 result.innerHTML = count
}


