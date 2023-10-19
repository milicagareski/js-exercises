let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');


btn.addEventListener('click', reverseSentence)

function reverseSentence(s) {
  s = input.value;
  let reverse = ""
  for(let i = (s.length-1); i >= 0; i--){
    reverse += s[i]
  }
  result.textContent = `The reverse order of the sequence is "${reverse}"`
}

