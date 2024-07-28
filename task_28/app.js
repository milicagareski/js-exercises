let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');


btn.addEventListener('click', palindrome )


function palindrome (s) {
  s = input.value;
  s = s.toLowerCase();
  s = s.split(" ").join("");
  let reverseSequence = '';
  for(let i = (s.length - 1); i>=0; i--) {
       reverseSequence = reverseSequence + s[i];
  }
 if(s === reverseSequence) {
  result.innerHTML = `The sequence is palindrome`
 }
 else {
    result.innerHTML = `The sequence is NOT palindrome`
 }
}





