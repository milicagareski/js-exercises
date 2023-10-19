let input = document.querySelector('.input');
const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

btn.addEventListener('click', getSummary)



function getSummary(a){
 a = input.value;
 let count = 0;
 for (let i = 0; i <= a; i++){
  count += i;
 }
 result.innerHTML = count
}


