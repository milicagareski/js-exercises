let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');

btn.addEventListener('click', countLettersOfLongestWord)

function countLettersOfLongestWord (s) {
 s = input.value
 s = s.split(' ');
 let count = 0;
 for(let i = 0; i < s.length; i++){
   if (s[i].length > count) {
   count = s[i].length
   }
}
result.innerHTML = count
}

