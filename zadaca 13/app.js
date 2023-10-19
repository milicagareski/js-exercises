let input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', wordsToCount)

function wordsToCount(a){
 a = input.value;
 const words = a.split(' ');
 let count = 0
 for(let i = 0; i < words.length; i++){
  if (words[i] !== ""){
   count++ 
  }
 }
result.innerHTML = `The sequence has ${count} words`
}
console.log('hello');


